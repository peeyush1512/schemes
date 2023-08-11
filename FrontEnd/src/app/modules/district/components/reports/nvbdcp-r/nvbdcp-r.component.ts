import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProfileService } from '../../../services/profile/profile.service';
import { ReportsService } from '../../../services/reports/reports.service';

@Component({
  selector: 'app-nvbdcp-r',
  templateUrl: './nvbdcp-r.component.html',
  styleUrls: ['./nvbdcp-r.component.scss']
})
export class NvbdcpRComponent {
  data: any;
  displayedColumns:string[]=['index','district','tabsrdt','irspc','Dcase','mmdpsflc','mms','hs'];
  districtname: any;

  constructor(private reports:ReportsService,private district:ProfileService){

  }
  ngOnInit(){

    this.getdata();
  }

  getdata(){
    this.district.getdistrict(localStorage.getItem('user')).subscribe((result:any)=>{
      this.districtname=result[0].distname;
      this.reports.getdata('nvbdcp',this.districtname).subscribe((result:any)=>{
        this.data = new MatTableDataSource(result)
      })
    })
    
  }
}
