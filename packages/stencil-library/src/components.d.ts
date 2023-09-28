/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyInput {
        "clearable": boolean;
        "label": string;
        "message": string;
        "placeholder": string;
        "required": boolean;
        "size": 'sm' | 'lg' | 'me';
        "type": 'text' | 'number';
        "value": string;
    }
    interface MyItem {
        "label": string;
        "required": string;
    }
    interface MyWeb {
    }
}
export interface MyWebCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyWebElement;
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyInputElement extends Components.MyInput, HTMLStencilElement {
    }
    var HTMLMyInputElement: {
        prototype: HTMLMyInputElement;
        new (): HTMLMyInputElement;
    };
    interface HTMLMyItemElement extends Components.MyItem, HTMLStencilElement {
    }
    var HTMLMyItemElement: {
        prototype: HTMLMyItemElement;
        new (): HTMLMyItemElement;
    };
    interface HTMLMyWebElement extends Components.MyWeb, HTMLStencilElement {
    }
    var HTMLMyWebElement: {
        prototype: HTMLMyWebElement;
        new (): HTMLMyWebElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "my-input": HTMLMyInputElement;
        "my-item": HTMLMyItemElement;
        "my-web": HTMLMyWebElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyInput {
        "clearable"?: boolean;
        "label"?: string;
        "message"?: string;
        "placeholder"?: string;
        "required"?: boolean;
        "size"?: 'sm' | 'lg' | 'me';
        "type"?: 'text' | 'number';
        "value"?: string;
    }
    interface MyItem {
        "label"?: string;
        "required"?: string;
    }
    interface MyWeb {
        "onNameC"?: (event: MyWebCustomEvent<string>) => void;
        "onTagC"?: (event: MyWebCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "my-input": MyInput;
        "my-item": MyItem;
        "my-web": MyWeb;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-input": LocalJSX.MyInput & JSXBase.HTMLAttributes<HTMLMyInputElement>;
            "my-item": LocalJSX.MyItem & JSXBase.HTMLAttributes<HTMLMyItemElement>;
            "my-web": LocalJSX.MyWeb & JSXBase.HTMLAttributes<HTMLMyWebElement>;
        }
    }
}