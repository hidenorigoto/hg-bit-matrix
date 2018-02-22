import { Matrix } from "./matrix";

export class BitTetrisMatrix extends Matrix<number>
{
  public removeFullRows()
  {
    for (let i:number = 0, max:number = this.data[0].length; i < max; i++) {
      if (this.isFullRow(i)) {
        this.removeRowByIndex(i);
        this.addRow(0);
        i--; // 再度同じインデックスを調査するため
      }
    }
  }

  private isFullRow(i: number) :boolean {
    return this.getRow(i).reduce((current:boolean, value:number) => {
      return current && value;
    }, true);
  }
}
