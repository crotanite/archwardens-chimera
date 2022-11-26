import { widthProps } from '../../composables/components/props/useWidthProps'

export interface GridColumnProps {
    /**
     * Whether to "grow" the column.
     * @type {null|boolean}
     */
     grow?: null|boolean

    /**
     * Whether to "shrink" the column.
     * @type {null|boolean}
     */
     shrink?: null|boolean
}

export function gridColumnProps (props: GridColumnProps = {}) {
    const defaults: GridColumnProps = { ...{ grow: null, shrink: null }, ...props }

    return {
        grow: {
            type: Boolean,
            default: defaults.grow
        },

        shrink: {
            type: Boolean,
            default: defaults.shrink
        }
    }
}

export const definedProps = {
    ...widthProps({ item: 'items-start', justify: 'justify-start' }),
    ...gridColumnProps(),
}
