import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList :Character[]=[{
    id: uuid(),
    name: 'Trunk',
    power:10
  }]

  @Output()
  onDelete=new EventEmitter<number>();



  onDeleteCharacter(index:number): void{

    this.onDelete.emit(index);

  }

}
function uuid(): string {
  //throw new Error('Function not implemented.');
  return '';
}

