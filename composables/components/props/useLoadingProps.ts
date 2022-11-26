export interface LoadingProps {
    /**
     * Whether the component is loading.
     * @type {boolean}
     */
     loading?: boolean
}

export function loadingProps (props: LoadingProps = {}) {
    const defaults: LoadingProps = { ...{ loading: false }, ...props }

    return {
        loading: {
            type: Boolean,
            default: defaults.loading
        }
    }
}
