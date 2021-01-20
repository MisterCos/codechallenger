import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  
  @Input() userSelected: any;
  userDetail:any;

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges():void {
    this.userDetail = this.userSelected;
  }

}
