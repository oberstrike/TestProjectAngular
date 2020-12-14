import { Question } from './question.model';

describe('Question', () => {
  it('should create an instance', () => {
    const question: Question = {id : 1, subject : 2, content : new Int32Array()};
    expect(question).toBeTruthy();
  });
});
