import { InjectionToken, Provider } from '@angular/core';

export const TOKEN = new InjectionToken('TOKEN');

export function registerLazyComponent(comp: any): Provider {
  return {
    provide: TOKEN,
    useValue: comp,
  };
}
