import { Model, BaseAttributes } from '../../models/base'
import User from './user'

export interface ActivityAttributes extends BaseAttributes {
    key: string
    parameters: Array<string>
}

export interface ActivityIncludes {
    user: User
}

export type Activity = Model<ActivityAttributes, ActivityIncludes>

export default Activity
