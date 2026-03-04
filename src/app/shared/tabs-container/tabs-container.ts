import { AfterContentInit, Component, contentChildren } from '@angular/core';
import { Tab } from '../tab/tab';
import { NgClass } from '@angular/common';



@Component({
  selector: 'app-tabs-container',
  imports: [NgClass],
  templateUrl: './tabs-container.html',
  styleUrl: './tabs-container.scss',
})
export class TabsContainer implements AfterContentInit {
  tabs = contentChildren(Tab);

  selectTab(tab: Tab) {
    this.tabs().forEach(t => t.isActive.set(false));
    tab.isActive.set(true);
    // Prevent default anchor behavior
    return false;
  }

  ngAfterContentInit() {
    const activeTab = this.tabs().find(tab => tab.isActive());
    if(!activeTab) {
      this.selectTab(this.tabs()[0]);
    }
  }
}
