import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-statusof-blood-storage-unitsin-fruchcs-andchs',
  templateUrl: './statusof-blood-storage-unitsin-fruchcs-andchs.component.html',
  styleUrls: ['./statusof-blood-storage-unitsin-fruchcs-andchs.component.scss']
})
export class StatusofBloodStorageUnitsinFRUCHCsANDCHsComponent {


  data:any;
  displayedColumns: string[] = ["index", 'district', 'facilities', 'tf'];
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();
  }
  calldata(){
    this.apiservice.callapi('sbsufruchcs').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    }) 

  }

}
