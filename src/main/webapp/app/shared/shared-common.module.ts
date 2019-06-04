import { NgModule } from '@angular/core';

import { TfeNewBackendSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [TfeNewBackendSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [TfeNewBackendSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TfeNewBackendSharedCommonModule {}
