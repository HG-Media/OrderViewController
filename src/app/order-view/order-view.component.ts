import { Component, Input, OnInit } from '@angular/core';
import { OrderViewService } from '../service/order-view.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html'
})
export class OrderViewComponent implements OnInit {

  constructor(private service:OrderViewService) { } 
  
  public serviceList:any
  public values:any;
  public value:number=0
  public link:string="";
  public price:number=0
  public quantity:number=0;
  public order:{ [id: number]: IService; }={}

  ngOnInit(): void {
    this.value = 0
    this.refreshTasktypeList();
  }
  refreshTasktypeList(){
    this.service.getService().subscribe(res =>{
      this.serviceList=res
      this.order=res
    })
  }

  public orderView(){
    this.values = "- Start Time: "+ this.order[this.value].startTime+ "\n"+ "- Speed: "+  this.order[this.value].speed + "\n" +"- Policy: "+  this.order[this.value].policy

    this.price =  this.order[this.value].price ;
  }

  public submitClick(){
      var val = {
        link:this.link,
        quantity:this.quantity,
        charge:this.quantity*this.price/1000,
        serviceID:this.order[this.value].id
      };
      console.log("test",val)
    this.service.submit(val).subscribe(res=>{
      alert("Submit Success!!!!!")
      console.log(val)
    })
  }
}
interface IService {
  id: number;
  service: string;
  startTime: string;
  policy: string;
  speed: string;
  title: string;
  price: number;
}
