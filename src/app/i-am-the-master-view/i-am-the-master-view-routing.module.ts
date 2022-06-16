import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IAmTheMasterViewComponent } from './i-am-the-master-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { TableViewComponent } from './table-view/table-view.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';

const routes: Routes = [{ path: '', component: IAmTheMasterViewComponent, children: [{ path: 'list-view', component: ListViewComponent, data: { text: 'List View' } }, { path: 'table-view', component: TableViewComponent, data: { text: 'Table View' } }, { path: '', redirectTo: 'kanban-board', pathMatch: 'full' }, { path: 'kanban-board', component: KanbanBoardComponent, data: { text: 'Kanban board' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IAmTheMasterViewRoutingModule {
}
