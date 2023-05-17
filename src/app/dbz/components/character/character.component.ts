import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  @Output()
  onNewCharacter: EventEmitter <Character> =new EventEmitter();

  public character: Character = {
    id: uuid(),
    name: '',
    power: 0
  }

  emitCharacter(){


    console.log(this.character);

    if(this.character.name.length===0) return;

    this.onNewCharacter.emit(this.character);

    this.character={id: uuid(),name:'', power:0};
  }

}
function uuid(): string {
  //throw new Error('Function not implemented.');
  return '';
}

