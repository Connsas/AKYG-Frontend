import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: string[], filterText: string): string[] {
    filterText = filterText?filterText.toLocaleLowerCase():"";
    return filterText?value.filter((p:string) => p.toLocaleLowerCase().indexOf(filterText)!== -1):value;
  }

}
