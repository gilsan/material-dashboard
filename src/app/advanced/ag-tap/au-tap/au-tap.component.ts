import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-au-tap',
  templateUrl: './au-tap.component.html',
  styleUrls: ['./au-tap.component.scss']
})
export class AuTapComponent implements OnInit {

  @Input() title: string;
  @Input() selected = false;

  constructor() { }

  ngOnInit() {
  }

}
