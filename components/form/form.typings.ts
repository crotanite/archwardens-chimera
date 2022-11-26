import { disabledProps, DisabledProps } from '../../composables/components/props/useDisabledProps'

export type FormSubmitFunction = () => void

export interface FormProps extends DisabledProps {
    /**
     * The submit function to use.
     * @type {null|FormSubmitFunction}
     */
    submit?: null|FormSubmitFunction
}

export function formProps (props: FormProps = {}) {
    const defaults: FormProps = { ...{ submit: null, validator: null }, ...props }

    return {
        submit: {
            type: Function as FormSubmitFunction,
            default: defaults.submit
        }
    }
}

export const definedProps = {
    ...disabledProps(),
    ...formProps()
}
