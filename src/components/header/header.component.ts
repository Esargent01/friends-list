import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FriendInputComponent } from '../friend-input/friend-input.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'fl-header',
  templateUrl: './header.component.html',
  imports: [
    FriendInputComponent, 
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  styleUrls: ['./header.component.scss'], 
  standalone: true,
})
export class HeaderComponent {
  constructor( private dialog: MatDialog ) { }

  public openDialog() {
    this.dialog.open(FriendInputComponent);
  }

}
