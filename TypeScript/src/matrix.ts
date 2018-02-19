export class Matrix<T>
{
  protected data:T[][];

  public constructor() {
    this.data = [];
  };

  public getData(): T[][] {
    return this.data;
  }

  public addColumn(col:T[])
  {
    this.data.push(col);
  }

  public removeRowByIndex(index:number) {
    this.data = this.data.map((column:T[]) => {
      column.splice(index, 1);
      return column;
    });
  }

  public addRow(value:T) {
    this.data = this.data.map((column:T[]) => {
      column.push(value);
      return column;
    });
  }
}
