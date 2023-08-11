import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-hat-bajar-latitude-and-longitude',
  templateUrl: './hat-bajar-latitude-and-longitude.component.html',
  styleUrls: ['./hat-bajar-latitude-and-longitude.component.scss']
})
export class HatBajarLatitudeAndLongitudeComponent {

 
  data: any;

  displayedColumns: string[] = ['index', 'district','hbn','llu','per'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }

  
  calldata() {

    this.apiservice.callapi('chbl&ls').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}

}
