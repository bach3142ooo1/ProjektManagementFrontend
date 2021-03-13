import { IColumn } from './column';

export interface IBoard {
  id: number;
  name: string;
  columns: IColumn[];
}
