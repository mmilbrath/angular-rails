import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentService } from './documents/document.service';
import { HomePageComponent } from './homepage/homepage.component';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';
import { ProposalService } from './proposal/proposal.service';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HomePageComponent,
        DocumentsComponent,
        ProposalListComponent,
        ProposalNewComponent,
        ProposalShowComponent
    ],
    providers: [
        DocumentService,
        ProposalService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
