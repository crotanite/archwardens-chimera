import { getCurrentInstance } from 'vue'

type GetComponent = () => unknown

export default function useGetComponent (): { getComponent: GetComponent } {
    const ctx = getCurrentInstance()

    const getComponent: GetComponent = () => {
        const component = ctx?.props.component
        if (typeof component === 'string') {
            return component
        } else if (typeof component === 'object') {
            return component
        }
    }

    return { getComponent }
}
