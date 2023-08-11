import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReportsService } from '../../../services/reports/reports.service';
import { ProfileService } from '../../../services/profile/profile.service';

@Component({
  selector: 'app-ficip-r',
  templateUrl: './ficip-r.component.html',
  styleUrls: ['./ficip-r.component.scss']
})
export class FicipRComponent {
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
      this.reports.getdata('fullimmunization',this.districtname).subscribe((result:any)=>{
        this.data = new MatTableDataSource(result)
      })
    })


   
  }
}
