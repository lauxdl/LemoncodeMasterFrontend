import { Injectable } from '@angular/core';
import { ImageEntity } from '../model/ImageEntity';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiUrl = '../assets/data/photos.json';

  constructor() {}

  getAll(): Promise<ImageEntity[]> {
    return fetch(this.apiUrl)
    .then((response) => response.json())
  }

}
