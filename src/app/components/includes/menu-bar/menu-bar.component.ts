import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent  implements OnInit {
  @ViewChild('menuText') menuText!: ElementRef;
  selectedItem: string = 'home'; // Initially selecting home

  menus: any = [
    {
      name: 'home',
      icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179.1 145"><g id="home-anm"><path stroke-linejoin="round" stroke-linecap="round" d="M70.5,80.1h40.7" /><path d="M35,64v80" /><path d="M145.1,143V63" /><path stroke-linecap="round" stroke-linejoin="round" d="M24.9,70l65.7-50.7L156.3,70" /></g><path stroke-linejoin="round"d="M145.1,117.6v33.1c0,1.5-1.2,2.8-2.8,2.8h-28.4c-1.5,0-2.8-1.2-2.8-2.8V126c0-11.3-9.2-20.5-20.5-20.5l0,0c-11.3,0-20.5,9.2-20.5,20.5v27.5h16H37.8c-1.5,0-2.8-1.2-2.8-2.8v-34.2" /></svg>'
    },
    {
      name: 'asas',
      icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179.1 145"><g id="home-anm"><path stroke-linejoin="round" stroke-linecap="round" d="M70.5,80.1h40.7" /><path d="M35,64v80" /><path d="M145.1,143V63" /><path stroke-linecap="round" stroke-linejoin="round" d="M24.9,70l65.7-50.7L156.3,70" /></g><path stroke-linejoin="round"d="M145.1,117.6v33.1c0,1.5-1.2,2.8-2.8,2.8h-28.4c-1.5,0-2.8-1.2-2.8-2.8V126c0-11.3-9.2-20.5-20.5-20.5l0,0c-11.3,0-20.5,9.2-20.5,20.5v27.5h16H37.8c-1.5,0-2.8-1.2-2.8-2.8v-34.2" /></svg>'
    },
    {
      name: 'asaasasas',
      icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179.1 145"><g id="home-anm"><path stroke-linejoin="round" stroke-linecap="round" d="M70.5,80.1h40.7" /><path d="M35,64v80" /><path d="M145.1,143V63" /><path stroke-linecap="round" stroke-linejoin="round" d="M24.9,70l65.7-50.7L156.3,70" /></g><path stroke-linejoin="round"d="M145.1,117.6v33.1c0,1.5-1.2,2.8-2.8,2.8h-28.4c-1.5,0-2.8-1.2-2.8-2.8V126c0-11.3-9.2-20.5-20.5-20.5l0,0c-11.3,0-20.5,9.2-20.5,20.5v27.5h16H37.8c-1.5,0-2.8-1.2-2.8-2.8v-34.2" /></svg>'
    }
  ]

  constructor() { }

  ngOnInit() {}


  selectItem(item: string): void {
    this.selectedItem = item;
  }

  setLineWidth(): void {
    const textElement = this.menuText.nativeElement as HTMLElement;
    const lineWidth = textElement.offsetWidth + 'px';
    document.documentElement.style.setProperty('--lineWidth', lineWidth);
  }

}
