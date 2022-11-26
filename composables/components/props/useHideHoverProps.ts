export interface HideHoverProps {
    //
}

export function hideHoverProps (props: HideHoverProps = {}) {
    const defaults: HideHoverProps = { ...{ hideHover: null }, ...props }

    return {
        hideHover: {
            type: Boolean,
            default: null
        }
    }
}
