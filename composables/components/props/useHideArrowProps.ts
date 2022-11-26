export interface HideArrowProps {
    //
}

export function hideArrowProps (props: HideArrowProps = {}) {
    const defaults: HideArrowProps = { ...{ }, ...props }

    return {
        hideArrow: {
            type: Boolean,
            default: false
        }
    }
}
