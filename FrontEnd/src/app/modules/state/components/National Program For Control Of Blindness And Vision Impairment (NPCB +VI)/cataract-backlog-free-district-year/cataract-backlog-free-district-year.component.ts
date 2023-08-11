import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-cataract-backlog-free-district-year',
  templateUrl: './cataract-backlog-free-district-year.component.html',
  styleUrls: ['./cataract-backlog-free-district-year.component.scss']
})
export class CataractBacklogFreeDistrictYearComponent {

  

  data: any;

  displayedColumns: string[] = ['index','year', 'indicator','target','district','achiev'];

  constructor(private apiservice: ApiService) {

  }

  ngOnInit() {

    this.calldata();


  }




  calldata() {
    this.data = [{ percent: '100', data: [], color: "green" }, { percent: '99', data: [], color: "yellow" }, { percent: '74', data: [], color: "#f5ce93" }, { percent: '49', data: [], color: "red" }];
    this.apiservice.callapi('cbfdy').subscribe((result: any) => {
      this.data = new MatTableDataSource(result);
    });

  }
}
