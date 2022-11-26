import { hideBorderProps } from '../../composables/components/props/useHideBorderProps'
import { hideHoverProps } from '../../composables/components/props/useHideHoverProps'

export interface ListProps {
    border: string
    hover: string
    padding: string
    hideBorder: boolean
    hideHover: boolean|null
}

export const definedProps = {
    ...hideBorderProps(),
    ...hideHoverProps(),

    border: {
        type: String,
        default: 'border-gray-200'
    },

    hover: {
        type: String,
        default: 'hover:bg-gray-200 dark:hover:bg-gray-700'
    },

    padding: {
        type: String,
        default: 'px-4 py-2'
    }
}
