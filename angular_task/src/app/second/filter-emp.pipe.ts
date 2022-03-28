import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEmp'
})
export class FilterEmpPipe implements PipeTransform {

  transform(value: any, salary: any[]): any {
    return value.filterEmp(function(search:any){
      return search.salary.indexOf(salary) > -1
    })
  }

}
