import { Component } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-blood-collectionin-chhattisgarh-state-lastyear',
  templateUrl: './blood-collectionin-chhattisgarh-state-lastyear.component.html',
  styleUrls: ['./blood-collectionin-chhattisgarh-state-lastyear.component.scss']
})
export class BloodCollectioninChhattisgarhStateLASTYEARComponent {

  data:any;
  displayedColumns: string[] = ["index", 'district', 'target', 'TVCollection', 'TRCollection','GTBCollection','percentage'];
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();
  }

  calldata(){

    this.apiservice.callapi('bccsl').subscribe((result: any) => {
      this.data = result;
      this.data = new MatTableDataSource(this.data);
    })

    // this.data=[
      
    // {"district":"Raipur","target":25443,"TVCollection":27938,"TRCollection":36445,"GTBCollection":64383,"percentage":253},
    // {"district":"Surguja","target": 8947 ,"TVCollection":4800 ,"TRCollection":15487 ,"GTBCollection":20287 ,"percentage":227},
    // {"district":"Bilaspur","target": 20866 ,"TVCollection":11741 ,"TRCollection":14835 ,"GTBCollection":26576 ,"percentage":127},
    // {"district":"Rajnandgaon" ,"target":15375 ,"TVCollection":11038 ,"TRCollection":8440 ,"GTBCollection":19478 ,"percentage":127},
    // {"district":"Dantewada","target": 2640 ,"TVCollection":985 ,"TRCollection":1959 ,"GTBCollection":2944 ,"percentage":112},
    // {"district":"Kanker","target": 7486 ,"TVCollection":2101 ,"TRCollection":6081 ,"GTBCollection":8182 ,"percentage":109},
    // {"district":"Dhamtari","target": 7992 ,"TVCollection":5567 ,"TRCollection":3003 ,"GTBCollection":8570 ,"percentage":107},
    // {"district":"Narayanpur","target": 1402 ,"TVCollection":608 ,"TRCollection":876 ,"GTBCollection":1484 ,"percentage":106},
    // {"district":"Durg","target": 19210 ,"TVCollection":6953 ,"TRCollection":11466 ,"GTBCollection":18419 ,"percentage":96},
    // {"district":"Kondagaon","target": 5203 ,"TVCollection":785 ,"TRCollection":3447 ,"GTBCollection":4233 ,"percentage":81},
    // {"district":"Bastar" ,"target":8913 ,"TVCollection":77 ,"TRCollection":7142 ,"GTBCollection":7219 ,"percentage":81},
    // {"district":"Mahasamund" ,"target":10323 ,"TVCollection":4122 ,"TRCollection":2882 ,"GTBCollection":7004 ,"percentage":68},
    // {"district":"Bijapur" ,"target":2552 ,"TVCollection":184 ,"TRCollection":1518 ,"GTBCollection":1702 ,"percentage":67},
    // ]

  }
}
