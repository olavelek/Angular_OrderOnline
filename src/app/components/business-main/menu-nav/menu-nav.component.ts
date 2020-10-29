import { ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav/sidenav';
import { BusinessDataService } from 'src/app/services/business-data.service';
import { NavDrawerService } from 'src/app/services/nav-drawer.service';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit, AfterViewInit {
  
  @ViewChild('drawer') public drawer: MatSidenav;
  @Input() drawerState;
  categories: any;
  selectedPage: string;

  constructor(private businessDataService: BusinessDataService, private navDrawerService: NavDrawerService) { }
  
  ngAfterViewInit(): void {
    this.navDrawerService.setSidenav(this.drawer);
  }

  ngOnInit(): void {
    this.selectedPage = "Menu";
    this.categories = this.businessDataService.getMenuCategories(1);
  }

  onSelectDrawerPage(page: any): void{
    this.selectedPage=page; 
    this.navDrawerService.close();
  }

}
