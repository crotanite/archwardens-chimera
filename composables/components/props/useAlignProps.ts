export interface AlignProps {
    /**
     * The alignment of the content within the component.
     * @type {string}
     */
    items?: 'items-start'|'items-end'|'items-center'|'items-baseline'|'items-stretch'

    /**
     * The alignment of the content within the component.
     * @type {string}
     */
    justify?: 'justify-start'|'justify-end'|'justify-center'|'justify-between'|'justify-around'|'justify-evenly'
}

export function alignProps (props: AlignProps = {}) {
    const defaults: AlignProps = { ...{ items: 'items-start', justify: 'justify-start' }, ...props }

    return {
        items: {
            type: String,
            default: defaults.items
        },

        justify: {
            type: String,
            default: defaults.justify
        }
    }
}
