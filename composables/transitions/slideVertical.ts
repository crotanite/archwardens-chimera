import velocity from 'velocity-animate'
import { SlideVerticalDoneFunction } from '@archwardens/chimera/composables'

/**
 * Slide the element up.
 *
 * @param {HTMLElement} el
 * @param {SlideVerticalDoneFunction} done
 * @param {number} duration
 * @param {number} delay
 * @return {void}
 */
export function slideUp (el: HTMLElement, done: SlideVerticalDoneFunction, duration = 500, delay = 0): void {
    const height = el.offsetHeight

    velocity(el, {
        height: [0, height]
    }, {
        delay,
        duration,
        complete: () => { done() }
    })
}

/**
 * Slide the element up.
 *
 * @param {HTMLElement} el
 * @param {DoneFunction} done
 * @param {number} duration
 * @param {number} delay
 * @return {void}
 */
export function slideDown (el: HTMLElement, done: SlideVerticalDoneFunction, duration = 500, delay = 0): void {
    const height = el.offsetHeight

    velocity(el, {
        height: [height, 0]
    }, {
        delay,
        duration,
        complete: () => { done() }
    })
}
