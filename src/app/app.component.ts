import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length: number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  password: string = '';

  onChangeLength(event: any) {
    const parsedValue = parseInt(event.target.value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    const letters: string = 'abcdefghijklmnopqrstuwvyz';
    const numbers: string = '0123456789';
    const symbols: string = '!@#$%^&*()_+';

    let validChars: string = '';

    if (this.includeLetters) {
      validChars += letters;
    }

    if (this.includeNumbers) {
      validChars += numbers;
    }

    if( this.includeSymbols) {
      validChars += symbols;
    }

    let genPasswd: string = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      genPasswd += validChars[index];
    }

    this.password = genPasswd;
  }
}
