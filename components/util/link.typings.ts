import { colorProps } from '../../composables/components/props/useColorProps'
import { contentProps } from '../../composables/components/props/useContentProps'
import { hrefProps } from '../../composables/components/props/useHrefProps'

export const definedProps = {
    ...colorProps({ color: 'text-accent-500 dark:text-accent-500' }),
    ...contentProps(),
    ...hrefProps()
}
