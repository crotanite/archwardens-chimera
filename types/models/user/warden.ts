import { Model, BaseAttributes } from '../../models/base'

export interface WardenAttributes extends BaseAttributes {
    name: string
    gender: 'male'|'female'
    selected?: boolean
}

export interface WardenIncludes {
    //
}

export type Warden = Model<WardenAttributes, WardenIncludes>

export default Warden
