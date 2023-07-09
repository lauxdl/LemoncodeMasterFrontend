import { Component } from '@angular/core';
import { ImageEntity } from 'src/app/model/ImageEntity';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  listImages: ImageEntity[] = [];
  constructor(private imageService: ImageService){
    this.imageService.getAll().then(
      listImages => this.listImages = listImages
    );
    console.log(this.listImages);
  }
}
