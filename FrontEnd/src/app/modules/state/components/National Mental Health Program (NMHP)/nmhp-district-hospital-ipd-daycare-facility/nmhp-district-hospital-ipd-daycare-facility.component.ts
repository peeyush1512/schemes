import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-nmhp-district-hospital-ipd-daycare-facility',
  templateUrl: './nmhp-district-hospital-ipd-daycare-facility.component.html',
  styleUrls: ['./nmhp-district-hospital-ipd-daycare-facility.component.scss']
})
export class NMHPDISTRICTHOSPITALIPDDAYCAREFACILITYComponent {

 
  data: any;

  displayedColumns: string[] = ['percent', 'name'];
  dataSource: any;
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }



  
  calldata() {
    this.data = [{ percent: '51', data: [],color:"green" }, { percent: '50', data: [],color:"yellow" }, { percent: '30', data: [],color:"red" }];
    
    this.apiservice.callapi('nmhpdhipddf').subscribe((result:any)=>{
      result.forEach((element:any) => {
        if (element.value > 50) {
          this.data[0].data.push(element)
        } else if (element.value <= 50 && element.value >= 30) {
          this.data[1].data.push(element)
        } else if (element.value < 30) {
          this.data[2].data.push(element)
        }
      });
      this.data=new MatTableDataSource(this.data);
    })

}

}
