export interface HideBorderProps {
    /**
     * Whether to hide the border on the component.
     * @type {boolean}
     */
     hideBorder?: boolean
}

export function hideBorderProps (props: HideBorderProps = {}) {
    const defaults: HideBorderProps = { ...{ hideBorder: false }, ...props }

    return {
        hideBorder: {
            type: Boolean,
            default: defaults.hideBorder
        }
    }
}
