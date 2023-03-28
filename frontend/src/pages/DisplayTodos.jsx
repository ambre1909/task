import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { getAllTodoAction, updateTodoAction } from '../store/todo/taskActions';
// const { differenceInMilliseconds, differenceInSeconds, differenceInMinutes } = require('date-fns');
import { intervalToDuration } from 'date-fns'

const DisplayTodos = () => {
    const dispatch = useDispatch()
    const { todos, projects, todoupdated } = useSelector(state => state.todos)
    const [task, setTask] = useState({
        projectId: "",
        task: "search component",
        assignTime: "",
        completedTime: "",
        desc: "lorem ipsum",
        completed: false,

    })
    useEffect(() => {
        dispatch(getAllTodoAction())
    }, [todoupdated])




    return <>
        {/* <h1>{JSON.stringify()}</h1> */}
        <div className="container">
            <div className="row">
                {
                    todos.map(item =>
                        <div className="col-sm-4 mt-4">
                            <div class="card">
                                <div class="card-header">Task : {item.task}
                                    {item.completed == true && <div class="alert alert-primary mt-2">
                                        <div> Task Completed</div>

                                        <strong>
                                            Hour {

                                                intervalToDuration({
                                                    start: new Date(item.assignTime), end: new Date(item.completedTime)
                                                }).hours

                                                // .mi
                                            }
                                        </strong>
                                        <br />

                                        Minutes {
                                            intervalToDuration({
                                                start: new Date(item.assignTime), end: new Date(item.completedTime)
                                            }).minutes
                                        }
                                        <br />
                                        Seconds {
                                            intervalToDuration({
                                                start: new Date(item.assignTime), end: new Date(item.completedTime)
                                            }).seconds
                                        }

                                    </div>}
                                </div>
                                <div class="card-body">
                                    <div> <span>desc :</span>{item.desc}</div>
                                    <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            onChange={e => dispatch(updateTodoAction({
                                                id: item.id,
                                                completed: e.target.checked,
                                                completedTime: Date.now()
                                            }))}
                                            checked={item.completed}
                                            id="id" />
                                        <label class="form-check-label" for="id">
                                            Completed
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>

    </>
}

export default DisplayTodos