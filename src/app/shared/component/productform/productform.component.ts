import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Iproduct } from '../../model/product';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit {
  productname! :string;
  productDescription! :string;
  @Output() onFormAdd : EventEmitter<Iproduct>=new EventEmitter<Iproduct>()
  constructor() { }

  ngOnInit(): void {
  }
  addProductDetails(type:string){
    let obj= {
      pName : this.productname,
      pDescription :this.productDescription,
      pType : type
    }
    console.log(obj);
    /* this.productsArray.push(obj) */
    this.onFormAdd.emit(obj)
    this.clearFields()
  }
  
  clearFields(){
    this.productname='';
    this.productDescription='';
  }
}
