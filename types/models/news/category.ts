import { Model, BaseAttributes } from '../../models/base'

export interface CategoryAttributes extends BaseAttributes {
    key: string
    color: string
    default: boolean
    metadata: Array<string>
}

export interface CategoryIncludes {
    //
}

export type Category = Model<CategoryAttributes, CategoryIncludes>

export default Category
