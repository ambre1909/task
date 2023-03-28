import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction, getAllTodoAction, getAllTProjectsAction } from '../store/todo/taskActions';

const AddTask = () => {
    const dispatch = useDispatch()
    const { todos, projects } = useSelector(state => state.todos)
    useEffect(() => {
        dispatch(getAllTodoAction())
    }, [])
    useEffect(() => {
        dispatch(getAllTProjectsAction())
    }, [])
    const [show, setShow] = useState(false)
    const [task, setTask] = useState({
        projectId: "",
        task: "search component",
        assignTime: "",
        completedTime: "",
        desc: "lorem ipsum",
        completed: false,

    })
    return <>
        {/* <h1>{JSON.stringify(task)}</h1> */}
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <label htmlFor="">Select Project</label>
                    <select class="form-select"
                        value={task.projectId}
                        onChange={e => { setTask({ ...task, projectId: e.target.value }), setShow(true) }}
                    >
                        <option selected>Open this select menu</option>
                        {
                            projects.map(item =>
                                <option value={item.id}>{item.project}</option>
                            )
                        }
                    </select>


                    {
                        show && <>

                            <div class="card mt-5">
                                <div class="card-header">Todo</div>
                                <div class="card-body">

                                    <div>
                                        <label for="task" class="form-label">First task</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="task"
                                            placeholder="Enter Your task"
                                            value={task.task}
                                            onChange={e => setTask({ ...task, task: e.target.value })}
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please add task.</div>
                                    </div>

                                    <div>
                                        <label for="task" class="form-label">Time </label>
                                        <input
                                            type="time"
                                            class="form-control"
                                            id="task"
                                            placeholder="Enter Your task"
                                            value={task.time}
                                            onChange={e => setTask({ ...task, assignTime: Date.now() })}
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please add task.</div>
                                    </div>

                                    <div class="mt-2">
                                        <label for="desc" class="form-label">Description</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="desc"
                                            placeholder="Enter task description"
                                            value={task.desc}
                                            onChange={e => setTask({ ...task, desc: e.target.value })}
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please add description</div>
                                    </div>

                                    <button onClick={e => dispatch(addTodoAction(task))} type="button" class="btn btn-primary w-100 mt-3">
                                        Add Todo
                                    </button>
                                </div>
                            </div>

                        </>
                    }





                </div>
            </div>
        </div>


    </>
}

export default AddTask