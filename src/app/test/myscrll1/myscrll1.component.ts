import { Component, OnInit } from '@angular/core';
import { MyScrllService } from '../../my-comp/my-scrll/my-scrll.service';

@Component({
  selector: 'myscrll1',
  templateUrl: './myscrll1.component.html',
  styleUrls: ['./myscrll1.component.scss']
})
export class Myscrll1Component implements OnInit {

  constructor(private myscrllService: MyScrllService) { }

  ngOnInit() {
    // this.myscrllService.emitEl.subscribe(el => console.log(el));
    
  }

}
