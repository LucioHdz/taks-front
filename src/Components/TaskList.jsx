import React from 'react'

const TaskList = ({ tasks, update, deleteTaks}) => {

    return (
        <>
            <ul className='col-12 d-flex flex-wrap justify-content-center'>
                
                {tasks.map((task, id) => (
                    <li key={id} style={{ listStyle: 'none', minWidth: '300px' }} className='text-light fs-1 border border-light mb-4 me-4  d-flex justify-content-center align-items-center'>
                        {task.status === 1 ? (
                            <button className='btn fs-1 text-light' title='Finalizar Tarea' onClick={() => update(task.task_id)}>
                                <i class="bi bi-check-square"></i>
                            </button>
                        ) : (
                            <button className='btn fs-1 text-danger' title='Eliminar Tarea' onClick={() => deleteTaks(task.task_id)}>
                                <i class="bi bi-trash2-fill"></i>
                            </button>
                        )}
                        <p className={`fs-1 mt-3 me-1 ${task.status === 0 ? 'text-danger text-decoration-line-through' : ''}`}>{task.task}</p>
                    </li>
                ))}

            </ul>
        </>

    )
}

export default TaskList