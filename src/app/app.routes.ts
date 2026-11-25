import { Routes } from '@angular/router';
import { CalculatorPage } from './pages/calculator-page/calculator-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: CalculatorPage },
  { path: '**', component: NotFoundPage },
];
