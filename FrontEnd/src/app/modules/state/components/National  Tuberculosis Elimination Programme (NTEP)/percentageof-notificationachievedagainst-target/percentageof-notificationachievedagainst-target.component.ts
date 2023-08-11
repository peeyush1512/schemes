import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-percentageof-notificationachievedagainst-target',
  templateUrl: './percentageof-notificationachievedagainst-target.component.html',
  styleUrls: ['./percentageof-notificationachievedagainst-target.component.scss']
})
export class PercentageofNotificationachievedagainstTargetComponent {
  

  // data1: any;
  data: any;

  displayedColumns: string[] = ['Indicator', 'district'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){

    // this.data1 = [{ value:48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 23, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 83, id: 1, dist: 'R' }]
    this.calldata();


  }



  
  calldata() {
    this.data = [{ percent: '100', data: [],color:"green" }, { percent: '85', data: [],color:"yellow" }, { percent: '75', data: [],color:"red" }];

    this.apiservice.callapi('pnaat').subscribe((result:any)=>{
      result.forEach((element:any) => {
        if (element.value > 85) {
          this.data[0].data.push(element)
        } else if (element.value <= 85 && element.value >= 75) {
          this.data[1].data.push(element)
        } else if (element.value < 75) {
          this.data[2].data.push(element)
        }
      });
      this.data=new MatTableDataSource(this.data);
    });
  // this.data1.forEach((element: any) => {

  //   if (element.value > 85) {
  //     this.data[0].data.push(element)
  //   } else if (element.value <= 85 && element.value >= 75) {
  //     this.data[1].data.push(element)
  //   } else if (element.value < 75) {
  //     this.data[2].data.push(element)
  //   }
  // });
  // this.data = new MatTableDataSource(this.data);
 
  
}


}
