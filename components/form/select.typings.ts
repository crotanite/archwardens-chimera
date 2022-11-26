import { heightProps } from '../../composables/components/props/useHeightProps'
import { widthProps } from '../../composables/components/props/useWidthProps'

export interface SelectProps {
    /**
     * The group to put the options into.
     * @type {null|string}
     */
    group?: null|string

    label?: null|string

    /**
     * The "v-model" attribute.
     * @type {string|object}
     */
    modelValue?: string|number|object

    /**
     * The options passed to the select.
     * @type {object|Array<object|string>}
     */
    options?: object|Array<string|number|object>

    /**
     * The property to use in an array of objects.
     * @type {string}
     */
    trackBy?: string
}

export function selectProps (props: SelectProps = {}) {
    const defaults: SelectProps = { ...{ group: null, label: null, trackBy: 'key' }, ...props }

    return {
        group: {
            type: String,
            default: defaults.group
        },

        label: {
            type: String,
            default: defaults.label
        },

        modelValue: {
            type: [String, Number, Object],
            required: true
        },

        options: {
            type: [Object, Array<Number|String|Object>],
            required: true
        },

        showAbove: {
            type: Boolean,
            default: false
        },

        trackBy: {
            type: String,
            default: defaults.trackBy
        }
    }
}

export const definedProps = {
    ...heightProps({ maxHeight: 'max-h-[200px]' }),
    ...widthProps({ width: 'w-full' }),
    ...selectProps()
}
