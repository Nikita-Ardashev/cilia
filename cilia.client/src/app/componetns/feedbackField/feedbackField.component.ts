import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-feedback-field',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './feedbackField.component.html',
    styleUrl: './feedbackField.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbackFieldComponent { }
