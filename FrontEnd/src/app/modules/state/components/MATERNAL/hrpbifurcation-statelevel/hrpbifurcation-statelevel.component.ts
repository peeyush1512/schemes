import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-hrpbifurcation-statelevel',
  templateUrl: './hrpbifurcation-statelevel.component.html',
  styleUrls: ['./hrpbifurcation-statelevel.component.scss']
})
export class HRPbifurcationStatelevelComponent {

  data: any;
  displayedColumns = ["index", "Criteria", "Number", "percentage"]
  constructor(private apiservice: ApiService) {

  }

  ngOnInit() {


    this.calldata();
  }
  calldata() {

    this.apiservice.callapi('hrplbsl').subscribe((result: any) => {
      this.data = result;
      this.data = new MatTableDataSource(this.data);
    })

    // this.data=new MatTableDataSource([ { "Criteria": "Previous LSCS","Number":1183 ,"percentage":22.3 },
    // { "Criteria": "High BP " ,    "Number":1073 ,"percentage":20.2 },
    // { "Criteria": "Anemia cases", "Number": 537 ,"percentage":10.1 },
    // { "Criteria": "Abortion ",    "Number":447 , "percentage":8.4, },
    // { "Criteria": "Multigravida", "Number": 444, "percentage": 8.4 },
    // { "Criteria": "out of which severe anemia","Number":290,"percentage": 5.5 },
    // { "Criteria": "Diabetic ","Number":278,"percentage": 5.2 },
    // { "Criteria": "Sickling" ,"Number":185,"percentage": 3.5 },
    // { "Criteria": "Short stature","Number": 182,"percentage": 3.4 },
    // { "Criteria": "Low weight" ,"Number":168 ,"percentage":3.2 },
    // { "Criteria": "AGE ABOVE 35 YEARS ","Number":145,"percentage": 2.7 },
    // { "Criteria": "Still birth","Number": 109 ,"percentage":2.1 },
    // { "Criteria": "AGE <18","Number": 108,"percentage": 2.0 },
    // { "Criteria": "Overweight ","Number":46 ,"percentage":0.9 },
    // { "Criteria": "Low BP ","Number":33 ,"percentage":0.6 },
    // { "Criteria": "Gap more than 3 yrs" ,"Number":27 ,"percentage":0.5 },
    // { "Criteria": "Thyorid ","Number":50 ,"percentage": 0.9 }]);
  }

}
