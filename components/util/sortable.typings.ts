import { disabledProps } from '../../composables/components/props/useDisabledProps'
import { ModelValueProps, modelValueProps } from '../../composables/components/props/useModelValueProps'

export const definedProps = {
    ...disabledProps(),
    ...modelValueProps({ modelValue: [] } as ModelValueProps<Array<any>>)
}
