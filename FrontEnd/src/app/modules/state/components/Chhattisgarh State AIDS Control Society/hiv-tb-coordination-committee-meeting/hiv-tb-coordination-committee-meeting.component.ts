import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-hiv-tb-coordination-committee-meeting',
  templateUrl: './hiv-tb-coordination-committee-meeting.component.html',
  styleUrls: ['./hiv-tb-coordination-committee-meeting.component.scss']
})
export class HIVTBCoordinationCommitteeMeetingComponent {


 
  data: any;

  displayedColumns: string[] = ['index', 'regular','aftertt','afteret'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();


  }

  
  calldata() {

    this.apiservice.callapi('hivtbccm').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    })

}


}
