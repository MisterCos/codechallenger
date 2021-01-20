import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';



import { FormsModule } from '@angular/forms';
import { UserListComponent } from './core/components/user-list/user-list.component';
import { UserDetailComponent } from './core/components/user-detail/user-detail.component';
import { FilterPipe } from './core/pipes/filter.pipe';
import { UserdetailFullComponent } from './core/components/userdetail-full/userdetail-full.component';
import { HttpErrorInterceptor } from './core/services/http-error.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    FilterPipe,
    UserdetailFullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
