import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTING } from './app.routing';
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent} from './notfound/notfound.component';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatMenuModule, MatInputModule, MatDividerModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { MatIconModule } from '@angular/material/icon';
import { OperatorService } from './logic.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    HomeComponent,
    NotFoundComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, MatButtonModule, MatCardModule, MatMenuModule, MatInputModule, MatDividerModule, MatIconModule, MatCheckboxModule,
    ROUTING
  ],
  exports: [ RouterModule ],
  providers: [ OperatorService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
