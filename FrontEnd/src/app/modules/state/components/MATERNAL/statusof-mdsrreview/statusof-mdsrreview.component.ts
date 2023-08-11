import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-statusof-mdsrreview',
  templateUrl: './statusof-mdsrreview.component.html',
  styleUrls: ['./statusof-mdsrreview.component.scss']
})
export class StatusofMDSRReviewComponent {



  data: any;

  displayedColumns: string[] = ["index", 'district', 'TotalDeath', 'ReviewCMHO', 'ReviewDM'];

  constructor(private apiservice:ApiService) {

  }

  ngOnInit() {

    this.calldata();


  }




  calldata() {
    
    this.apiservice.callapi('sdmsrr').subscribe((result: any) => {
      this.data = result;      
      this.data = new MatTableDataSource(this.data);
    })
    // this.data = [{ "district": "RAIPUR", "TotalDeath": 9, "ReviewCMHO": 9, "ReviewDM": 0 },
    // { "district": "SURGUJA", "TotalDeath": 5, "ReviewCMHO": 5, "ReviewDM": 5 },
    // { "district": "KORBA", "TotalDeath": 4, "ReviewCMHO": 4, "ReviewDM": 0 },
    // { "district": "JASHPUR", "TotalDeath": 3, "ReviewCMHO": 3, "ReviewDM": 1 },
    // { "district": "DURG", "TotalDeath": 2, "ReviewCMHO": 2, "ReviewDM": 3 },
    // { "district": "KAWARDHA", "TotalDeath": 2, "ReviewCMHO": 2, "ReviewDM": 2 },
    // { "district": "MAHASAMUND", "TotalDeath": 2, "ReviewCMHO": 2, "ReviewDM": 0 },
    // { "district": "RAJNANDGAON", "TotalDeath": 2, "ReviewCMHO": 2, "ReviewDM": 0 },
    // { "district": "DANTEWADA", "TotalDeath": 1, "ReviewCMHO": 1, "ReviewDM": 0 },
    // { "district": "KANKER", "TotalDeath": 1, "ReviewCMHO": 1, "ReviewDM": 0 },
    // { "district": "KONDAGAON", "TotalDeath": 1, "ReviewCMHO": 0, "ReviewDM": 0 },
    // { "district": "SURAJPUR", "TotalDeath": 1, "ReviewCMHO": 1, "ReviewDM": 1 }]
  }
}
