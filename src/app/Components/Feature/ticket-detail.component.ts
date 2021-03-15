import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITicket } from '../Shared/models/ticket';
import { ManagementService } from './management.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss'],
})
export class TicketDetailComponent implements OnInit {
  ticket: ITicket;
  constructor(private managementService: ManagementService, private activateRoute: ActivatedRoute ) {}

  ngOnInit(): void {
    this.loadTicket();
  }

  loadTicket(){
    this.managementService.getTicket(parseInt(this.activateRoute.snapshot.paramMap.get('id'))).subscribe(ticket => 
      {
        this.ticket = ticket;
      },error => {
        console.log(error);
      });
  }
}
