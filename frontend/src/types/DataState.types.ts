export type UserT = {
    _id: string
    isActive: boolean
    balance: string
    picture: string
    age: number
    name: string
    gender: string
    company: string
    email: string
}

export type initialStateT = {
    users: any[]
    activeUser: any
    loading: boolean
    error: string | undefined
}

export interface AddNewUserFormI extends Omit<UserT, '_id'> {}
