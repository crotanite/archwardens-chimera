import { colorProps } from '../../composables/components/props/useColorProps'
import { contentProps } from '../../composables/components/props/useContentProps'
import { ModelValueProps, modelValueProps } from '../../composables/components/props/useModelValueProps'

export const definedProps = {
    ...colorProps({ color: 'bg-accent-500 dark:bg-accent-600' }),
    ...contentProps({ content: null }),
    ...modelValueProps({ modelValue: false } as ModelValueProps<boolean>)
}
