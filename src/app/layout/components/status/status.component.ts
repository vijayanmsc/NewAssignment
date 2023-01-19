import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  @Input() icon: string = "";
  @Input() count: number= 0;
  @Input() label: string= "";
  @Input() data: number= 0;
  constructor() {}

  ngOnInit(): void {}
}
