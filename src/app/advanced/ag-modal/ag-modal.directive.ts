import { Directive, TemplateRef, ViewContainerRef, Input, OnInit, OnDestroy } from '@angular/core';
import { AgModelService } from './ag-model.service';

@Directive({
  selector: '[appAgModal]'
})
export class AgModalDirective implements OnInit, OnDestroy {
  elements: HTMLBaseElement[];
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private modalService: AgModelService
  ) { }

  ngOnInit() {
    this.modalService.close$
      .subscribe(() => {
        this.viewContainer.clear();
      });
  }

  ngOnDestroy() {
    /*
    this.elements.forEach(el => {
      el.removeEventListener('click',  () => {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);
      } );
    });
    */
  }

  @Input() set appAgModal(els) {
    if (els.length) {
      this.elements = els;
    } else {
      this.elements = [els];
    }

    this.elements.forEach( el => el.addEventListener('click', () => {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    } ));
  }

}
