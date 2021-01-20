import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiHttpService } from '../../services/api-http.service';


@Component({
  selector: 'app-userdetail-full',
  templateUrl: './userdetail-full.component.html',
  styleUrls: ['./userdetail-full.component.scss']
})
export class UserdetailFullComponent implements OnInit {

  idUser: number;
  userDetail:any;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiHttpService,
  ) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('userId'));

    if (productIdFromRoute) {
      this.apiService.getUser(productIdFromRoute).subscribe(userData => {
        this.userDetail = userData;
      });
    };
  }

}
