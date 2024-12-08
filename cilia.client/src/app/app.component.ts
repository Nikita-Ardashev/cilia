import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.sass',
})
export class AppComponent {
	constructor(private http: HttpClient) {}
	

	title = 'Ресница';
}
