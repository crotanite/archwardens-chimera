export interface ToggleProps {
    /**
     * How long it takes for the transition to run.
     * @type {number}
     */
    duration?: number
}

export function toggleProps (props: ToggleProps = {}) {
    const defaults: ToggleProps = { ...{ duration: 100 }, ...props }

    return {
        disableToggle: {
            type: Boolean,
            default: false
        },

        /**
         * How long it takes for the transition to run.
         */
        duration: {
            type: Number,
            default: defaults.duration
        },

        /**
         * Whether the content starts open.
         */
        isOpen: {
            type: Boolean,
            default: false
        }
    }
}
