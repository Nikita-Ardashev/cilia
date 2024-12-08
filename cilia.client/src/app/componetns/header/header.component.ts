import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LinkBtnComponent } from '../linkBtn/linkBtn.component';
@Component({
	selector: 'app-header',
	standalone: true,
	imports: [CommonModule, LinkBtnComponent],
	templateUrl: './header.component.html',
	styleUrl: './header.component.sass',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	iconLogo = '/assets/img/iconLogo.svg';
}
