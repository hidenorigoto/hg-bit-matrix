import {App} from './app';
import {expect} from 'chai';

describe('Bit Tetrisアプリのテスト', () => {
  interface TestData {
    index:number,
    input:string,
    expected:string
  }
  const data: Array<TestData> = [
    {index: 0 , input: "ff-2f-23-f3-77-7f-3b", expected: "1f-03-00-1c-0d-0f-06" },
    {index: 1 , input: "01", expected: "00" },
    {index: 2 , input: "00", expected: "00" },
    {index: 3 , input: "7a-4e", expected: "0c-02" },
    {index: 4 , input: "56-b6", expected: "08-14" },
    {index: 5 , input: "12-12-12", expected: "00-00-00" },
    {index: 6 , input: "de-ff-7b", expected: "0a-0f-05" },
    {index: 7 , input: "95-be-d0", expected: "05-1e-20" },
    {index: 8 , input: "7c-b0-bb", expected: "1c-20-2b" },
    {index: 9 , input: "7a-b6-31-6a", expected: "3a-56-11-2a" },
    {index:10 , input: "32-0e-23-82", expected: "18-06-11-40" },
    {index:11 , input: "ff-7f-bf-df-ef", expected: "0f-07-0b-0d-0e" },
    {index:12 , input: "75-df-dc-6e-42", expected: "35-5f-5c-2e-02" },
    {index:13 , input: "62-51-ef-c7-f8", expected: "22-11-6f-47-78" },
    {index:14 , input: "0c-47-8e-dd-5d-17", expected: "04-23-46-6d-2d-0b" },
    {index:15 , input: "aa-58-5b-6d-9f-1f", expected: "52-28-2b-35-4f-0f" },
    {index:16 , input: "ff-55-d5-75-5d-57", expected: "0f-00-08-04-02-01" },
    {index:17 , input: "fe-fd-fb-f7-ef-df-bf", expected: "7e-7d-7b-77-6f-5f-3f" },
    {index:18 , input: "fd-fb-f7-ef-df-bf-7f", expected: "7e-7d-7b-77-6f-5f-3f" },
    {index:19 , input: "d9-15-b5-d7-1b-9f-de", expected: "69-05-55-67-0b-4f-6e" },
    {index:20 , input: "38-15-fd-50-10-96-ba", expected: "18-05-7d-20-00-46-5a" },
    {index:21 , input: "fe-fd-fb-f7-ef-df-bf-7f", expected: "fe-fd-fb-f7-ef-df-bf-7f" }
  ];

  data.forEach( (datum:TestData) => {
    it('テスト' + datum.index, () => {
      let app = new App();
      let result = app.solve(datum.input);
      expect(result).to.equal(datum.expected);
    });
  });
});
