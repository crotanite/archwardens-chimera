import velocity from 'velocity-animate'
import { FadeDoneFunction } from '@archwardens/composables/transitions/fade'

/**
 * Fade an element.
 *
 * @param {HTMLElement} el
 * @param {FadeDoneFunction} done
 * @param {number} start
 * @param {number} end
 * @param {number} duration
 * @param {number} delay
 * @return {void}
 */
export function fade (el: HTMLElement, done: FadeDoneFunction, start: number = 0, end: number = 1, duration: number = 500, delay: number = 0): void {
    velocity(el, {
        opacity: [end, start]
    }, {
        delay,
        duration,
        complete: () => { done() }
    })
}
