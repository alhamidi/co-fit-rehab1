import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'transformUrl'
})

export class TransformUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { 
    this.sanitizer = sanitizer;
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}