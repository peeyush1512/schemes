import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-suspect-examination-rate-three-months',
  templateUrl: './suspect-examination-rate-three-months.component.html',
  styleUrls: ['./suspect-examination-rate-three-months.component.scss']
})
export class SuspectExaminationRateTHREEMONTHSComponent {


  data: any;

  displayedColumns: string[] = ['Indicator', 'district'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){

    // this.data1 = [{ value: 1448, id: 1, dist: 'A' }, { value: 1143, id: 1, dist: 'B' },
    // { value: 2477, id: 1, dist: 'D' }, { value: 1945, id: 1, dist: 'E' }, { value: 2123, id: 1, dist: 'G' },
    // { value: 1790, id: 1, dist: 'S' }, { value: 1889, id: 1, dist: 'W' },
    // { value: 1567, id: 1, dist: 'Q' }, { value: 2102, id: 1, dist: 'R' }]
    this.calldata();


  }



  
  calldata() {
    this.data = [{ percent: '2000', data: [],color:"green" }, { percent: '1500', data: [],color:"yellow" }, { percent: '1400', data: [],color:"red" }];

    this.apiservice.callapi('ser').subscribe((result:any)=>{
      result.forEach((element:any) => {
        if (element.value > 2000) {
          this.data[0].data.push(element)
        } else if (element.value <= 2000 && element.value >= 1500) {
          this.data[1].data.push(element)
        } else if (element.value < 1500) {
          this.data[2].data.push(element)
        }
      });
      this.data=new MatTableDataSource(this.data);
    });

  // this.data1.forEach((element: any) => {

    // if (element.value > 2000) {
    //   this.data[0].data.push(element)
    // } else if (element.value <= 2000 && element.value >= 1500) {
    //   this.data[1].data.push(element)
    // } else if (element.value < 1500) {
    //   this.data[2].data.push(element)
    // }
  // });

  // this.data = new MatTableDataSource(this.data);
 
  
}



}
