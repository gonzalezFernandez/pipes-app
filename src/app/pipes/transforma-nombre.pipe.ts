import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformaNombre'
})
export class TransformaNombrePipe implements PipeTransform {

  //devuelve Mr. + Nombre si hombre, Miss + nombre si mujer
  transform(name: string, gender: string): string {
    if (gender.toLowerCase() == "male")
        return "Mr. " + name;
    else
        return "Miss. " + name;
  }

}
