import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TfeNewBackendSharedLibsModule, TfeNewBackendSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TfeNewBackendSharedLibsModule, TfeNewBackendSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TfeNewBackendSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TfeNewBackendSharedModule {
  static forRoot() {
    return {
      ngModule: TfeNewBackendSharedModule
    };
  }
}
