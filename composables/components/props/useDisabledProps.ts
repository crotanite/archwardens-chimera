export interface DisabledProps {
    /**
     * Whether the component is disabled.
     * @type {boolean}
     */
     disabled?: boolean
}

export function disabledProps (props: DisabledProps = {}) {
    const defaults: DisabledProps = { ...{ disabled: false }, ...props }

    return {
        disabled: {
            type: Boolean,
            default: defaults.disabled
        }
    }
}
