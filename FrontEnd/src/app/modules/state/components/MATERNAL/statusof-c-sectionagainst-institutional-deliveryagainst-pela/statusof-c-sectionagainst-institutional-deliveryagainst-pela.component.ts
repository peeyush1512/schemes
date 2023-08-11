import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-statusof-c-sectionagainst-institutional-deliveryagainst-pela',
  templateUrl: './statusof-c-sectionagainst-institutional-deliveryagainst-pela.component.html',
  styleUrls: ['./statusof-c-sectionagainst-institutional-deliveryagainst-pela.component.scss']
})
export class StatusofCSectionagainstInstitutionalDeliveryagainstPELAComponent {

  
  ancela: any;
  data: any;
  displayedColumns: string[] = ['percent', 'name'];
  dataSource: any;
  
  constructor(  private apiservice:ApiService){

  }

  ngOnInit(){

    // this.ancela = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]
    this.calldata();


  }



  
  calldata() {
    this.data = [{ percent: '15', data: [],color:"green" }, { percent: '14', data: [],color:"yellow" }, { percent: '10', data: [],color:"red" }];


    
    this.apiservice.callapi('socsaid').subscribe((result:any)=>{     
      result.forEach((element:any) => {     
        if (element.socsaid > 15) {
          this.data[0].data.push(element)
          
        } else if (element.socsaid <= 15 && element.socsaid >= 10) {
          this.data[1].data.push(element)
          
        } else if (element.socsaid < 10) {
          this.data[2].data.push(element)
        }
      });
      this.data = new MatTableDataSource(this.data);
    })
  // this.ancela.forEach((element: any) => {

  //   if (element.value >= 15) {
  //     this.data[0].data.push(element)
  //   } else if (element.value <= 14 && element.value >= 10) {
  //     this.data[1].data.push(element)
  //   } else if (element.value < 10) {
  //     this.data[2].data.push(element)
  //   }
  // });

  // this.data = new MatTableDataSource(this.data);
}


}
