import { Component, inject } from '@angular/core';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  items:any[] = [];
  allItems: any[] = [];
  private api = inject(ApiService);
i: any;

  constructor() {}

  ngOnInit(){
    this.getItems();
  }

  getItems(){
    this.allItems = this.api.items;
    this.items = [...this.allItems];
  }

}
