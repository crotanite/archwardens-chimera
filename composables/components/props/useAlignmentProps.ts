export interface AlignmentProps {
    /**
     * The horizontal alignment of the content within the banner.
     * @type {string}
     */
    horizontal?: 'left'|'right'

    /**
     * The vertical alignment of the content within the banner.
     * @type {string}
     */
    vertical?: 'top'|'bottom'|'overlay'
}

export function alignmentProps (props: AlignmentProps = {}) {
    const defaults: AlignmentProps = { ...{ horizontal: 'left', vertical: 'top' }, ...props }

    return {
        horizontal: {
            type: String,
            default: defaults.horizontal
        },

        vertical: {
            type: String,
            default: defaults.vertical
        }
    }
}
