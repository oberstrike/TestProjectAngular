import { Country } from './country.model';

describe('Book', () => {
  it('should create an instance', () => {
    const country: Country = {name: 'name'};
    expect(country).toBeTruthy();
  });
});
