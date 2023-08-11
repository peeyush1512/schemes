import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-statusof-jsskdietagainst-rop-p.ela',
  templateUrl: './statusof-jsskdietagainst-rop-p.ela.component.html',
  styleUrls: ['./statusof-jsskdietagainst-rop-p.ela.component.scss']
})
export class StatusofJSSKdietagainstROPPELAComponent {

  // ancela: any;
  data: any;

  displayedColumns: string[] = ['percent', 'name'];
  
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){

    // this.ancela = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]
    this.calldata();


  }



  
  calldata() {
    this.data = [{ percent: '90', data: [],color:"green" }, { percent: '89', data: [],color:"yellow" }, { percent: '75', data: [],color:"red" }];

   
    this.apiservice.callapi('sjsskdaroppela').subscribe((result:any)=>{
      result.forEach((element:any) => {
        if (element.sjsskdaroppela > 90) {
          this.data[0].data.push(element)
        } else if (element.sjsskdaroppela <= 89 && element.sjsskdaroppela >= 75) {
          this.data[1].data.push(element)
        } else if (element.sjsskdaroppela < 75) {
          this.data[2].data.push(element)
        }
      });
      this.data=new MatTableDataSource(this.data);
    })


  // this.ancela.forEach((element: any) => {

  //   if (element.value >= 90) {
  //     this.data[0].data.push(element)
  //   } else if (element.value <= 89 && element.value >= 75) {
  //     this.data[1].data.push(element)
  //   } else if (element.value < 75) {
  //     this.data[2].data.push(element)
  //   }
  // });

  // this.data = new MatTableDataSource(this.data);
 
}

}
