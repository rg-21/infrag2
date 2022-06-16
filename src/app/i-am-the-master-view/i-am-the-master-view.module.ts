import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IAmTheMasterViewRoutingModule } from './i-am-the-master-view-routing.module';
import { IAmTheMasterViewComponent } from './i-am-the-master-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { IgxListModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxNavbarModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { TableViewComponent } from './table-view/table-view.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';

@NgModule({
  declarations: [
    IAmTheMasterViewComponent,
    ListViewComponent,
    TableViewComponent,
    KanbanBoardComponent
  ],
  imports: [
    CommonModule,
    IAmTheMasterViewRoutingModule,
    IgxListModule,
    IgxAvatarModule,
    FormsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxCardModule,
    IgxNavbarModule
  ]
})
export class IAmTheMasterViewModule {
}
