import { getCurrentInstance } from 'vue'

type ApplyLoading = (loadingClass?: string, defaultClass?: string) => string

export default function useApplyLoading (): { applyLoading: ApplyLoading } {
    const ctx = getCurrentInstance()

    const applyLoading: ApplyLoading = (loadingClass = 'cursor-wait opacity-50', defaultClass = '') => {
        let state = ctx?.props.loading
        return state ? loadingClass : defaultClass
    }

    return { applyLoading }
}
