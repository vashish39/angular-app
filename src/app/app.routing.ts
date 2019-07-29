import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { CalcComponent } from './calc/calc.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { DetailsComponent } from './details/details.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: '/add', pathMatch: 'full' },
    { path: 'dashboard', component: HomeComponent },
    { path: 'calc', component: CalcComponent },
    { path: 'add', component: NotFoundComponent },
    { path: ':name', component: DetailsComponent }

];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
