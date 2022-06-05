import { Component, OnInit } from '@angular/core';
import { TooltipService } from '../tooltip.service';

@Component({
  selector: 'app-other-view',
  templateUrl: './other-view.component.html',
  styleUrls: ['./other-view.component.css'],
})
export class OtherViewComponent implements OnInit {
  fakeData = [
    { name: 'Title or Name' },
    { name: 'Some Really Really Really Long Name That Will Not Fit'},
    { name: 'Other Name' }
  ];

  constructor(
    public tooltip: TooltipService
  ) {}

  ngOnInit() {}

  onHover(e: any, text: string): void {
    this.tooltip.showTooltip(text, e.clientY, e.clientX);
  }
  onMouseOut(): void {
    this.tooltip.hideTooltip();
  }
}
