import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'CustomNumberDate'
})
export class CustomNumberDatePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): Date {
    return new Date(value);
  }

}
