export interface HideRoundedProps {
    /**
     * Whether to hide rounded on the component.
     * @type {boolean}
     */
     hideRounded?: boolean
}

export function hideRoundedProps (props: HideRoundedProps = {}) {
    const defaults: HideRoundedProps = { ...{ hideRounded: false }, ...props }

    return {
        hideRounded: {
            type: Boolean,
            default: defaults.hideRounded
        }
    }
}
