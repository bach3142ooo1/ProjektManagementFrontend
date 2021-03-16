import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
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
  constructor(
    private managementService: ManagementService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadTicket();
  }

  loadTicket() {
    this.managementService
      .getTicket(parseInt(this.activateRoute.snapshot.paramMap.get('id')))
      .subscribe(
        (ticket) => {
          this.ticket = ticket;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  addTaskInit(event) {
    var inputElement = event.target.parentNode.children[1];
    inputElement.style.visibility = 'visible';
  }

  onFocus(event) {
    event.target.value = '';
  }

  onOutFocus(event) {
    event.target.style.visibility = 'hidden';
  }

  onAddTask(ticketId, event) {
    var title = event.target.value;
    this.managementService.addTask(ticketId, title).subscribe(
      (task) => {
        this.ticket.tasks.push(task);
        this.loadTicket();
        event.target.style.visibility = 'hidden';
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSave() {
    var description = document.getElementsByClassName("description")[0] as HTMLInputElement;
    console.log(description.value);
    this.managementService
      .editTicketDescription(this.ticket.ticketId, description.value)
      .subscribe(
        (task) => {
          this.loadTicket();
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
