import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, TemplateRef, Input } from '@angular/core';
import { AuTapComponent } from '../au-tap/au-tap.component';

@Component({
  selector: 'app-au-tap-panel',
  templateUrl: './au-tap-panel.component.html',
  styleUrls: ['../tap-panel.component.scss', './au-tap-panel.component.scss']
})
export class AuTapPanelComponent implements OnInit, AfterContentInit {

  @ContentChildren(AuTapComponent) tabs: QueryList<AuTapComponent>;
  @Input() headerTemplate: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {

    const selectedTab = this.tabs.find(tab => tab.selected );
    console.log(selectedTab && this.tabs.first);
    if (!selectedTab) {
      this.tabs.first.selected = true;
    }
  }

  selectedTab(tab: AuTapComponent ) {
     this.tabs.forEach( tabb => tabb.selected = false);
     console.log(tab);
     tab.selected = true;
  }

  get tabsContext() {
    return { tabs: this.tabs }
  }

}
