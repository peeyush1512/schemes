import { Component } from '@angular/core';
import { MatTableDataSource,MatTable } from '@angular/material/table';


@Component({
  selector: 'app-anc-ela',
  templateUrl: './anc-ela.component.html',
  styleUrls: ['./anc-ela.component.scss']
})
export class ANCELAComponent {

  ancela: any;
  data: any;
  columnsToDisplay = ["value"]

  displayedColumns: string[] = ['percent', 'name'];
  dataSource: any;
  
  constructor(){

  }

  ngOnInit(){

    this.ancela = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]
    this.ancelacall();


  }



  
  ancelacall() {
    this.data = [{ percent: '90', data: [] }, { percent: '89', data: [] }, { percent: '75', data: [] }];


  this.ancela.forEach((element: any) => {

    if (element.value >= 90) {
      this.data[0].data.push(element)
    } else if (element.value <= 89 && element.value >= 75) {
      this.data[1].data.push(element)
    } else if (element.value < 75) {
      this.data[2].data.push(element)
    }
  });

  this.dataSource = new MatTableDataSource(this.data);
}

}
