import { Model, BaseAttributes } from '../../models/base'
import Category from './category'
import User from '../user/user'

export interface PostAttributes extends BaseAttributes {
    title: string
    slug: string
    major: boolean
    summary: string
    content: string
    metadata: Array<string>
    posted_at: string
}

export interface PostIncludes {
    category?: Category
    user?: User
}

export type Post = Model<PostAttributes, PostIncludes>

export default Post
