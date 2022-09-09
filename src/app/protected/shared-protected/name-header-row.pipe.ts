import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';

@Pipe({
  name: 'nameHeaderRow'
})
export class NameHeaderRowPipe implements PipeTransform {

  transform(key: string): string {
    switch(key){
      case "id": return "N°";
        break;
      case "name": return "Nom";
        break;
      case "type": return "Catégorie";
        break;
      case "expiredAt": return "Date d'expiration";
        break;
      case "quantity": return "Quantité";
        break;
      case "price": return "Prix";
        break;
      default: return "";
    }
  }

}
