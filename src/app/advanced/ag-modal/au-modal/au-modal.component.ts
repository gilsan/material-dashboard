import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { AgModelService } from '../ag-model.service';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-au-modal',
  templateUrl: './au-modal.component.html',
  styleUrls: ['./au-modal.component.scss']
})
export class AuModalComponent implements OnInit {


   @Input() body: TemplateRef<any>;
   @Input() context: any;
  constructor(
    private modalService: AgModelService,
    private eventManager: EventManager
  ) { }

  ngOnInit() {
    this.eventManager.addGlobalEventListener('window', 'keyup.esc', () => {
      this.close();
    });
  }

  close() {
    this.modalService.close();
  }

  cancelClick(evt: KeyboardEvent) {
   evt.preventDefault();
   evt.stopPropagation();

  }

}
