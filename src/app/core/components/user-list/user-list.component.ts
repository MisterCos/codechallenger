import { Component, OnInit } from '@angular/core';

import { SpinnerVisibilityService } from 'ng-http-loader';
import { ApiHttpService } from '../../services/api-http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: any = [];
  userSelected: number;
  filterUsers = "";
  ascNumberSort = true;

  constructor(
    private apiService: ApiHttpService,
    private spinner: SpinnerVisibilityService) { }

  ngOnInit(): void {
    this.apiService.getAll().subscribe(data => {

      this.userList = data
     
    });
  }

  passDetailUser(user) {
    this.userSelected = user;
  }

  sortNumberColumn() {
    this.ascNumberSort = !this.ascNumberSort;
    if (this.ascNumberSort) {
     this.userList.sort((a,b)=>(a.id - b.id));
    }else{
      this.userList.sort((a, b) =>(b.id - a.id));
    }
  }

}
