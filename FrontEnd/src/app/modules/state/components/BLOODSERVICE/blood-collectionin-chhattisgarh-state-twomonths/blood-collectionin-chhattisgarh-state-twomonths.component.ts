import { Component } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-blood-collectionin-chhattisgarh-state-twomonths',
  templateUrl: './blood-collectionin-chhattisgarh-state-twomonths.component.html',
  styleUrls: ['./blood-collectionin-chhattisgarh-state-twomonths.component.scss']
})
export class BloodCollectioninChhattisgarhStateTWOMONTHSComponent {


  
  data:any;
  displayedColumns: string[] = ["index", 'district', 'pp', 'tbcpprb', 'targettwo','tcgovt','tcprivate','GTBCollection','percentage'];
  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.calldata();
  }

  calldata(){

    this.apiservice.callapi('bccst').subscribe((result: any) => {
      this.data = result;
      this.data = new MatTableDataSource(this.data);
    })

//   this.data=[
// {"district": "Raipur","pp": 2617678,"tbcpprb" :26177,"targettwo": 2181,"tcgovt": 2758 ,"tcprivate":6020 ,"GTcollection":8778 ,"percentage":402},
// {"district": "Surguja","pp": 943322 ,"tbcpprb" :9433 ,"targettwo":786,"tcgovt": 1848,"tcprivate": 1282 ,"GTcollection":3130 ,"percentage":398},
// {"district": "Narayanpur","pp": 156374,"tbcpprb" : 1564,"targettwo": 130,"tcgovt": 299,"tcprivate": 0,"GTcollection": 299 ,"percentage":229},
// {"district": "Bilaspur","pp": 2371523.1,"tbcpprb" : 23715 ,"targettwo":1976,"tcgovt": 1313,"tcprivate": 3039 ,"GTcollection":4352 ,"percentage":220},
// {"district": "Rajnandgaon","pp": 1745841 ,"tbcpprb" :17458 ,"targettwo":1455,"tcgovt": 1070 ,"tcprivate":1813 ,"GTcollection":2883 ,"percentage":198},
// {"district": "Dantewada","pp": 315827.03,"tbcpprb" : 3158 ,"targettwo":263,"tcgovt": 490,"tcprivate": 0,"GTcollection": 490 ,"percentage":186},
// {"district": "Kanker","pp": 1033736,"tbcpprb" : 10337,"targettwo": 861 ,"tcgovt":960 ,"tcprivate":536 ,"GTcollection":1496 ,"percentage":174},
// {"district": "Sukma","pp": 262243 ,"tbcpprb" :2622,"targettwo": 219,"tcgovt": 327 ,"tcprivate":0,"GTcollection": 327 ,"percentage":150},
// {"district": "Durg","pp": 1891770.8 ,"tbcpprb" :18918,"targettwo": 1576 ,"tcgovt":1322,"tcprivate": 934 ,"GTcollection":2256 ,"percentage":143},
//   ]
 }
}
