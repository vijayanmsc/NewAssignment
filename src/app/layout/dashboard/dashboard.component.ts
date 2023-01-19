import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  posts: any;

  constructor(public commonService: CommonService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.commonService.getPosts().subscribe(data => {
      console.log(data);
      this.posts = data;
    });
  }
}
