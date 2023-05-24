import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'refIdBook'
})
export class RefIdBookPipe implements PipeTransform {

  transform(value:string): string {
    let result:string
    result = "Ref-"+value;
    return result;
  }

}
