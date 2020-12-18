import { CustomNumberDatePipe } from './custom.number.pipe';

describe('DatePipePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomNumberDatePipe();
    expect(pipe).toBeTruthy();
  });
});
