import { contentProps } from '../../composables/components/props/useContentProps'
import { densityProps } from '../../composables/components/props/useDensityProps'
import { disabledProps } from '../../composables/components/props/useDisabledProps'
import { fullWidthProps } from '../../composables/components/props/useFullWidthProps'
import { hideRoundedProps } from '../../composables/components/props/useHideRoundedProps'
import { hrefProps } from '../../composables/components/props/useHrefProps'
import { loadingProps } from '../../composables/components/props/useLoadingProps'
import { themeProps } from '../../composables/components/props/useThemeProps'

export const definedProps = {
    ...contentProps(),
    ...densityProps(),
    ...disabledProps(),
    ...fullWidthProps(),
    ...hideRoundedProps(),
    ...hrefProps(),
    ...loadingProps(),
    ...themeProps()
}
