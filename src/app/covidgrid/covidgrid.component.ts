import { CovidService } from './../covid.service';
import { Covid } from './../covid';
import { Component, ViewChild, OnInit } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-covidgrid',
  templateUrl: './covidgrid.component.html',
  styleUrls: ['./covidgrid.component.scss']
})
export class CovidgridComponent implements OnInit {

  ELEMENT_DATA: Covid[];
  displayedColumns: string[] = ['country', 'cases', 'todayCases', 'deaths', 'todayDeaths', 'recovered', 'active', 'critical'];
  dataSource = new MatTableDataSource<Covid>(this.ELEMENT_DATA);


  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;


  constructor(private service: CovidService) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllReports();
  }

  public getAllReports() {
    const resp = this.service.getCovidData();
    resp.subscribe(report => this.dataSource.data = report as Covid[]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
