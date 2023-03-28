import { createSlice } from "@reduxjs/toolkit"
import { addProjectAction, addTodoAction, getAllTodoAction, getAllTProjectsAction, updateTodoAction } from "./taskActions"


const taskSlice = createSlice({
    name: "todos",
    initialState: { todos: [], projects: [] },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(addTodoAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(addTodoAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.todoAdded = true
            })
            .addCase(addTodoAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(addProjectAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(addProjectAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.projectAdded = true
            })
            .addCase(addProjectAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(getAllTodoAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getAllTodoAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.todos = payload
            })
            .addCase(getAllTodoAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(getAllTProjectsAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getAllTProjectsAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.projects = payload
            })
            .addCase(getAllTProjectsAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(updateTodoAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(updateTodoAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.todoupdated = !state.todoupdated
            })
            .addCase(updateTodoAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })




    }

})
export default taskSlice.reducer
