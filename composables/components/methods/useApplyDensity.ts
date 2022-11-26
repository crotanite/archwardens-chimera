import { getCurrentInstance } from 'vue'
import useTheme from '../../useTheme'

type ApplyDensity = (group?: string, override?: boolean|null) => string

export default function useApplyDensity (): { applyDensity: ApplyDensity } {
    const ctx = getCurrentInstance()

    const applyDensity: ApplyDensity = (group = 'content', override = null) => {
        let state = ctx?.props.dense
        if (override !== null) {
            state = override
        }

        if (state === null) {
            return ''
        }
        return state ? useTheme().padding[group].dense : useTheme().padding[group].wide
    }

    return { applyDensity }
}
