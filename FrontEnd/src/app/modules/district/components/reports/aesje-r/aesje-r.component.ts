import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProfileService } from '../../../services/profile/profile.service';
import { ReportsService } from '../../../services/reports/reports.service';

@Component({
  selector: 'app-aesje-r',
  templateUrl: './aesje-r.component.html',
  styleUrls: ['./aesje-r.component.scss']
})
export class AesjeRComponent {
  data: any;
  displayedColumns: string[] = ['index','district','laescase','ljecase','ldeath','taescase','tjecase','tdeath'];
  districtname: any;

  constructor(private reports:ReportsService,private district:ProfileService){

  }
  ngOnInit(){

    this.getdata();
  }

  getdata(){
    this.district.getdistrict(localStorage.getItem('user')).subscribe((result:any)=>{
      this.districtname=result[0].distname;
      this.reports.getdata('aesje',this.districtname).subscribe((result:any)=>{
        this.data = new MatTableDataSource(result)
      })
    })
    
  }
}
