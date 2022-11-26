export interface FullWidthProps {
    /**
     * Whether the component should be full width of the container.
     * @type {boolean}
     */
     fullWidth?: boolean
}

export function fullWidthProps (props: FullWidthProps = {}) {
    const defaults: FullWidthProps = { ...{ fullWidth: false }, ...props }

    return {
        fullWidth: {
            type: Boolean,
            default: defaults.fullWidth
        }
    }
}
