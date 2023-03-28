import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addProjectAction } from '../store/todo/taskActions';

const AddProject = () => {
    const dispatch = useDispatch()

    const [projectName, setProjectName] = useState({
        project: "project1"
    })
    return (<>
        <div className="container ">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card mt-5">
                        <div class="card-header">Add Project</div>
                        <div class="card-body">
                            <label >Add Project</label>
                            <input type="text" value={projectName.project} onChange={e => setProjectName({ ...projectName, project: e.target.value })} className='form-control' />
                        </div>
                        <button type="button" class="btn btn-primary" onClick={e => dispatch(addProjectAction(projectName))} >Add Project</button>
                    </div>
                </div>
            </div>
        </div>


    </>
    )
}

export default AddProject