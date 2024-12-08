import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LinkBtnComponent } from '../linkBtn/linkBtn.component';
import { ITileComponent } from 'src/common/types/global';

export interface IServiceTileComponent extends ITileComponent {
	link: string;
	isReverse: boolean;
}

@Component({
	selector: 'app-service-tile',
	standalone: true,
	imports: [CommonModule, LinkBtnComponent],
	templateUrl: './serviceTile.component.html',
	styleUrl: './serviceTile.component.sass',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceTileComponent {
	@Input() props?: IServiceTileComponent;
}
