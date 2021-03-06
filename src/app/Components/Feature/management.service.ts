import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IBoard } from '../Shared/models/board';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITicket, Ticket } from '../Shared/models/ticket';
import { ITask } from '../Shared/models/task';
@Injectable({
  providedIn: 'root',
})
export class ManagementService {
  [x: string]: any;
  baseurl = 'https://localhost:44305/api/';

  constructor(private http: HttpClient) {}

  getBoardbyId(id: number): Observable<IBoard> {
    return this.http.get<IBoard>(this.baseurl + 'board/' + id).pipe();
  }

  getTicket(ticketId: number): Observable<ITicket> {
    return this.http.get<ITicket>(this.baseurl + 'Ticket/' + ticketId).pipe();
  }

  addTicket(
    colId: number,
    title: string,
    description: string
  ): Observable<ITicket> {
    return this.http
      .post<any>(
        this.baseurl +
          `Ticket/Add/colId=${colId},title=\'${title}\',description=\'${description}\'`,
        undefined
      )
      .pipe();
  }

  // tslint:disable-next-line: typedef
  editTicket(ticketId: number, title: string): Observable<ITicket> {
    return this.http
      .put<any>(
        this.baseurl + `Ticket/Edit/ticketId=${ticketId},title=\'${title}\'`,
        undefined
      )
      .pipe();
  }

  editTicketDescription(
    ticketId: number,
    description: string
  ): Observable<ITicket> {
    return this.http
      .put<any>(
        this.baseurl +
          `Ticket/Edit/ticketId=${ticketId},description=\'${description}\'`,
        undefined
      )
      .pipe();
  }

  deleteTicket(ticketId: number): any {
    return this.http
      .delete<any>(
        this.baseurl + `Ticket/Delete/ticketId=${ticketId}`,
        undefined
      )
      .pipe();
  }

  addTask(ticketId: number, title: string): Observable<ITask> {
    return this.http
      .post<ITask>(
        this.baseurl + `Task/Add/ticketId=${ticketId},title=\'${title}\'`,
        undefined
      )
      .pipe();
  }

  EditTaskTitle(taskId: number, title: string): any {
    return this.http
      .put<any>(
        this.baseurl + `Task/Edit/taskId=${taskId},title=\'${title}\'`,
        undefined
      )
      .pipe();
  }

  EditTaskStatus(taskId: number, status: boolean): any {
    return this.http
      .post<any>(
        this.baseurl + `Task/Add/taskId=${taskId},status='${status}\'`,
        undefined
      )
      .pipe();
  }

  DeleteTask(taskId: number): any {
    return this.http
      .post<any>(this.baseurl + `Task/Add/taskId=${taskId}`, undefined)
      .pipe();
  }
}
