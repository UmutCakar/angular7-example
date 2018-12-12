import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../post';

@Pipe({
  name: 'postFilter'
})
export class PostFilterPipe implements PipeTransform {

  transform(value: Post[], filterText: string): Post[] {
    if(!filterText){
      return value;
    } else {
      return value.filter(p => p.title
        .toLocaleLowerCase()
        .indexOf(filterText.toLocaleLowerCase()) !== -1);
    }
  }

}
