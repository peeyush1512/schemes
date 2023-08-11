import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-anemia-mukt-bharat-amb',
  templateUrl: './anemia-mukt-bharat-amb.component.html',
  styleUrls: ['./anemia-mukt-bharat-amb.component.scss']
})
export class AnemiaMuktBharatAMBComponent {

  data:any;
  displayedColumns: string[] = ["index", 'challenges', 'solutions'];
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();
  }
  calldata(){
    this.apiservice.callapi('amb').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    }) 

  }

}
