import { Component, signal } from '@angular/core';
import { CustomProgressBar } from './components/custom-progress-bar/custom-progress-bar';

@Component({
  imports: [CustomProgressBar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  colores = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];

  value = signal(0);
  color = signal('primary');
  striped = signal(false);
  animated = signal(false);
  showLabel = signal(true);
  height = signal(30);

  setValue(e: Event) {
    this.value.set(+(e.target as HTMLInputElement).value);
  }
  setColor(e: Event) {
    this.color.set((e.target as HTMLSelectElement).value);
  }
  setStriped(e: Event) {
    const checked = (e.target as HTMLInputElement).checked;
    this.striped.set(checked);
    if (!checked) this.animated.set(false); // animated solo funciona con striped
  }
  setAnimated(e: Event) {
    this.animated.set((e.target as HTMLInputElement).checked);
  }
  setShowLabel(e: Event) {
    this.showLabel.set((e.target as HTMLInputElement).checked);
  }
  setHeight(e: Event) {
    this.height.set(+(e.target as HTMLInputElement).value);
  }

  reiniciar() {
    this.value.set(0);
    this.color.set('primary');
    this.striped.set(false);
    this.animated.set(false);
    this.showLabel.set(true);
    this.height.set(30);
  }
}