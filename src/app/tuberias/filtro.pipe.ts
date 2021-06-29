import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  resultPost=[];
  resultPost2=[];
  transform(arreglo: any, valor: string): any {
    console.log(valor)
    for (let item of arreglo){
      if(item.data.tipo===valor){
        this.resultPost.push(item)
      }

    }

    return this.resultPost;
  }

}
