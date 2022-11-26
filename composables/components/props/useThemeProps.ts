export interface ThemeProps {
    /**
     * The theme to apply to the component.
     * @type {string|null}
     */
     theme?: string|null

     /**
      * Whether the show the "lower" variation of the system theme.
      * @type {boolean}
      */
     lower?: boolean
}

export function themeProps (props: ThemeProps = {}) {
    const defaults: ThemeProps = { ...{ lower: false, theme: 'accent' }, ...props }

    return {
        lower: {
            type: Boolean,
            default: defaults.lower
        },

        theme: {
            type: String,
            default: defaults.theme
        }
    }
}
