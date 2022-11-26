export interface InlineProps {
    /**
     * Whether to show the element inline.
     * @type {boolean}
     */
    inline?: boolean
}

export function inlineProps (props: InlineProps = {}) {
    const defaults: InlineProps = { ...{ inline: false }, ...props }

    return {
        inline: {
            type: Boolean,
            default: defaults.inline
        }
    }
}
