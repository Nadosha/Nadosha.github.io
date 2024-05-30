import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await fetch(`http://localhost:3001/users`)

        if (!response.ok) {
            throw new Error('Failed to fetch users')
        }
        const res = await response.json()

        return res
    } catch (error: any) {
        console.log('Error', error)
    }
})

export const updateUsers = createAsyncThunk(
    'users/updateUsers',
    async (
        { flowId, newValues }: { flowId: string; newValues: { name: string; workspace: string } },
        { rejectWithValue }
    ) => {
        try {
            const response = await fetch(`http://localhost:3001/users/${flowId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newValues),
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

export const createUser = createAsyncThunk(
    'users/createUser',
    async (classInput: { name: string; workspace: string }, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:3001/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(classInput),
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
