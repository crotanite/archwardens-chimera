import { contentProps } from '../../composables/components/props/useContentProps'
import { disabledProps } from '../../composables/components/props/useDisabledProps'
import { formErrorProp } from './error.typings'

export interface FormBaseProps {
    /**
     * The "v-model" attribute.
     */
     modelValue?: unknown

    /**
     * The name of the element.
     * @type {string}
     */
    name?: string
}

export function formBaseProps () {
    return {
        ...formErrorProp(),

        modelValue: {
            required: true
        },

        name: {
            type: String,
            required: true
        }
    }
}

export interface FormInputProps {
    /**
     * The autocomplete key.
     * @type {null|string}
     */
    autocomplete?: null|string

    /**
     * The input placeholder.
     * @type {null|string}
     */
    field?: null|string

    /**
     * The input placeholder.
     * @type {null|string}
     */
    placeholder?: null|string

    /**
     * The type of input.
     * @type {string}
     */
    type?: string
}

export function formInputProps (props: FormInputProps = {}) {
    const defaults: FormInputProps = { ...{ autocomplete: null, field: null, placeholder: null, type: 'text' }, ...props }

    return {
        autocomplete: {
            type: String,
            default: defaults.autocomplete
        },

        field: {
            type: String,
            default: defaults.field
        },

        placeholder: {
            type: String,
            default: defaults.placeholder
        },

        type: {
            type: String,
            default: defaults.type
        }
    }
}

export const baseDefinedProps = {
    ...contentProps(),
    ...disabledProps(),
    ...formBaseProps()
}

export const definedProps = {
    ...baseDefinedProps,
    ...formInputProps()
}

export type UpdateValueFunction = (event: Event, emits) => void

export const updateValue: UpdateValueFunction = (event: Event, emits): void => {
    const target = event.target as HTMLInputElement
    emits('update:modelValue', target.value)
}
