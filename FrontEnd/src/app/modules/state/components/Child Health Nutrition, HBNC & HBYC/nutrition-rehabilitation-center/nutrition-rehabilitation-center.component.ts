import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-nutrition-rehabilitation-center',
  templateUrl: './nutrition-rehabilitation-center.component.html',
  styleUrls: ['./nutrition-rehabilitation-center.component.scss']
})
export class NutritionRehabilitationCenterComponent {


  data:any;
  displayedColumns: string[] = ["index", 'challenges', 'solutions'];
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();
  }
  calldata(){
    this.apiservice.callapi('nrc').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    }) 

  }

}
