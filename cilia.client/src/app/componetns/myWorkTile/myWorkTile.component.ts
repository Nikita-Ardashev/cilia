import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LinkBtnComponent } from '../linkBtn/linkBtn.component';
import { ITileComponent } from 'src/common/types/global';

export interface IMyWorkTileComponent extends ITileComponent {
	link: string;
}

@Component({
	selector: 'app-my-work-tile',
	standalone: true,
	imports: [CommonModule, LinkBtnComponent],
	templateUrl: './myWorkTile.component.html',
	styleUrl: './myWorkTile.component.sass',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesTileComponent {
	@Input() props?: IMyWorkTileComponent;
}
