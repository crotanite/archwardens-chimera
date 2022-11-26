export default interface Pagination<T> {
    data: Array<T>
    links: {
        first: string|null
        last: string|null
        next: string|null
        prev: string|null
    }
    meta: {
        current_page: number
        from: number
        last_page: number
        links: Array<object>
        path: string
        per_page: number
        to: number
        total: number
    }
}
