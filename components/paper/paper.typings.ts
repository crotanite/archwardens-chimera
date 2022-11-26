import { componentProps } from '../../composables/components/props/useComponentProps'
import { densityProps } from '../../composables/components/props/useDensityProps'
import { elevationProps } from '../../composables/components/props/useElevationProps'
import { hideBorderProps } from '../../composables/components/props/useHideBorderProps'
import { hideRoundedProps } from '../../composables/components/props/useHideRoundedProps'
import { themeProps } from '../../composables/components/props/useThemeProps'

export interface PaperProps {
    /**
     * Whether to show a different type of system theme.
     * @type {boolean}
     */
     lower?: boolean
}

export function paperProps (props: PaperProps = {}) {
    const defaults: PaperProps = { ...{ }, ...props }

    return {
        lower: {
            type: Boolean,
            default: false
        },
    }
}

export const definedProps = {
    ...componentProps({ component: 'div' }),
    ...densityProps({ dense: false }),
    ...elevationProps({ elevation: 0 }),
    ...hideBorderProps({ hideBorder: false }),
    ...hideRoundedProps({ hideRounded: false }),
    ...themeProps({ theme: 'system' }),
    ...paperProps()
}
