import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-success-rate-of-year',
  templateUrl: './success-rate-of-year.component.html',
  styleUrls: ['./success-rate-of-year.component.scss']
})
export class SuccessRateOFYEARComponent {


  data1: any;
  data: any;

  displayedColumns: string[] = ['Indicator', 'district'];

  constructor(private apiservice: ApiService) {

  }

  ngOnInit() {

    // this.data1 = [{ value:48, id: 1, dist: 'A' }, { value: 83, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 95, id: 1, dist: 'E' }, { value: 97, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 99, id: 1, dist: 'W' },
    // { value: 87, id: 1, dist: 'Q' }, { value: 88, id: 1, dist: 'R' }]
    this.calldata();


  }




  calldata() {
    this.data = [{ percent: '100', data: [], color: "green" }, { percent: '90', data: [], color: "yellow" }, { percent: '85', data: [], color: "red" }];

    this.apiservice.callapi('srt').subscribe((result: any) => {
      result.forEach((element: any) => {
        if (element.value > 90) {
          this.data[0].data.push(element)
        } else if (element.value <= 90 && element.value >= 86) {
          this.data[1].data.push(element)
        } else if (element.value < 86) {
          this.data[2].data.push(element)
        }
      });
      this.data = new MatTableDataSource(this.data);
    });

    // this.data1.forEach((element: any) => {

    //   if (element.value > 90) {
    //     this.data[0].data.push(element)
    //   } else if (element.value <= 90 && element.value >= 86) {
    //     this.data[1].data.push(element)
    //   } else if (element.value < 86) {
    //     this.data[2].data.push(element)
    //   }
    // });
    // this.data = new MatTableDataSource(this.data);


  }


}
