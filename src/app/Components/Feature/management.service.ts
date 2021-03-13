import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IBoard } from '../Shared/models/board';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITicket, Ticket } from '../Shared/models/ticket';
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

  addTicket(colId: number, title: string, description: string): Observable<ITicket> {
    return this.http
      .post<any>(
        this.baseurl +
          `Ticket/Add/colId=${colId},title=\'${title}\',description=\'${description}\'`,
        undefined
      ).pipe();
  }

  // tslint:disable-next-line: typedef
  editTicket(ticketId: number, title: string): Observable<ITicket> {
    return this.http
      .put<any>(
        this.baseurl + `Ticket/Edit/ticketId=${ticketId},title=\'${title}\'`,
        undefined
      ).pipe();
  }
}
