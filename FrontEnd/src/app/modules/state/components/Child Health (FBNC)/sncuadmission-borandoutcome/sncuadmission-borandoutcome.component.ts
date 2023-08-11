import { Component } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-sncuadmission-borandoutcome',
  templateUrl: './sncuadmission-borandoutcome.component.html',
  styleUrls: ['./sncuadmission-borandoutcome.component.scss']
})
export class SNCUAdmissionBORANDOutcomeComponent {


  data: any;
  displayedColumns:string[]=['index','district','beds','admissions','bedOR','discharge','lama','referper','deathper']

  constructor(private apiservice:ApiService) {

  }

  ngOnInit() {
    this.calldata();
  }


  calldata() {
    this.apiservice.callapi('sncuabor&o').subscribe((result: any) => {
      this.data = new MatTableDataSource(result);
    })
 
    // this.data = [
    //   { "district": "SNCU MC Raipur", "beds": 5, "admissions": 414, "bedOR": 103, "discharge": 60, "lama": 7, "referper": 1, "deathper": 32 },
    //   { "district": "SNCU DH Raigarh ", "beds": 12, "admissions": 198, "bedOR": 124, "discharge": 72, "lama": 6, "referper": 3, "deathper": 20 },
    //   { "district": "SNCU MC Jagdalpur", "beds": 36, "admissions": 512, "bedOR": 143, "discharge": 81, "lama": 2, "referper": 1, "deathper": 16 },
    //   { "district": "SNCU MC Ambikapur", "beds": 35, "admissions": 685, "bedOR": 174, "discharge": 78, "lama": 4, "referper": 3, "deathper": 15 },
    //   { "district": "SNCU DH Kanker", "beds": 12, "admissions": 148, "bedOR": 99, "discharge": 84, "lama": 0, "referper": 3, "deathper": 13 },
    //   { "district": "SNCU DH Korba", "beds": 12, "admissions": 242, "bedOR": 123, "discharge": 81, "lama": 6, "referper": 1, "deathper": 13 },
    //   { "district": "SNCU DH JAGDALPUR", "beds": 15, "admissions": 41, "bedOR": 3, "discharge": 80, "lama": 0, "referper": 10, "deathper": 10 },
    //   { "district": "SNCU DH Bijapur", "beds": 12, "admissions": 79, "bedOR": 55, "discharge": 76, "lama": 7, "referper": 7, "deathper": 10 },
    //   { "district": "SNCU DH Durg ", "beds": 13, "admissions": 226, "bedOR": 131, "discharge": 87, "lama": 0, "referper": 4, "deathper": 9 },
    //   { "district": "SNCU DH Rajnandgaon", "beds": 30, "admissions": 176, "bedOR": 96, "discharge": 86, "lama": 1, "referper": 10, "deathper": 3 }
    // ]
  }

}