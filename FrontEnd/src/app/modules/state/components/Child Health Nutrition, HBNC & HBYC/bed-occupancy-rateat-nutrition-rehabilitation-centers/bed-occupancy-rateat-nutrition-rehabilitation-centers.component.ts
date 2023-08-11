import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-bed-occupancy-rateat-nutrition-rehabilitation-centers',
  templateUrl: './bed-occupancy-rateat-nutrition-rehabilitation-centers.component.html',
  styleUrls: ['./bed-occupancy-rateat-nutrition-rehabilitation-centers.component.scss']
})
export class BedOccupancyRateatNutritionRehabilitationCentersComponent {


  data: any;


  displayedColumns: string[] = ['percent', 'name'];

  constructor(private apiservice: ApiService) {

  }

  ngOnInit() {
    this.calldata();


  }


  calldata() {
    this.data = [{ percent: '76', data: [], color: "green" }, { percent: '50', data: [], color: "yellow" }, { percent: '49', data: [], color: "red" }];

    this.apiservice.callapi('bornrc').subscribe((result: any) => {
      result.forEach((element: any) => {
        if (element.bornrc > 75) {
          this.data[0].data.push(element)
        } else if (element.bornrc <= 75 && element.bornrc >= 50) {
          this.data[1].data.push(element)
        } else if (element.bornrc < 50) {
          this.data[2].data.push(element)
        }
      });
      this.data = new MatTableDataSource(this.data);
    })
  }


}
