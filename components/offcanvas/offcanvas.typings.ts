import { Ref } from 'vue'

export interface OffCanvasProps {
    /**
     * The width of the left drawer.
     * @type {null|number}
     */
    left?: null|number

    /**
     * The width of the right drawer.
     * @type {null|number}
     */
    right?: null|number

    /**
     * The screens to force the left drawer open.
     * @type {Array<string>}
     */
    showLeftAtScreen?: Array<string>

    /**
     * The screens to force the left drawer open.
     * @type {Array<string>}
     */
    showRightAtScreen?: Array<string>
}

export interface Drawers {
    left: boolean
    right: boolean
}

export interface OffCanvasInject extends OffCanvasProps {
    openDrawers: Ref<Drawers>
}

export function offCanvasProps (props: OffCanvasProps = {}) {
    const defaults: OffCanvasProps = { ...{ left: null, right: null, showLeftAtScreen: [], showRightAtScreen: [] }, ...props }

    return {
        left: {
            type: Number,
            default: defaults.left
        },

        right: {
            type: Number,
            default: defaults.right
        },

        showLeftAtScreen: {
            type: Array,
            default: defaults.showLeftAtScreen
        },

        showRightAtScreen: {
            type: Array,
            default: defaults.showRightAtScreen
        }
    }
}

export const definedProps = {
    ...offCanvasProps()
}
