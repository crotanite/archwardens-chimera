import { getCurrentInstance } from 'vue'

type ApplyDisabled = (disabledClass?: string, defaultClass?: string, override?: boolean|null) => string

export default function useApplyDisabled (): { applyDisabled: ApplyDisabled } {
    const ctx = getCurrentInstance()

    const applyDisabled: ApplyDisabled = (disabledClass = 'bg-gray-400 cursor-not-allowed text-white', defaultClass = '', override = null) => {
        let state = ctx?.props.disabled
        if (override !== null) {
            state = override
        }
        return state ? disabledClass : defaultClass
    }

    return { applyDisabled }
}
