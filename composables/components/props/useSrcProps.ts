export interface SrcProps {
    /**
     * The src to apply.
     * @type {string}
     */
     src?: string|null
}

export function srcProps (props: SrcProps = {}) {
    const defaults: SrcProps = { ...{ src: null }, ...props }

    return {
        src: {
            type: String,
            default: defaults.src
        }
    }
}
