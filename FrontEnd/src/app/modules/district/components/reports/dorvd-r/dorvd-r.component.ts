import { Component } from '@angular/core';
import { ReportsService } from '../../../services/reports/reports.service';
import { MatTableDataSource } from '@angular/material/table';
import { ProfileService } from '../../../services/profile/profile.service';

@Component({
  selector: 'app-dorvd-r',
  templateUrl: './dorvd-r.component.html',
  styleUrls: ['./dorvd-r.component.scss']
})
export class DorvdRComponent {

  data:any;
displayedColumns:string[]=['index','lastyear','thisyear'];
  districtname: any;

  constructor(private reports:ReportsService,private district:ProfileService){

  }
  ngOnInit(){

    this.getdata();
  }

  getdata(){
    this.district.getdistrict(localStorage.getItem('user')).subscribe((result:any)=>{
      this.districtname=result[0].distname;
      this.reports.getdata('dorvd',this.districtname).subscribe((result:any)=>{
        this.data = new MatTableDataSource(result)
      })
    })
  }
}
