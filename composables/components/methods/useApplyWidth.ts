import { getCurrentInstance } from 'vue'
import { Screens } from '../../../archwardens.config'
import { useScreen } from '../../useScreen'

export type ApplyWidth = () => string

export default function useApplyWidth (): { applyWidth: ApplyWidth } {
    const ctx = getCurrentInstance()

    const applyWidth: ApplyWidth = (): string => {
        const widthState = ctx?.props.width
        const maxWidthState = ctx?.props.maxWidth

        let output = ''

        if (widthState === null) {
            //
        } else if (typeof widthState === 'object') {
            const { getValueForScreen } = useScreen()
            const val = getValueForScreen(widthState as Screens<string>)
            output += val
        } else if (typeof widthState === 'string') {
            output += widthState
        }

        if (maxWidthState !== null) {
            output += ` ${maxWidthState}`
        }

        return output
    }

    return { applyWidth }
}
