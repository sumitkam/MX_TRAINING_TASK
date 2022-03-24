import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameTitle'
})
export class NameTitlePipe implements PipeTransform {

  // transform(gender:any): unknown {
  //   if(gender == 'Male'){
  //     return 'Mr.';
  //   }else {
  //     return 'Mis.';
  //   }
  // }

  transform(type:number): unknown {
    if(type == 1){
        return '(local customer)';
    }
    else if(type == 2){
      return '(gold customer)';
    }else{
      return '(primium customer)';
    }
  }

}
