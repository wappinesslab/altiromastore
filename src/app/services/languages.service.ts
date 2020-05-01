import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Haitian } from './languages/ht';
import { French } from './languages/fr';
import { English } from './languages/en';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
	defaultLanguage: string = 'fr';
	currentLanguage: string;
	availableLanguages: object = {
		ht: 'Kreyòl',
    fr: 'Français',
    en: 'English'
  };
  
  languageStrings: object = {
		ht: Haitian,
    fr: French,
    en: English
	}


  constructor(
    private storage: Storage
  ) {
    this.setCurrentLanguage();
  }

  setCurrentLanguage() {
		this.currentLanguage = this.defaultLanguage;
		this.storage.get('currentLanguage').then(currentLanguage => {
			if (currentLanguage) {
				this.currentLanguage = currentLanguage;
			} else {
				this.currentLanguage = this.defaultLanguage;
			}
		}, error => console.error(error));
  }
  

	get (key: string): string {
		return this.languageStrings[this.currentLanguage][key] || key;
	}

	set (lang: string): void {
		this.currentLanguage = lang;

		this.storage.set('currentLanguage', lang);
	}

}
