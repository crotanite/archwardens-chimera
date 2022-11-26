import { contentProps } from '../../composables/components/props/useContentProps'
import { densityProps } from '../../composables/components/props/useDensityProps'
import { elevationProps } from '../../composables/components/props/useElevationProps'
import { themeProps } from '../../composables/components/props/useThemeProps'

export const definedProps = {
    ...contentProps(),
    ...densityProps(),
    ...elevationProps(),
    ...themeProps()
}
