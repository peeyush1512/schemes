import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReportsService } from '../../../services/reports/reports.service';
import { ProfileService } from '../../../services/profile/profile.service';

@Component({
  selector: 'app-atovp-r',
  templateUrl: './atovp-r.component.html',
  styleUrls: ['./atovp-r.component.scss']
})
export class AtovpRComponent {
  data: any;
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
      this.reports.getdata('atovp',this.districtname).subscribe((result:any)=>{
        this.data = new MatTableDataSource(result)
      })
    })
    
  }
}
