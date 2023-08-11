import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-amb-per-of-children-s-fn-monthsgiven-e-t-dosesof-ifasyrupeverymonth',
  templateUrl: './amb-per-of-children-s-fn-monthsgiven-e-t-dosesof-ifasyrupeverymonth.component.html',
  styleUrls: ['./amb-per-of-children-s-fn-monthsgiven-e-t-dosesof-ifasyrupeverymonth.component.scss']
})
export class AMBPEROfChildrenSFNMonthsgivenETDosesofIFAsyrupeverymonthComponent {


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



    this.apiservice.callapi('ambpc6m').subscribe((result: any) => {
      result.forEach((element: any) => {
        if (element.ambpc6m > 75) {
          this.data[0].data.push(element)
        } else if (element.ambpc6m <= 75 && element.ambpc6m >= 50) {
          this.data[1].data.push(element)
        } else if (element.ambpc6m < 50) {
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
