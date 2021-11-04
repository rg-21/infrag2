import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';

export const routes: Routes = [
  { path: '', redirectTo: 'i-am-the-master-view/kanban-board', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'i-am-the-master-view', loadChildren: () => import('./i-am-the-master-view/i-am-the-master-view.module').then(m => m.IAmTheMasterViewModule) },
  { path: 'search-bar', component: SearchBarComponent, data: { text: 'Search bar' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
