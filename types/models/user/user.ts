import { Model, BaseAttributes } from '../../models/base'
import Role from '../global/role'

export interface UserAttributes extends BaseAttributes {
    uid: string
    email: string
    birthday: string
    username: string
    display_name: string
    metadata: Array<string>
    premium: string|null
    age: number
    isActive: boolean
}

export interface UserIncludes {
    role: Role
}

export type User = Model<UserAttributes, UserIncludes>

export default User
