import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'advanced', loadChildren: './advanced/advanced.module#AdvancedModule'},
  {
  path: '',
  data: {
      title: ''
  },
  children: [
    {
      path: 'layout', data: { title: 'Layout',  },
      children: [
        {
          path: 'configuration',
          loadChildren: './+layout/configuration/configuration.module#ConfigurationModule',
          data: {
            title: 'Configuration'
          }
        },
      ]
    },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
