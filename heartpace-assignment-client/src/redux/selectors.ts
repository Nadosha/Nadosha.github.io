import { RootState } from '@Redux/store'

export const selectFetchUsers = (state: RootState) => state.data.users
