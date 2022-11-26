export interface BaseAttributes {
    created_at: string
    updated_at: string
    deleted_at?: string|null
}

export interface Model<Attributes extends BaseAttributes, Includes> {
    type: string
    id: string
    attributes: Attributes
    includes?: Includes|null
}
