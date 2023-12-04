import {Component, importProvidersFrom, inject, Input} from "@angular/core";
import {applicationConfig, componentWrapperDecorator, Decorator, moduleMetadata} from "@storybook/angular";
import {TranslocoService} from "@ngneat/transloco";
import {TranslocoStorybookModule} from "./transloco-storybook.module";

@Component({
  selector: 'story-transloco-wrapper',
  template: '<ng-content></ng-content>'
})
class StoryTranslocoWrapper {
  private readonly _translocoService = inject(TranslocoService);

  @Input() set language(value: string) {
    if (value) this._translocoService.setActiveLang(value);
  }
}

const withTranslocoDecorator: Decorator = (storyFn, context) => {
  const { language } = context.globals;
  return componentWrapperDecorator(StoryTranslocoWrapper, { language })(storyFn, context);
};

export const translocoDecorators = [
  moduleMetadata({
    declarations: [StoryTranslocoWrapper]
  }),
  applicationConfig({
    providers: [importProvidersFrom(TranslocoStorybookModule)]
  }),
  withTranslocoDecorator
];
