export interface DensityProps {
    /**
     * Whether to narrow the padding on the component.
     * @type {boolean|null}
     */
     dense?: boolean|null
}

export function densityProps (props: DensityProps = {}) {
    const defaults: DensityProps = { ...{ dense: false }, ...props }

    return {
        dense: {
            type: Boolean,
            default: defaults.dense
        }
    }
}
