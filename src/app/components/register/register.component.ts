import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  icone: string[] = ["cadeado-fechado.svg", "cadeado-fechado.svg"]
  visible: boolean[] = [false, false]

  mudarType(numero: number): void {
    this.visible[numero - 1] = !this.visible[numero - 1];
    this.icone[numero - 1] = this.visible[numero - 1] ? "cadeado-aberto.svg":"cadeado-fechado.svg"
    return;
  }
}
