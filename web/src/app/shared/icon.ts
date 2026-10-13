import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  readonly name = input('arrow-right');
  readonly paths: Record<string, string> = {
    'arrow-right': 'M5 12h14m-6-6 6 6-6 6',
    'arrow-left': 'M19 12H5m6-6-6 6 6 6',
    'arrow-up-right': 'M7 17 17 7M7 7h10v10',
    shield:
      'M12 3 3.5 6.5v5.2c0 4.5 3.3 7.8 8.5 10 5.2-2.2 8.5-5.5 8.5-10V6.5L12 3ZM8.5 12l2.5 2.5 4.5-4.5',
    car: 'M5 9l2-5h10l2 5M3 9h18v9H3V9ZM6 18v3m12-3v3M6 13h2m8 0h2',
    home: 'm3 10 9-7 9 7M5 9v12h14V9M9 21v-8h6v8',
    heart:
      'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z',
    check: 'm5 12 4 4L19 6',
    headphones: 'M3 14v-2a9 9 0 0 1 18 0v2M3 12h4v8H3v-8Zm14 0h4v8h-4v-8Z',
    'life-buoy':
      'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM5.6 5.6l3.6 3.6m5.6 5.6 3.6 3.6m0-12.8-3.6 3.6m-5.6 5.6-3.6 3.6',
    menu: 'M4 6h16M4 12h16M4 18h16',
    x: 'm6 6 12 12M6 18 18 6',
    plus: 'M12 5v14M5 12h14',
    sparkles: 'm12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z',
    clock: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM12 7v5l3 2',
    leaf: 'M20 3c-9-1-16 4-16 10a7 7 0 0 0 7 7c6 0 9-8 9-17ZM4 21 15 10',
  };
}
