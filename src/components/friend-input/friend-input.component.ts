import { Component, Inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, ReactiveFormsModule, Validators, FormArray, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addFriends } from 'src/ngrx/actions/friends.actions';
import { AppState } from 'src/ngrx/state/app.state';
import { FriendsListModel } from 'src/models/friends-list-model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'fl-friend-input',
  imports: [
    MatFormFieldModule,
    MatIconModule, 
    MatSliderModule, 
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './friend-input.component.html',
  styleUrls: ['./friend-input.component.scss'],
  standalone: true,
})
export class FriendInputComponent{

  form = this.fb.group({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    weight: new FormControl('', [Validators.required]),
    friends: this.fb.array([])
  });


  constructor(private fb: FormBuilder, private store: Store<AppState>, @Inject(MAT_DIALOG_DATA) public data: FriendsListModel) {}

  // ngOnInit(){
  //   if(this.data){
  //     this.populateEditForm(this.form, this.data);
  //   }
  // }

  get friends() {
    return this.form.controls["friends"] as FormArray;
  }

  public addFriends(): void {
    const friendForm = this.fb.group({
      name: ['', Validators.required],
    });
    this.friends.push(friendForm);
  }

  public removeFriend(index: number): void {
    this.friends.removeAt(index);
  }

  public onSubmit(): void{
    this.addNewFriend();
    //this.data ? this.editExistingFriend() : this.addNewFriend();
  }

  private addNewFriend(): void{
    this.store.dispatch(addFriends({friendsList: this.form?.value}));
  }

  // private editExistingFriend(): void{
  //   this.store.dispatch(editFriend({friendsList: this.form?.value, friendID: this.data.id}));
  // }

  // private populateEditForm(form: FormGroup, data: FriendsListModel): void{
  //   form.patchValue({
  //     name: data.name,
  //     weight: data.weight,
  //     friends: data.friends,
  //     age: data.age
  //   });
  // }
}