import { Component } from '@angular/core';
import { Iproduct } from './shared/model/product';
/* import { Iproduct } from './shared/model/product'; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '2.IOProductCatlogTask';

  productsArray:Iproduct[]  = [{
    pName : "Iphone",
    pDescription : "It is Iphone13",
    pType : "Product"
  },
  {
    pName : "Samsung",
    pDescription : "It is Samsung M30",
    pType : "Catlog"
  }
]
getDataFromProductForm(eve:Iproduct){
  this.productsArray.push(eve)
}

/* addProduct(){
  let obj= {
    pName : this.productname,
    pDescription :this.productDescription,
    pType : "Product"
  }
  this.productsArray.push(obj)
  this.clearFields()
} 
addCatlog(type:string){
  let obj= {
    pName : this.productname,
    pDescription :this.productDescription,
    pType : type
  }
  console.log(obj);
  this.productsArray.push(obj)
  this.clearFields()
}*/


}
