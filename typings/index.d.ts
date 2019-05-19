type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

declare module 'formsy-react' {

  export interface FormsyMixinProps<T> {
    value?: T | undefined;
    label?: React.Node;
    name: string
    validations?: string | string[]
    validationError?: string | string[]
    required: boolean
  }

  export interface FormsyInjectedProps<T> {
    getValue: () => T;
    setValue: (value: T | undefined) => void;
    getErrorMessage: () => string;
    showRequired: () => boolean;
    showError: () => boolean;
  }

  export function withFormsy<T, P extends FormsyInjectedProps<T>>(component: React.ComponentClass<P>): React.ComponentClass<Omit<P & FormsyMixinProps<T>, keyof FormsyInjectedProps<T>>>;

  export interface FormsyProps<TData> {
    onValidSubmit?: (data: TData, resetForm: boolean, invalidateForm: (propertyErrors: { [key: string]: string }) => void) => void;
    validationErrors?: { [key: string]: string };
    className?: string;
    onValid: () => void;
    onInvalid: () => void;
  }

  export default class Formsy<T> extends React.Component<FormsyProps<T>> {
  }
}