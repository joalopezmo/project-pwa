import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Digimon } from 'src/app/models/digimon.interface';
import { DigimonService } from 'src/app/services/digimon.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.scss'],
})
export class ComponentListComponent implements OnInit {
  dataSource: Digimon[] = [];
  displayedColumns = ['name', 'img', 'level'];
  filterData = new MatTableDataSource(this.dataSource);
  view: boolean = true;

  // @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('empTbSort') empTbSort = new MatSort();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('empTbSortWithObject') empTbSortWithObject = new MatSort();
  // dataSourceWithObjectColumn: any;

  constructor(private digimonService: DigimonService) {}

  ngOnInit(): void {
    this.digimonService.getAllDigimons().subscribe((data) => {
      this.filterData = new MatTableDataSource(data);
      this.dataSource = data;
    });
  }

  // ngAfterViewInit() {
  //   this.empTbSort.disableClear = true;
  //   this.filterData.sort = this.empTbSort;

  //   // this.empTbSortWithObject.disableClear = true;
  //   // this.dataSourceWithObjectColumn.sort = this.empTbSortWithObject;

  //   this.filterData.paginator = this.paginator;
  // }

  applyFilter(event: Event) {
    const filterValue: string = (event.target as HTMLInputElement).value;
    this.filterData.filter = filterValue.trim().toLowerCase();
  }

  // method to view the list of digimons
  viewList() {
    this.view = true;
  }

  viewCard() {
    this.view = false;
  }
}
