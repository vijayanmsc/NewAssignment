import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss']
})
export class UsercardComponent implements OnInit {
  @Input() users: any;
  constructor() {}

  ngOnInit(): void {}
}
