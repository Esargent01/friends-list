import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
import { Store, select } from '@ngrx/store';
import { selectFriendsList } from 'src/ngrx/selectors/friends.selectors';
import { AppState } from 'src/ngrx/state/app.state';
import { FriendsListModel } from 'src/models/friends-list-model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
  selector: 'fl-friend-list-display',
  imports: [CommonModule],
  templateUrl: './friend-list-display.component.html',
  styleUrls: ['./friend-list-display.component.scss'],
  standalone: true,
})
export class FriendListDisplayComponent implements OnInit {

  friendListData$: Observable<FriendsListModel[]>;
  private svg: any;
  private margin = 0;
  private width = 600;
  private height = 420;
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.setObservables();
  }

  private setObservables() {
    this.friendListData$ = this.store.pipe(select(selectFriendsList)).pipe(
      map((result: any)=>{
        this.resetDisplay();
        this.createSvg();
        this.createColors(result);
        this.drawChart(result);
        return result;
      })
    );
  }

  private createSvg(): void {
    this.svg = d3.select("figure#pie")
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    .append("g")
    .attr(
      "transform",
      "translate(" + this.width / 2 + "," + this.height / 2 + ")"
    );
  }

  private createColors(data: any): void {
    this.colors = d3.scaleOrdinal()
    .domain(data.map((d: { weight: { toString: () => any; }; }) => d.weight.toString()))
    .range(["#a3f6ce", "#52b7c4", "#75d7ca", "#0879e4", "#673ab7"]);
}

private drawChart(data: any): void {
    const pie = d3.pie<any>().value((d: any) => Number(d.friends.length));

    this.svg
    .selectAll('pieces')
    .data(pie(data))
    .enter()
    .append('path')
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(this.radius)
    )
    .attr('fill', (d: any, i: any) => (this.colors(i)))
    .attr("stroke", "#121926")
    .style("stroke-width", "1px");

    const labelLocation = d3.arc()
    .innerRadius(100)
    .outerRadius(this.radius);

    this.svg
    .selectAll('pieces')
    .data(pie(data))
    .enter()
    .append('text')
    // If the user has no friends, then we dont want to display them in the pie chart. 
    // The names will just stack over one another at the 0 position.
    .text((d: { data: { name: any; age: any, friends: any }; }) => d.data.friends.length ? `${d.data.name} - Age: ${d.data.age}` : '')
    .attr("transform", (d: d3.DefaultArcObject) => "translate(" + labelLocation.centroid(d) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 15)
    .style("text-transform", "capitalize")
    .style("width", 40);
  }

  private resetDisplay(): void {
    d3.selectAll('svg').remove();
  }
}
