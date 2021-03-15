import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ManagementService } from './management.service';
import { IBoard } from '../Shared/models/board';
import { IColumn } from '../Shared/models/column';
import { ITicket, Ticket } from '../Shared/models/ticket';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  board: IBoard;
  columns: IColumn[];
  mySubscription: any;

  constructor(private managementService: ManagementService) {}
  ngOnInit(): void {
    this.getBoardById(1);
  }

  getBoardById(id: number): void {
    // tslint:disable-next-line: deprecation
    this.managementService.getBoardbyId(id).subscribe(
      (res) => {
        this.board = res;
        this.columns = res.columns;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onClick(event): any {
    if (event.target.children[2] === undefined) {
      event.target.parentElement.parentElement.children[2].style.visibility =
        'Visible';
    } else {
      event.target.children[2].style.visibility = 'Visible';
    }
  }

  onOut(event): any {
    if (event.target.value === '') {
      event.target.style.visibility = 'Hidden';
    }
  }

  async onEnter(event): Promise<any> {
    // tslint:disable-next-line: radix
    const colId = parseInt(event.target.name);
    const title = event.target.value;
    const description = 'test';
    this.managementService
      .addTicket(colId, title, description)
      // tslint:disable-next-line: deprecation
      .subscribe((response) => {
        this.getBoardById(1);
      });
    event.target.blur();
  }

  // tslint:disable-next-line: typedef
  onClickTitle(event) {
    event.target.removeAttribute('readonly');
  }

  // tslint:disable-next-line: typedef
  onOutTitle(event) {
    event.target.setAttribute('readonly', 'readonly');
  }

  async saveChange(event): Promise<any> {
    // tslint:disable-next-line: radix
    // tslint:disable-next-line: radix
    const id = parseInt(event.target.name);
    const title = event.target.value;
    this.managementService.editTicket(id, title).subscribe((response) => {
      this.getBoardById(1);
    });
  }

  // tslint:disable-next-line: typedef
  async onDelete(event) {
    console.log(event.target);
    // tslint:disable-next-line: radix
    const id = parseInt(event.target.parentElement.parentElement.title);
    await this.managementService.deleteTicket(id).subscribe((response) => {
      this.getBoardById(1);
    });
  }
}
