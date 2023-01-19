import React, { useState } from 'react'
import { TASK_API } from '../utils/constants';

const FormTask = ({ user, update }) => {
    const [newTask, setNewTask] = useState();
    const [error, setError] = useState();

    const guardarTarea = (e) => {
        e.preventDefault()
        setError(null)
        const body = {
            task: newTask,
            user: user
        }
        fetch(TASK_API, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json()).then(res => {
            update()
            setNewTask('')
        }).catch(err => {
            setError(err.message || 'No se pudo Agregar la tarea, intenta de nuevo')
        });
    }

    return (
        <form className='mt-3 col-12 d-flex flex-column align-items-center' onSubmit={guardarTarea}>
            <div class="input-group mb-3">
                <input value={ newTask} onChange={e => setNewTask(e.target.value)} required className='form-control col-8 fs-5 text-center' type="text" placeholder='Add New Task' />
                <button type='submit' className='btn btn-outline-light fs-3 align-items-center justify-content-center d-flex'>
                    <i className="bi bi-send-fill"></i>
                </button>
            </div>
            {error ? (
                <small className='text-danger fw-bold col-12 text-center fs-5'> <i class="bi bi-x-octagon"> {error}</i></small>
            ) : null}
        </form>
    )
}

export default FormTask