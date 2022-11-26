declare module "@archwardens/chimera/composables" {
    // useScreen
    export type CalculateScreenSize = () => string
    export type GetValueForScreen = (sizes: unknown, defaultValue?: string) => string
    export function useScreen (): { calculateScreenSize: CalculateScreenSize, getValueForScreen: GetValueForScreen }

    // transitions/fade
    export type FadeDoneFunction = () => void
    export function fade (el: HTMLElement, done: FadeDoneFunction, start?: number, end?: number, duration?: number, delay?: number): void;

    // transitions/slideVertical
    export type SlideVerticalDoneFunction = () => void
    export function slideUp (el: HTMLElement, done: SlideVerticalDoneFunction, duration?: number, delay?: number): void;
    export function slideDown (el: HTMLElement, done: SlideVerticalDoneFunction, duration?: number, delay?: number): void;
}

// declare module "@archwardens/composables/useScreen" {
//     import { Screens } from '@archwardens/chimera/config'

//     export type CalculateScreenSize = () => string
//     export type GetValueForScreen = (sizes: Screens<unknown>, defaultValue?: string) => string

//     export default function useScreen (): { calculateScreenSize: CalculateScreenSize, getValueForScreen: GetValueForScreen }
// }

// declare module "@archwardens/composables/useTheme" {
//     import { Theme } from '@archwardens/archwardens.config'

//     export default function useTheme(): Theme
// }
