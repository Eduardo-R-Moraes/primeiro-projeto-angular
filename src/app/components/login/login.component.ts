import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  icone: string = "cadeado-fechado.svg"
  visible: boolean = false;

  mudarType(): void {
    this.visible = !this.visible;
    this.icone = this.visible ? "cadeado-aberto.svg":"cadeado-fechado.svg"
  }
}