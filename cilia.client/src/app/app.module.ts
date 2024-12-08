import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './componetns/header/header.component';
import { FooterComponent } from './componetns/footer/footer.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		HomeComponent,
		HeaderComponent,
		FooterComponent,
		RouterLink,
		RouterOutlet,
	],
	providers: [RouterOutlet],
	bootstrap: [AppComponent],
})
export class AppModule {}
