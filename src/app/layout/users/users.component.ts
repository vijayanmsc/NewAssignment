import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { CommonService } from 'src/app/shared/services/common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {
  users: any;
  userCount: number = 0;
  template: TemplateRef<any>;
  subscriptions: Subscription ;
  isListView: boolean = true;

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  constructor(public commonService: CommonService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.isListView = true;
  }

  ngAfterViewInit() {
    this.getUsers();
  }

  toggleView(template: TemplateRef<any>, data:any) {
    this.template = template;
    this.isListView = data;
    console.log(this.isListView);
  }

  getUsers() {
    this.subscriptions = this.commonService.getUsers().subscribe(data => {
      this.users = data;
      this.userCount = data.length;
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscriptions.unsubscribe();
  }
}
