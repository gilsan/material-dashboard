import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ag-modal',
  templateUrl: './ag-modal.component.html',
  styleUrls: ['./ag-modal.component.scss']
})
export class AgModalComponent implements OnInit {
  loginActive = true;
  constructor() { }

  ngOnInit() {
  }

  setLoginActive(loginActive) {
      this.loginActive = loginActive;
  }

}
