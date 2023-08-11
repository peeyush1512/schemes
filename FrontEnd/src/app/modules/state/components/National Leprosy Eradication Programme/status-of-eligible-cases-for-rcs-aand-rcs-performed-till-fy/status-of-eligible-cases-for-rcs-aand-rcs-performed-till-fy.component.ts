import { Component } from '@angular/core';
import { MatNoDataRow, MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-status-of-eligible-cases-for-rcs-aand-rcs-performed-till-fy',
  templateUrl: './status-of-eligible-cases-for-rcs-aand-rcs-performed-till-fy.component.html',
  styleUrls: ['./status-of-eligible-cases-for-rcs-aand-rcs-performed-till-fy.component.scss']
})
export class StatusOfEligibleCasesForRCSAandRCSPerformedTillFYComponent {

  data:any;
  displayedColumns: string[] = ['index', 'district','ERCS','RCSdone','pending'];
  constructor(private apiservice:ApiService) {

  }
  ngOnInit(){
    this.calldata();
  }




  calldata(){
    

    this.apiservice.callapi('secafrcsarcsp').subscribe((result: any) => {
      
      this.data = new MatTableDataSource(result);
    })
//     this.data=[
// {"district":"Raipur ","ERCS":9 ,"RCSdone":3 ,"pending":6},
// {"district":"Bastar ","ERCS":4 ,"RCSdone":0 ,"pending":4},
// {"district":"Sarangarh ","ERCS":2 ,"RCSdone":0 ,"pending":2},
// {"district":"Janjgir ","ERCS":2 ,"RCSdone":0 ,"pending":2},
// {"district":"Khairagarh-Chhuikhadan ","ERCS":2 ,"RCSdone":2 ,"pending":0},
// {"district":"Balodabazar ","ERCS":2 ,"RCSdone":2 ,"pending":0},
// {"district":"Raigarh ","ERCS":1 ,"RCSdone":1 ,"pending":0},
// {"district":"Sakti ","ERCS":1 ,"RCSdone":0 ,"pending":1},
// {"district":"Durg ","ERCS":1 ,"RCSdone":0 ,"pending":1},
//     ]
//     this.data=new MatTableDataSource(this.data);
  }
}
