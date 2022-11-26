import { Model, BaseAttributes } from '../base'

export interface TabAttributes extends BaseAttributes {
    name: string
    slug: string
    emoji: null|string
}

export interface TabIncludes {
    //
}

export type Tab = Model<TabAttributes, TabIncludes>

export default Tab
