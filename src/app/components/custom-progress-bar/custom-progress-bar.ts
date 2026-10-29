import { Component, computed, input } from '@angular/core';

@Component({
  
  selector: 'app-custom-progress-bar',
  styleUrl: './custom-progress-bar.css',
  templateUrl: './custom-progress-bar.html',
})
export class CustomProgressBar {
  value = input<number>(0);
  color = input<string>('primary');


  striped = input<boolean>(false);  
  animated = input<boolean>(false);

  showLabel = input<boolean>(true);
  height = input<number>(30);

  percentage = computed(() => Math.min(100, Math.max(0, this.value())));
}
