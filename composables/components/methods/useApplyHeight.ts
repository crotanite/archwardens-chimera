import { getCurrentInstance } from 'vue'
import { Screens } from '../../../archwardens.config'
import { useScreen } from '../../../composables/useScreen'

type ApplyHeight = () => string

export default function useApplyHeight (): { applyHeight: ApplyHeight } {
    const ctx = getCurrentInstance()

    const applyHeight: ApplyHeight = (): string => {
        const heightState = ctx?.props.height
        const maxHeightState = ctx?.props.maxHeight

        let output = ''

        if (heightState === null) {
            //
        } else if (typeof heightState === 'object') {
            const { getValueForScreen } = useScreen()
            const val = getValueForScreen(heightState as Screens<string>)
            output += val
        } else if (typeof heightState === 'string') {
            output += heightState
        }

        if (maxHeightState !== null) {
            output += ` ${maxHeightState}`
        }

        return output
    }

    return { applyHeight }
}
