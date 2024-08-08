import { Component } from '@angular/core';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  username = "Muyinjon Turobov";

  itemname = "Iphone 15 pro max";

  setStatus:string = 'no';



  getStockStatus(){
    return this.setStatus;
  }
  isSoldOut:boolean = true;

  onSave(){
    alert("information Saved");
  }



total_in_stock:number=20
total_added:number=0
  productmsg:string =""
  outStock:string =""
  btn_out_stock:boolean = false
  addProduct(){
    if(this.total_in_stock > 0){
    this.total_added ++
    this.total_in_stock --}
    else{
      this.outStock = "out of stock"
      this.btn_out_stock = true
    }
  }











  //set button to be disabled in 5 seconds
  constructor(){
    setTimeout(()=>{
      this.isSoldOut = false;
    }, 5000);
  }


}
