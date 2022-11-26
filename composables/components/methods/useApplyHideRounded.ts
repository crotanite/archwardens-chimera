import { getCurrentInstance } from 'vue'

type ApplyHideRounded = (override?: boolean|null) => string

export default function useApplyHideRounded (): { applyHideRounded: ApplyHideRounded } {
    const ctx = getCurrentInstance()

    const applyHideRounded: ApplyHideRounded = (override = null) => {
        let state = ctx?.props.hideRounded
        if (override !== null) {
            state = override
        }
        return state ? '' : 'rounded'
    }

    return { applyHideRounded }
}
