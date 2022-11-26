export interface ModelValueProps<T> {
    /**
     * The model value.
     * @type {T}
     */
     modelValue?: T
}

export function modelValueProps (props: ModelValueProps<unknown> = {}) {
    const defaults: ModelValueProps<unknown> = { ...{ modelValue: null }, ...props }

    return {
        modelValue: {
            default: defaults.modelValue
        }
    }
}
