import { Screens } from '../../../archwardens.config'

export interface HeightProps {
    /**
     * The height to apply.
     * @type {string|Screens<string>|null}
     */
     height?: string|Screens<string>|null

     /**
      * The max height to apply.
     * @type {string}
      */
     maxHeight?: string|null
}

export function heightProps (props: HeightProps = {}) {
    const defaults: HeightProps = { ...{ height: null, maxHeight: null }, ...props }

    return {
        height: {
            type: [Number, String, Object as () => Screens<string>],
            default: defaults.height
        },

        maxHeight: {
            type: [Number, String],
            default: defaults.maxHeight
        }
    }
}
