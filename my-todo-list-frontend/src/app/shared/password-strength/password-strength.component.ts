import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordStrengthComponent implements OnChanges {
  bar0?: string;
  bar1?: string;
  bar2?: string;
  bar3?: string;

  @Input() public passwordToCheck: any;
  @Output() passwordStrength = new EventEmitter<boolean>();

  private colors = ['darkred', 'orangered', 'orange', 'yellowgreen'];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const password = changes['passwordToCheck'].currentValue;
    this.setBarColors(4, '#DDD');
    if (password) {
      const passwordStrenthValue = this.checkStrength(password);
      const obj = this.getColor(passwordStrenthValue);
      this.setBarColors(obj.index, obj.color);

      this.passwordStrength.emit(passwordStrenthValue == 40);
    }
  }

  checkStrength(p: string): number {
    // 1
    let force = 0;

    // 2
    const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
    const lowerLetters = /[a-z]+/.test(p);
    const upperLetters = /[A-Z]+/.test(p);
    const numbers = /[0-9]+/.test(p);
    const symbols = regex.test(p);

    // 3
    const flags = [lowerLetters, upperLetters, numbers, symbols];

    // 4
    let passedMatches = 0;
    for (const flag of flags) {
      passedMatches += flag === true ? 1 : 0;
    }

    // 5
    force += 2 * p.length + (p.length >= 10 ? 1 : 0);
    force += passedMatches * 10;

    // 6
    force = p.length <= 6 ? Math.min(force, 10) : force;

    // 7
    force = passedMatches === 1 ? Math.min(force, 10) : force;
    force = passedMatches === 2 ? Math.min(force, 20) : force;
    force = passedMatches === 3 ? Math.min(force, 30) : force;
    force = passedMatches === 4 ? Math.min(force, 40) : force;

    return force;
  }

  private getColor(s: number): any {
    let index = 0;
    if (s === 10) {
      index = 0;
    } else if (s === 20) {
      index = 1;
    } else if (s === 30) {
      index = 2;
    } else if (s === 40) {
      index = 3;
    } else {
      index = 4;
    }
    return {
      index: index + 1,
      color: this.colors[index],
    };
  }

  private setBarColors(count: number, col: string) {
    for (let n = 0; n < count; n++) {
      if (n == 0) this.bar0 = col;
      else if (n == 1) this.bar1 = col;
      else if (n == 2) this.bar2 = col;
      else if (n == 3) this.bar3 = col;
      // this['bar' + n] = col;
    }
  }
}
