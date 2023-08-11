import { Component } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-govt-blood-center-camp-collection-lastyear',
  templateUrl: './govt-blood-center-camp-collection-lastyear.component.html',
  styleUrls: ['./govt-blood-center-camp-collection-lastyear.component.scss']
})
export class GovtBloodCenterCampCollectionLASTYEARComponent {


  data:any;
  displayedColumns: string[] = ["index", 'district', 'tcapm', 'capmcollection', 'avgper'];
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();
  }
  calldata(){
    this.apiservice.callapi('cbccc').subscribe((result:any)=>{
      this.data=new MatTableDataSource(result);
    }) 
//     this.data=[
// {"district":"Raipur","tcapm": 140,"capmcollection": 7977 ,"avgper":57},
// {"district":"Korba","tcapm": 33,"capmcollection": 1884 ,"avgper":57},
// {"district":"Mahasamund ","tcapm":42,"capmcollection": 1858 ,"avgper":44},
// {"district":"Durg ","tcapm":52 ,"capmcollection":2220 ,"avgper":43},
// {"district":"Rajnandgaon","tcapm": 55 ,"capmcollection":2299 ,"avgper":42},
// {"district":"Bilaspur ","tcapm":45 ,"capmcollection":1843 ,"avgper":41},
// {"district":"Jagdalpur","tcapm": 25 ,"capmcollection":919 ,"avgper":36},
// {"district":"Dantewara","tcapm": 12 ,"capmcollection":413 ,"avgper":34},
// {"district":"Dhamtari ","tcapm":14 ,"capmcollection":473 ,"avgper":33},
// {"district":" Kanker","tcapm": 24 ,"capmcollection":752 ,"avgper":31},
// {"district":" Surguja","tcapm": 45 ,"capmcollection":1302 ,"avgper":29},
// {"district":" Mungeli ","tcapm":12 ,"capmcollection":320 ,"avgper":26},
// {"district":" Janjgir ","tcapm":32 ,"capmcollection":811 ,"avgper":25},
// {"district":" Balrampur","tcapm": 4 ,"capmcollection":98 ,"avgper":22},
//   ]
  }
}
