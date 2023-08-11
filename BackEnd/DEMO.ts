

    this.apiservice.callapi('sssd').subscribe((result: any) => {
      
      this.data = new MatTableDataSource(result);
    })



    constructor(private apiservice: ApiService) {

    }

    this.apiservice.callapi('anc').subscribe((result:any)=>{
      result.forEach((element:any) => {
        if (element.value > 90) {
          this.data[0].data.push(element)
        } else if (element.value <= 89 && element.value >= 75) {
          this.data[1].data.push(element)
        } else if (element.value < 75) {
          this.data[2].data.push(element)
        }
      });
      this.data=new MatTableDataSource(this.data);
    });


    <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef> Name of district </th>
    <td mat-cell *matCellDef="let element"style="background-color: {{element.color}};">
      <span *ngIf="element.percent == '90'">
         <ng-container *ngFor="let d of element.data">
          {{d.dist}} {{d.value}}%
         </ng-container>
      </span> 
      <span *ngIf="element.percent == '89'">
          <ng-container *ngFor="let d of element.data">
            {{d.dist}} {{d.value}}%
             </ng-container>
      </span> 
      <span *ngIf="element.percent == '75'">
          <ng-container *ngFor="let d of element.data">
              {{d.dist}} {{d.value}}%
             </ng-container>
      </span> 
  </td>
  </ng-container>