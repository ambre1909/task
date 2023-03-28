import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link active" to="/">Home</Link>
                        <Link class="nav-link" to="/add-task">Add Task</Link>
                        <Link class="nav-link" to="/add-project">Add Project</Link>
                        <Link class="nav-link" to="/todos">Todos</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar