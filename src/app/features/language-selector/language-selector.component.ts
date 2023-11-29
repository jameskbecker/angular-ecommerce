import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'feature-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  readonly langs: string[] = ['de', 'en'];

  constructor(private languageService: TranslocoService) {}

  ngOnInit() {}

  get activeLanguage() {
    return this.languageService.getActiveLang();
  }

  switch(language: string) {
    this.languageService.setActiveLang(language);
  }
}
