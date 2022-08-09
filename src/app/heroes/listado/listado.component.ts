import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Eyehawk', 'Thannos', 'Gamora','Vision']
  heroesBorrados: string[] = [];

  borrarHeroe() {
    const heroeBorrado = this.heroes.pop();
    if (heroeBorrado != undefined) this.heroesBorrados.push(heroeBorrado);
  }

}
