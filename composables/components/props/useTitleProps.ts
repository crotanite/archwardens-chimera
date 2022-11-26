export interface TitleProps {
    /**
     * The subtitle of the element.
     */
    subtitle?: string|null

    /**
     * The title of the element.
     */
    title?: string|null
}

export function titleProps (props: TitleProps = {}) {
    const defaults: TitleProps = { ...{ subtitle: null, title: null }, ...props }

    return {
        subtitle: {
            type: String,
            default: defaults.subtitle
        },

        title: {
            type: String,
            default: defaults.title
        }
    }
}
