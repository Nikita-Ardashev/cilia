import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.sass',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
