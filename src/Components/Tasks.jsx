import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { TASK_API } from '../utils/constants'
import FormTask from './FormTask'
import TaskList from './TaskList'

const Tasks = ({ user }) => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    const read = async () => {
        try {
            const response = await fetch(`${TASK_API}/${user}`);
            const data = await response.json();
            if (data.message) {
                return;
            }
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    }


    useEffect(() => {
        setLoading(true)
        read();
    }, [])



    const update = async (task_id) => {
        setLoading(true)
        try {
            const response = await fetch(`${TASK_API}/${task_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                }
            });
            const data = await response.json();
            read();
        } catch (error) {
            console.log(error);
        }
    }


    const deleteTask = async (task_id) => {
        setLoading(true)
        try {
            const response = await fetch(`${TASK_API}/${task_id}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            if (data.message) {
                console.log(data.message);
            } else {
                read();
            }
        } catch (error) {
            console.log(error);
        }
    }





    return (
        <>
            <FormTask user={user} update={read} />
            <div className='d-flex justify-content-center col-12 mt-4 mb-4'>
                {loading ? (<div class="spinner-border text-light d-flex justify-content-center col-12" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>) : null}
            </div>
            <TaskList tasks={tasks} update={update} deleteTaks={deleteTask} loading={loading} />
        </>
    )
}

export default Tasks