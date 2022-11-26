export interface ColorProps {
    /**
     * The color class to apply.
     * @type {string}
     */
    color?: string|null
}

export function colorProps (props: ColorProps = {}) {
    const defaults: ColorProps = { ...{ color: null }, ...props }

    return {
        color: {
            type: String,
            default: defaults.color
        }
    }
}
