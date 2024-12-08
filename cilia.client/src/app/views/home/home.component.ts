import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
	AdvantageTileComponent,
	IAdvantageTileComponent,
} from '../../componetns/advantageTile/advantageTile.component';
import { LinkBtnComponent } from '../../componetns/linkBtn/linkBtn.component';
import {
	IMyWorkTileComponent,
	ServicesTileComponent,
} from '../../componetns/myWorkTile/myWorkTile.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [
		CommonModule,
		AdvantageTileComponent,
		LinkBtnComponent,
		ServicesTileComponent,
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.sass',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
	advantageData: IAdvantageTileComponent[] = [
		{
			img: 'assets/img/iconDefault.svg',
			alt: 'Изображения преимуществ',
			title: 'Heading',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		},
		{
			img: 'assets/img/iconDefault.svg',
			alt: 'Изображения преимуществ',
			title: 'Heading',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		},
		{
			img: 'assets/img/iconDefault.svg',
			alt: 'Изображения преимуществ',
			title: 'Heading',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		},
	];
	myWorkData: IMyWorkTileComponent[] = [
		{
			img: 'assets/img/iconDefault.svg',
			alt: 'Изображения преимуществ',
			title: 'Heading',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			link: '#feedback',
		},
		{
			img: 'assets/img/iconDefault.svg',
			alt: 'Изображения преимуществ',
			title: 'Heading',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			link: '#feedback',
		},
		{
			img: 'assets/img/iconDefault.svg',
			alt: 'Изображения преимуществ',
			title: 'Heading',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			link: '#feedback',
		},
	];

	ngOnInit() {
		this.getDataHome();
	}

	getDataHome() {
		return;
	}
}
