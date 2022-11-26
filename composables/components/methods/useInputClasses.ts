import useTheme from '../../useTheme'
import useApplyDisabled from './useApplyDisabled'

export default function useInputClasses (withHeight = true, additional: string|null = null, override: boolean|null = null): string {
    const { applyDisabled } = useApplyDisabled()

    let classes = `border text-sm rounded ${useTheme().padding.element.wide}`

    classes += applyDisabled(
        ` cursor-not-allowed ${useTheme().colors.background.system.inputDisabled} ${useTheme().colors.border.system.inputDisabled}`,
        ` ${useTheme().colors.background.system.input} ${useTheme().colors.border.system.input}`,
        override
    )

    if(withHeight) {
        classes += ' h-[38px]'
    }

    if (additional !== null) {
        classes += ` ${additional}`
    }

    return classes
}
