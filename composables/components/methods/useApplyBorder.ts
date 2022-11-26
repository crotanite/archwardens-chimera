import { getCurrentInstance } from 'vue'
import useTheme from '../../useTheme'

type ApplyBorder = (border?: string, override?: boolean|null) => string

export default function useApplyBorder (defaultBorder = true): { applyBorder: ApplyBorder } {
    const ctx = getCurrentInstance()

    const applyBorder: ApplyBorder = (border = 'border', override = null) => {
        let state = ctx?.props.showBorder ?? defaultBorder
        if (override !== null) {
            state = override
        }
        return ''
        // return state ? `${border} ${useTheme().colors.border.system?.upper}` : ''
    }

    return { applyBorder }
}
