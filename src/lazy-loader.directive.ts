import {
  Directive,
  inject,
  Injector,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { TOKEN } from './register-lazy-component';

@Directive({
  selector: '[appLazyLoader]',
  standalone: true,
})
export class LazyLoaderDirective {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {
    const comp = inject(TOKEN);

    console.log('asd', comp);

    if (comp) {
      setTimeout(() => {
        console.log(comp);
        (comp as Promise<any>).then((c) => {
          this.viewContainerRef.createComponent(c);
        });
      }, 5000);
    }
  }
}
