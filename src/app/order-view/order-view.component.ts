import { Component, Input, OnInit } from '@angular/core';
import { OrderViewService } from '../service/order-view.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']

})
export class OrderViewComponent implements OnInit {

  constructor(private service:OrderViewService) { } 
  
  public file:any
  public fileImg:string = ""
  public serviceList:any
  public values:any;
  public value:number=0
  public link:string="";
  public keyword:string="";
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
        idVideo:this.link,
        viewOrder:this.quantity,
        keyword:this.keyword,
        status:0,
        type:1,
        time:500
      };
      let fileToUpload = <File>this.file[0];
      const formData = new FormData();
      this.fileImg = fileToUpload.name
      formData.append('file', fileToUpload, fileToUpload.name);
      formData.append('idVideo',this.link);
      formData.append('viewOrder',this.quantity.toString());
      formData.append('keyword',this.keyword);
      formData.append('status',"0");
      formData.append('time',"500")
      formData.append('type',"1")
      this.service.submit(formData).subscribe(res=>{
      alert("Submit Success!!!!!")
      console.log(val)
    })
  }
  public uploadFile = (files:any) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    this.file = files
    console.log('Upload',this.file)
    this.fileImg = fileToUpload.name
          // formData.append('address',ip)
          // this.homeService.uploadImagesThumbToPhone(formData).subscribe(event => {
          //     console.log("Upload Images Thumb To Phone:",event)s
          //     data.message = event
          //     data.statusOption = false
          //     this.countSuccess = this.countSuccess + 1
              
          //   });
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
