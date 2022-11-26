export interface ComponentProps {
    /**
     * The component to use.
     * @type {string}
     */
    component?: unknown
}

export function componentProps (props: ComponentProps = {}) {
    const defaults: ComponentProps = { ...{ component: 'div' }, ...props }

    return {
        component: {
            type: [String, Object, Function],
            default: defaults.component
        }
    }
}
