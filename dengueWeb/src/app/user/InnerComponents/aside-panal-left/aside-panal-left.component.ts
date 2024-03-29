import { Component, OnInit } from '@angular/core';
import { FullPanelComponentEnum } from '../../../shared/enums/mainUI.components.enums';
import { MainUIService } from '../../../services/main-ui.service';

@Component({
  selector: 'app-aside-panal-left',
  templateUrl: './aside-panal-left.component.html',
  styleUrls: ['./aside-panal-left.component.css']
})
export class AsidePanalLeftComponent implements OnInit {

  constructor(public mainUIService: MainUIService) { }

  ngOnInit() {
  }

  addPHI(){
    this.mainUIService.fullContainer = FullPanelComponentEnum.MANAGE_PHIS;
  }
}
