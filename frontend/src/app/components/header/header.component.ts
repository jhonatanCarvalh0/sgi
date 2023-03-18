import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchOverlay = false;

  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkCanShowSearchOverlay(window.innerWidth);
  }

  ngOnInit(): void {
    this.checkCanShowSearchOverlay(window.innerWidth);
  }
  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      console.log('enter head-trimed');
      styleClass = 'head-trimed';
    } else {
      console.log('enter md-screen');
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  checkCanShowSearchOverlay(innerWidth: number): void {
    if (innerWidth < 845) {
      this.canShowSearchOverlay = true;
    } else {
      this.canShowSearchOverlay = false;
    }
  }
}
