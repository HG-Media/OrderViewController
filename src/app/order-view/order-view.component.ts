import { Component, Input, OnInit } from '@angular/core';
import { OrderViewService } from '../service/order-view.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html'
})
export class OrderViewComponent implements OnInit {

  constructor(private service:OrderViewService) { } 
  
  public taskTypeList:any
  public values:any;
  public value:number=0
  public link:string="";
  public charge:string=""
  public quantity:number=0;
  public order:{ [id: number]: IService; }={}

  ngOnInit(): void {
    this.value = 0
    this.refreshTasktypeList();
  }
  refreshTasktypeList(){
    this.service.getSerialNumber().subscribe(res =>{
      this.taskTypeList=res
      this.order=res
    })
  }

  public orderView(){
    this.values = this.order[this.value].taskTypeID
  }

  public submitClick(){
    var splitLink=this.link.split('=')
    var idLink = splitLink[1]
    var vieworder:number = +this.quantity
      var val = {
        taskID:0,
        taskType:this.order[this.value].taskTypeID,
        keyword:this.order[this.value].description ,
        idVideo:idLink,
        viewOrder:vieworder
      };
    this.service.addTask(val).subscribe(res=>{
      alert("Submit Success!!!!!")
    })
    
  }
}
interface IService {
  taskTypeID: number;
  taskID: number;
  description: string;
}
