import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'adm',
    loadChildren: () => import('./paginas/adm/adm.module').then( m => m.AdmPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./paginas/agregar/agregar.module').then( m => m.AgregarPageModule)
  },

  {
    path: 'noticiaspagina',
    loadChildren: () => import('./paginas/noticiaspagina/noticiaspagina.module').then( m => m.NoticiaspaginaPageModule)
  },
  {
    path: 'afondopagina',
    loadChildren: () => import('./paginas/afondopagina/afondopagina.module').then( m => m.AfondopaginaPageModule)
  },
  {
    path: 'nosotrospagina',
    loadChildren: () => import('./paginas/nosotrospagina/nosotrospagina.module').then( m => m.NosotrospaginaPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./paginas/modal/modal.module').then( m => m.ModalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
