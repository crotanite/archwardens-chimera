import { Model, BaseAttributes } from '../../models/base'

export interface RoleAttributes extends BaseAttributes {
    key: string
    color: string
    default: boolean
    staff: boolean
    admin: boolean
    permissions: Array<boolean>
}

export interface RoleIncludes {
    //
}

export type Role = Model<RoleAttributes, RoleIncludes>

export default Role
