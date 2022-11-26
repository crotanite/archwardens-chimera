import { ModelValueProps, modelValueProps } from '../../composables/components/props/useModelValueProps'

export const definedProps = {
    ...modelValueProps({ modelValue: null } as ModelValueProps<null|string>)
}
