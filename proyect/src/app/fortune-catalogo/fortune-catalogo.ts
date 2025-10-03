import { Component} from '@angular/core';

@Component({
  selector: 'app-fortune-catalogo',
  imports: [],
  templateUrl: './fortune-catalogo.html',
  styleUrls: ['./fortune-catalogo.css'] 
})
export class FortuneCatalogo {
  message:string[] = [
    "La fortuna favorece a los audaces.",
    "El cambio que esperas llegará pronto.",
    "Lo que hoy parece pérdida, mañana será fuerza.",
    "No temas al final de un ciclo, porque es el inicio de otro aún más grande.",
    "La sabiduría viene de la experiencia, no del tiempo.",
    "Confía en tu intuición, ella conoce el camino.",
  ];
  actualMessage: string | null = null;

  generateCatalogo(): void{
    const index = Math.floor(Math.random() * this.message.length);
    this.actualMessage = this.message[index];
    console.log("Mensaje generado:", this.actualMessage);

  }

}
