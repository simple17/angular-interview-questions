import { Component, Input, HostBinding } from '@angular/core';
import { Teaser } from '../../../interfaces/Teaser';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss'],
})
export class TeaserComponent {
  @Input() teaser: Teaser | null = null;
  @HostBinding('style.backgroundImage')
  backgroundImage: SafeStyle;

  constructor(private sanitizer: DomSanitizer) {
    this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(
      `url(${this.teaser?.backgroundImage ?? ''})`
    );
  }

  ngOnInit() {
    this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(
      `url(${this.teaser?.backgroundImage ?? ''})`
    );
  }
}
