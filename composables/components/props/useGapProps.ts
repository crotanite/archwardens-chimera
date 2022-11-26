export interface GapProps {
    /**
     * The gap between elements.
     * @type {string}
     */
    gap?: string
}

export function gapProps (props: GapProps = {}) {
    const defaults: GapProps = { ...{ gap: 'gap-3' }, ...props }

    return {
        gap: {
            type: String,
            default: defaults.gap
        }
    }
}
