import { createSlice } from '@reduxjs/toolkit'
import { initialStateT } from '@Types/DataState.types'
import { validateJson } from '@Utils/validateJson'
import { createUser, fetchUsers, updateUsers } from '@Redux/actions'

export const initialState: initialStateT = {
    users: [],
    activeUser: {},
    loading: false,
    error: undefined,
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload

                if (action.payload.length > 0)
                    localStorage.setItem('cachedUsers', JSON.stringify(action.payload))
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false
                const string = localStorage.getItem('cachedUsers')
                state.users = validateJson(string)
                state.error = action.error.message
            })

            .addCase(updateUsers.fulfilled, (state, action) => {
                state.loading = false
                state.error = undefined

                state.activeUser = action.payload
            })

            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false
                state.error = undefined
                state.users.push(action.payload)
                state.activeUser = action.payload
            })
    },
})

export default dataSlice.reducer
