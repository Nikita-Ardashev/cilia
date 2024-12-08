import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ITileComponent } from 'src/common/types/global';

export type IAdvantageTileComponent = ITileComponent;

@Component({
	selector: 'app-advantage-tile',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './advantageTile.componetn.html',
	styleUrl: './advantageTile.component.sass',
})
export class AdvantageTileComponent {
	@Input() props?: IAdvantageTileComponent;
}
