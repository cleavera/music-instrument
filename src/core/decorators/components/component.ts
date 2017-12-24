import { Type } from '../../interfaces/type.interface';

import { IComponentOptions } from './interfaces/component-options.interface';

export function Component(options: IComponentOptions): ClassDecorator {
    const template: HTMLTemplateElement = document.createElement('template');

    template.innerHTML = options.template || '<slot></slot>' + `<style>${options.styles || ''}</style>`;

    return ((target: Type<any>): Type<any> => {
        class EComponent extends target {
            constructor() {
                super();
                this.attachShadow.apply(this, [{ mode: 'open' }])
                    .appendChild(document.importNode(template.content, true));
            }
        }

        customElements.define(options.selector, EComponent);

        return EComponent;
    }) as any;
}
