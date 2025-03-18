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
  query!: string;

  constructor() {}

  ngOnInit(){
    this.getItems();
  }

  getItems(){
    this.allItems = this.api.items;
    this.items = [...this.allItems];
  }

  onSearchChange(event: any) {
    //console.log(event.detail.value);

    this.query = event.detail.value.toLowerCase();
    this.querySearch();
  }
  querySearch() {
    this.items = [];
    if (this.query.length > 0) {
      this.searchItems();
    } else {
      this.items = [...this.allItems];
    }
  }

  searchItems() {
    this.items = this.api.items.filter((item) =>
      item.name.toLowerCase().includes(this.query)
    );
  }

  // ngOnDestroy(): void {
  //   if (this.cartSub) this.cartSub.unsubscribe();
  // }
}
