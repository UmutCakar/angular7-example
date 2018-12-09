import { Component, OnInit, Input } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  customers:Customer[] = []
  selectedCustomer:Customer

  //Üst component'den yani AppComponent'den getiriyorum.
  @Input() text:string

  selectCustomer(customer:Customer){
    this.selectedCustomer = customer
  }

  ngOnInit() {
    this.customers = [
      { id: 1, firstName: "Umut", lastName: "Çakar", age: 22},
      { id: 2, firstName: "Utku", lastName: "Çakar", age: 20},
      { id: 3, firstName: "Eren", lastName: "Uyan", age: 14}
    ]
  }

}
