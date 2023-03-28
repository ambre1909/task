import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import api from "../api"

export const addTodoAction = createAsyncThunk("todo/add", async todoData => {
    try {
        const { data } = await api.post("/todos", todoData)
        return data
    } catch (error) {
        return error.message
    }

})

export const addProjectAction = createAsyncThunk("project/add", async projectData => {
    try {
        const { data } = await api.post("/project", projectData)
        return data
    } catch (error) {
        return error.message
    }

})

export const getAllTodoAction = createAsyncThunk("todo/get", async todoData => {
    try {
        const { data } = await api.get("/todos")
        return data
    } catch (error) {
        return error.message
    }

})

export const updateTodoAction = createAsyncThunk("todo/update", async ({ id, completed, completedTime }) => {
    console.log(id, completed, completedTime)
    try {
        const { data } = await api.patch(`/todos/${id}`, { completed, completedTime })
        return data
    } catch (error) {
        return error.message
    }

})
export const getAllTProjectsAction = createAsyncThunk("project/get", async e => {
    try {
        const { data } = await api.get("/project")
        return data
    } catch (error) {
        return error.message
    }

})


