import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-successful-discharge-rateat-nutrition-rehabilitation-centres',
  templateUrl: './successful-discharge-rateat-nutrition-rehabilitation-centres.component.html',
  styleUrls: ['./successful-discharge-rateat-nutrition-rehabilitation-centres.component.scss']
})
export class SuccessfulDischargeRateatNutritionRehabilitationCentresComponent {


  
  data: any;
  data1: any;


  displayedColumns: string[] = ['percent', 'name'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){

    // this.data1 = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]
    this.calldata();


  }

  
  calldata() {
    this.data = [{ percent: '76', data: [],color:"green" }, { percent: '50', data: [],color:"yellow" }, { percent: '49', data: [],color:"red" }];

    this.apiservice.callapi('sdrnrc').subscribe((result: any) => {
      result.forEach((element: any) => {
        if (element.sdrnrc > 75) {
          this.data[0].data.push(element)
        } else if (element.sdrnrc <= 75 && element.sdrnrc >= 50) {
          this.data[1].data.push(element)
        } else if (element.sdrnrc < 50) {
          this.data[2].data.push(element)
        }
      });
      this.data = new MatTableDataSource(this.data);
    })

  // this.data1.forEach((element: any) => {

  //   if (element.value > 75) {
  //     this.data[0].data.push(element)
  //   } else if (element.value <= 75 && element.value >= 50) {
  //     this.data[1].data.push(element)
  //   } else if (element.value < 50) {
  //     this.data[2].data.push(element)
  //   }
  // });

  // this.data = new MatTableDataSource(this.data);
 
  }


}
