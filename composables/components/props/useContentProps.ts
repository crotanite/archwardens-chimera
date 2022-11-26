export interface ContentProps {
    /**
     * The text to place within the slot.
     * @type {null|string|number}
     */
    content?: null|string|number
}

export function contentProps (props: ContentProps = {}) {
    const defaults: ContentProps = { ...{ content: null }, ...props }

    return {
        content: {
            type: [String, Number],
            default: defaults.content
        }
    }
}
