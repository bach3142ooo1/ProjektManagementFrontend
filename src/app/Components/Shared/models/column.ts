import { ITicket } from './ticket';

export interface IColumn {
  id: number;
  boardId: number;
  name: string;
  tickets: ITicket[];
}
