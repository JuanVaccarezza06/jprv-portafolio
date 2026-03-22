import { Injectable, signal } from '@angular/core';

export type Lang = 'es' | 'en';

const STORAGE_KEY = 'portfolio-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>((localStorage.getItem(STORAGE_KEY) as Lang) ?? 'es');

  setLang(lang: Lang): void {
    this.lang.set(lang);
    localStorage.setItem(STORAGE_KEY, lang); 
  }
}
