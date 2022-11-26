import { getCurrentInstance } from 'vue'

type ApplyHover = (hover?: string, override?: boolean|null) => string

export default function useApplyHover (defaultHover = true): { applyHover: ApplyHover } {
    const ctx = getCurrentInstance()

    const applyHover: ApplyHover = (hover = '', override: boolean|null = null) => {
        let state = ctx?.props.hideHover ?? false
        if (override !== null) {
            state = override
        }
        return state ? hover : ''
    }

    return { applyHover }
}
