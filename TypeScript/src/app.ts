import { BitTetrisMatrix } from "./bit_tetris_matrix";

export class App
{
  public solve(input:string) :string {
    let matrix = new BitTetrisMatrix();
    let bitArray = this.parseInput(input);
    bitArray.forEach((column:number[]) => {
      matrix.addColumn(column);
    });

    matrix.removeFullRows();

    return this.formatResult(matrix);
  }

  private parseInput(input: string) :number[][] {
    return input.split('-').map((element:string) => {
      let hex = parseInt(element, 16);
      return ('0000' + hex.toString(2)).slice(-8).split('').reverse().map((element:string) => {
        return parseInt(element);
      });
    });
  }

  private formatResult(matrix: BitTetrisMatrix) :string {
    return matrix.getData().reduce((current:string, column:number[]) => {
      if (current !== '') {
        current += '-';
      }

      return current + ('00' + parseInt(column.reverse().join(''),2).toString(16)).slice(-2);
    }, '');
  }
}
