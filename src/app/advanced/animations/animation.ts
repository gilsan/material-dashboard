import { animation, style, animate, trigger, transition, useAnimation } from '@angular/animations';

export const fadeIn = animation([
  style({opacity: 0}),
  animate('500ms', style({opacity: 1}))
]);

export const fadeOut = animation(
  animate('500ms', style({opacity: 0}))
);

export const fadeInOut = trigger('fadeInOut', [
  transition('voide => *', useAnimation(fadeIn)),
  transition('* => void', useAnimation(fadeOut))
]);
