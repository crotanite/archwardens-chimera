export interface ElevationProps {
    /**
     * The elevation of the component.
     * @type {number}
     */
     elevation?: 0|1|2|3|4|5
}

export function elevationProps (props: ElevationProps = {}) {
    const defaults: ElevationProps = { ...{ elevation: 0 }, ...props }

    return {
        elevation: {
            type: Number,
            default: defaults.elevation
        }
    }
}
