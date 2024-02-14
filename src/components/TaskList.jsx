import { TaskCard } from './TaskCard'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

const TaskList = () => {
    
    const { tasks}  =  useContext(TaskContext);
    
    if (tasks.length === 0) { 
    return (
        <h1 className='text-white text-4xl font-bold text-center'>There is not task to show</h1>
    )
  } else {
    return (
        <div className='grid grid-cols-4 gap-2'>
            {
                tasks.map((task) => {
                    return(
                       <TaskCard key={task.id} task={task}/>
                    )
                })
            }
        </div>
    )
  }
}



export {TaskList}
