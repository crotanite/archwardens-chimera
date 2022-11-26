import { getCurrentInstance } from 'vue'

type ApplyHideBorder = (override?: boolean|null) => string

export default function useApplyHideBorder (): { applyHideBorder: ApplyHideBorder } {
    const ctx = getCurrentInstance()

    const applyHideBorder: ApplyHideBorder = (override = null) => {
        let state = ctx?.props.hideBorder
        if (override !== null) {
            state = override
        }
        return state ? '' : 'border'
    }

    return { applyHideBorder }
}
