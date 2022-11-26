import { Screens } from '../../../archwardens.config'

export interface WidthProps {
    /**
     * The max width to apply.
     * @type {string|null}
     */
    maxWidth?: string|null

    /**
     * The width to apply.
     * @type {string|Screens<string>|null}
     */
    width?: string|Screens<string>|null
}

export function widthProps (props: WidthProps = {}) {
    const defaults: WidthProps = { ...{ maxWidth: null, width: null }, ...props }

    return {
        maxWidth: {
            type: String,
            default: defaults.maxWidth
        },

        width: {
            type: [String, Object as () => Screens<string>],
            default: defaults.width
        }
    }
}
