import { AppRoutingModule } from './app.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { ControlStatisticsComponent } from './components/control-statistics/control-statistics.component';
import { ControlOptionsComponent } from './components/control-options/control-options.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ControlBoardComponent } from './components/control-board/control-board.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';

@NgModule({
  declarations: [
    HeaderComponent,
    GreetingsComponent,
    ControlStatisticsComponent,
    ControlOptionsComponent,
    OverviewComponent,
    ControlBoardComponent,
    DetailViewComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }