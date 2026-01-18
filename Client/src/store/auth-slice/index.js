const { createSlice } = '@reduxjs/toolkit'

const initialState = {

        isauthenticated: false,
        isLoadung: false,
        user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser:(state, action) => {

        }
    }
})

export const { setUser } = authSlice.actions
export default authSlice.reducer
