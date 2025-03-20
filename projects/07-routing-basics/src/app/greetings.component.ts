import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-greetings',
  imports: [RouterModule],
  template: `<p>Hello dear learner 👋🏾</p>`,
  standalone: true,
})
export class GreetingsComponent {}
