import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IAmTheMasterViewRoutingModule } from './i-am-the-master-view-routing.module';
import { IAmTheMasterViewComponent } from './i-am-the-master-view.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { IgxCardModule, IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxListModule, IgxNavbarModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ListViewComponent } from './list-view/list-view.component';
import { TableViewComponent } from './table-view/table-view.component';

@NgModule({
  declarations: [
    IAmTheMasterViewComponent,
    KanbanBoardComponent,
    ListViewComponent,
    TableViewComponent
  ],
  imports: [
    CommonModule,
    IAmTheMasterViewRoutingModule,
    IgxCardModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxIconModule,
    FormsModule,
    IgxListModule,
    IgxNavbarModule
  ]
})
export class IAmTheMasterViewModule {
}
