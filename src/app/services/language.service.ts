import { Injectable, signal } from '@angular/core';

export type Lang = 'es' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>('es');

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }
}
