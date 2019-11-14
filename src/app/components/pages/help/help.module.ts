import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from '@components/pages/help/components/help/help.component';
import { TitleComponent } from '@components/pages/help/components/title/title.component';
import { ContactComponent } from '@components/pages/help/components/contact/contact.component';

const routes: Routes = [
  {
    path: '', component: HelpComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HelpComponent, TitleComponent, ContactComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HelpModule { }
