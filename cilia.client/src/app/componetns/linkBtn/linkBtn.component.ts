import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-link-btn',
	standalone: true,
	imports: [CommonModule],
	template: `<a [href]="link" [style]="styleBtn"><ng-content></ng-content></a>`,
	styleUrl: './linkBtn.component.sass',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkBtnComponent {
	@Input()
	link = '';
	@Input()
	styleBtn?: CSSStyleValue;
}
