import { Component } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-topdistrictswithmorethan100-hrpregisteredin-twomonths',
  templateUrl: './topdistrictswithmorethan100-hrpregisteredin-twomonths.component.html',
  styleUrls: ['./topdistrictswithmorethan100-hrpregisteredin-twomonths.component.scss']
})
export class Topdistrictswithmorethan100HRPregisteredinTWOMONTHSComponent {

  data:any;
displayedColumns=['index',"district","hrpwr"]
constructor(private apiservice:ApiService){

}

ngOnInit(){
  this.calldata();
}
calldata(){

      this.apiservice.callapi('t15dwmt100hrpr').subscribe((result:any)=>{
        this.data=result;
        this.data=new MatTableDataSource(this.data)
      })
  // this.data=[
  //   {"district":"Raipur" ,"hrpwr":1053}, 
  //   {"district":"Jashpur" ,"hrpwr":731},
  //   {"district":"Kabeerdham" ,"hrpwr":683},
  //   {"district":"Rajnandgaon","hrpwr": 372},
  //   {"district":"Mahasamund" ,"hrpwr":278},
  //   {"district":"Durg" ,"hrpwr":262},
  //   {"district":"Bilaspur","hrpwr": 255},
  //   {"district":"Janjgir - Champa","hrpwr": 249},
  //   {"district":"Raigarh" ,"hrpwr":226},
  //   {"district":"Korba" ,"hrpwr":210},
  //   {"district":"BALODA BAJAR","hrpwr": 177},
  //   {"district":"Koriya" ,"hrpwr":169},
  //   {"district":"BEMETARA","hrpwr": 149},
  //   {"district":"Kanker" ,"hrpwr":134},
  //   {"district":"Dhamtari","hrpwr": 114},
  //   {"district":"BALOD" ,"hrpwr":93},
  //   {"district":"Bastar","hrpwr": 86},
  //   {"district":"MUNGELI","hrpwr": 85},
  //   {"district":"GARIYABANDH","hrpwr": 85},
  //   {"district":"Dantewada","hrpwr": 66},
  //   {"district":"BALRAMPUR" ,"hrpwr":66},
  //   {"district":"KONDAGAON" ,"hrpwr":47},
  //   {"district":"Surguja" ,"hrpwr":41},
  //   {"district":"Bijapur","hrpwr": 29},
  //   {"district":"SURAJPUR","hrpwr": 26},
  //   {"district":"Narayanpur","hrpwr": 25},
  //   {"district":"SUKMA" ,"hrpwr":13}]
}
}
