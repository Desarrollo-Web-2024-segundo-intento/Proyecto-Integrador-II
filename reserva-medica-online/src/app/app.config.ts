import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withComponentInputBinding()),
    importProvidersFrom(HttpClientModule),
    provideHttpClient()

    //esto tenia develop antes de merge de Jesi
//import { provideRouter, withComponentInputBinding } from '@angular/router';
//import { routes } from './app.routes';
//import { HttpClientModule } from '@angular/common/http';

//export const appConfig: ApplicationConfig = {
 // providers: [provideRouter(routes, withComponentInputBinding()),
  //  importProvidersFrom(HttpClientModule)

  ]
};
