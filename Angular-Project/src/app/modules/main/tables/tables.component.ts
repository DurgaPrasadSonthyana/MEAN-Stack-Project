import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  employeeList: any = [

    { id: 1, name: 'Chicken Biryani', cost: 200, available: 'yes', hotel: 'Blue Fox', mobile: '9876543215', pin: '101' },
    { id: 2, name: 'Mutton Biryani', cost: 300, available: 'yes', hotel: 'Blue Fox', mobile: '9876543215', pin: '102' },
    { id: 3, name: 'Roti', cost: 100, available: 'yes', hotel: 'Blue Fox', mobile: '9876543215', pin: '103' },
    { id: 4, name: 'veg Biryani', cost: 256, available: 'yes', hotel: 'Blue Fox', mobile: '9876543215', pin: '104' },
    { id: 5, name: 'Egg Biryani', cost: 390, available: 'No', hotel: 'Blue Fox', mobile: '9876543215', pin: '105' },
    { id: 6, name: 'Fish Biryani', cost: 450, available: 'yes', hotel: 'Blue Fox', mobile: '9876543215', pin: '106' },
    { id: 7, name: 'Prawns Biryani', cost: 600, available: 'No', hotel: 'Blue Fox', mobile: '9876543215', pin: '107' },
    { id: 8, name: 'Prawns Biryani', cost: 600, available: 'No', hotel: 'Blue Fox', mobile: '9876543215', pin: '108' },
    { id: 9, name: 'Prawns Biryani', cost: 600, available: 'No', hotel: 'Blue Fox', mobile: '9876543215', pin: '109' },
    { id: 10, name: 'Prawns Biryani', cost: 600, available: 'No', hotel: 'Blue Fox', mobile: '9876543215', pin: '110' },
    { id: 11, name: 'Prawns Biryani', cost: 600, available: 'No', hotel: 'Blue Fox', mobile: '9876543215', pin: '111' },
    { id: 12, name: 'Cooldrinks', cost: 600, available: 'No', hotel: 'Blue Fox', mobile: '9876543215', pin: '112' },

  ];
  constructor(private router: Router) {

  }

  list: any = [];

  displayedColumns: string[] = ['id', 'name', 'cost', 'available', 'hotel', 'mobile', 'pin', 'edit'];

  dataSource = new MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  val:any = 10;
  iv:string = '10'
  ngOnInit() {

    if(this.iv === this.val){
console.log("same")
    }

    this.dataSource = new MatTableDataSource(this.employeeList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  edit(element: any) {
    this.router.navigate(['/user/registration'], { state: { inputData: element } }
    )
  }
  onChange(){
    let id = 10
   //  this.router.navigate([''])
     this.router.navigate( ['main/dashboard', id]).then( (e) => {
       if (e) {
         console.log("Navigation is successful!");
       } else {
         console.log("Navigation has failed!");
       }
   })
 }
}
