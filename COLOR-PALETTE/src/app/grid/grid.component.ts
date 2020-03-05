import { Component, OnInit } from '@angular/core';
import { InitializeTableService } from '../services/initialize-table.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit{

  public columns = ["1","2","3","4","5","6","7","8","9","10"] ;
  public lines = ["1","2","3","4","5","6","7","8","9","10"] ;


  constructor(
    private initializeTable : InitializeTableService
  ) { }

  ngOnInit(): void {
    this.initializeTable.createTable();
  }

}
