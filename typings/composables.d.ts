import { CalculateScreenSize, GetValueForScreen, useScreen } from '../composables/useScreen'
import { useTheme } from '../composables/useTheme'
import { FadeDoneFunction, fade } from '../composables/transitions/fade'
import { SlideVerticalDoneFunction, slideUp, slideDown } from '../composables/transitions/slideVertical'

declare module "@archwardens/chimera/composables" {
    export {
        CalculateScreenSize,
        GetValueForScreen,
        useScreen,
        useTheme,
        FadeDoneFunction,
        fade,
        SlideVerticalDoneFunction,
        slideUp,
        slideDown,
    }
}
