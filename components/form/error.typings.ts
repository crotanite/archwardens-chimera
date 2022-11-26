export interface FormErrorProp {
    /**
     * The errors to display.
     * @type {string|null}
     */
     error: string|null
}

export function formErrorProp () {
    return {
        error: {
            type: String,
            default: null
        }
    }
}

export const definedProps = {
    ...formErrorProp()
}
