import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private data: {} = {};

  saveJSON(key: string, value: any[]) {
    this.data[key] = value;
    localStorage.setItem(key, JSON.stringify(value));
  }

  getJSON(key) {
    if (this.data[key]) {
      return this.data[key];
    }
    return JSON.parse(localStorage.getItem(key));
  }
}
