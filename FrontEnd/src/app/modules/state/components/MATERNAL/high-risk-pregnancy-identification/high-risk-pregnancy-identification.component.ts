import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-high-risk-pregnancy-identification',
  templateUrl: './high-risk-pregnancy-identification.component.html',
  styleUrls: ['./high-risk-pregnancy-identification.component.scss']
})
export class HighRiskPregnancyIdentificationComponent {


  data:any;
  // calldata:any;

  displayedColumns: string[] = ['percent', 'name'];

  constructor(private apiservice:ApiService){

  }
  ngOnInit(){
    this.calldata();
  }

  calldata(){
    this.data = [{ percent: '15', data: [],color:"#16eb32" }, { percent: '14', data: [],color:"yellow" }, { percent: '9', data: [],color:"#e8a054" }, { percent: '6', data: [],color:"red" }];
    // this.calldata = [{ value: 8, id: 1, dist: 'A' }, { value: 4, id: 1, dist: 'B' },
    // { value: 7, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 13, id: 1, dist: 'G' },
    // { value: 23, id: 1, dist: 'S' }, { value: 9, id: 1, dist: 'W' },
    // { value: 6, id: 1, dist: 'Q' }, { value: 1, id: 1, dist: 'R' },{ value: 43, id: 1, dist: 'Q' }, { value: 76, id: 1, dist: 'R' }]

        
    this.apiservice.callapi('hrpi').subscribe((result:any)=>{
    result.forEach((element: any) => {      
      if (element.hrpi > 15) {
        this.data[0].data.push(element)
      } else if (element.hrpi <= 15 && element.hrpi >= 10) {
        this.data[1].data.push(element)
      } else if (element.hrpi <=9 && element.hrpi>=6) {
        this.data[2].data.push(element)
      }else if (element.hrpi < 6) {
        this.data[3].data.push(element)
      }
    });
    this.data = new MatTableDataSource(this.data);
    })
   }
}
