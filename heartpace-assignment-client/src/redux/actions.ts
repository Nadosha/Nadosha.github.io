import { createAsyncThunk } from '@reduxjs/toolkit'
import { AddNewUserFormI, UserT } from '@Types/DataState.types'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await fetch(`http://44.201.232.63:3001/users`)

        if (!response.ok) {
            throw new Error('Failed to fetch users')
        }

        return await response.json()
    } catch (error: any) {
        throw new Error('Error:', error)
    }
})

export const createUser = createAsyncThunk(
    'users/createUser',
    async (newUserInput: AddNewUserFormI, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://44.201.232.63:3001/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUserInput),
            })
            if (!response.ok) {
                throw new Error('Failed to create flow')
            }

            return response.json()
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

export const updateUser = createAsyncThunk(
    'users/updateUser',
    async ({ user }: { user: UserT }, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://44.201.232.63:3001/users/${user._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })

            if (!response.ok) {
                throw new Error('Failed to update flow')
            }

            return await response.json()
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

export const deleteUser = createAsyncThunk(
    'users/deleteUser',
    async (userId: string, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://44.201.232.63:3001/users/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (!response.ok) {
                throw new Error('Failed to update flow')
            }

            return await response.json()
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)
