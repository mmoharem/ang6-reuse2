import { Directive, Input, ElementRef } from '@angular/core';
import { AnimationPlayer, AnimationBuilder, AnimationMetadata, style, animate } from '@angular/animations';

@Directive({
  selector: '[appAnim1]'
})
export class Anim1Directive {

  player: AnimationPlayer;

  @Input()
  set show(show: boolean) {
    if (this.player) {
      this.player.destroy();
    }

    const metadata = show ? this.fadeIn() : this.fadeOut();

    const factory = this.builder.build(metadata);
    const player = factory.create(this.el.nativeElement);

    player.play();
  }

  constructor(private builder: AnimationBuilder, private el: ElementRef) {}

  private fadeIn(): AnimationMetadata[] {
    return [
      style({ opacity: 0 }),
      animate('400ms ease-in', style({ opacity: 1 })),
    ];
  }

  private fadeOut(): AnimationMetadata[] {
    return [
      style({ opacity: '*' }),
      animate('400ms ease-in', style({ opacity: 0 })),
    ];
  }
}
