import { getCurrentInstance } from 'vue'
import useTheme from '../../useTheme'
import { Colors } from '../../../archwardens.config'

type ApplyTheme = (withBorder: boolean) => string

export default function useApplyTheme (): { applyTheme: ApplyTheme } {
    const ctx = getCurrentInstance()

    const applyTheme: ApplyTheme = (withBorder: boolean = false): string => {
        const state = ctx?.props.theme as keyof Colors
        const lower = ctx?.props.lower ?? false as boolean

        let output = ''

        if (state === 'system') {
            output += lower ? String(useTheme().colors.background.system.disabled) : String(useTheme().colors.background.system.element)

            if (withBorder) {
                output += lower ? String(useTheme().colors.border.system.disabled) : String(useTheme().colors.border.system.element)
            }
        } else {
            output += String(useTheme().colors.background[state])

            if (withBorder) {
                output += String(useTheme().colors.border[state])
            }
        }

        return output
    }

    return { applyTheme }
}
