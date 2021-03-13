import { ITask } from './task';

export interface ITicket{
    ticketId: number;
    title: string;
    description: string;
    tasks: ITask[];
}

export class Ticket implements ITicket {
    ticketId: number;
    title: string;
    description: string;
    tasks: ITask[];
}
