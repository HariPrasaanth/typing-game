import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  enteredText = '';
  sentence = faker.lorem.sentence();
  compare(generatedLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return generatedLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
