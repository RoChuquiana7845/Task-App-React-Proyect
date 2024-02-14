import PropTypes from 'prop-types'
import { createContext } from 'react'
import { useState, useEffect } from 'react'
import { tasks as data} from '../data/task.js'

const TaskContext = createContext()

const TaskContextProvider = (props) => {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data)
  }, [])

  function createTask(task) { 
    setTasks([
      ...tasks, {
        title: task.title,
        id: tasks.length, 
        description: task.description,
      }
    ])
  }

  function deleteTask(idTask) { 
    setTasks(tasks.filter(task => task.id !== idTask));
  }

  return (
    <TaskContext.Provider value={{
      tasks, 
      createTask, 
      deleteTask,
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}

TaskContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export {
  TaskContextProvider,
  TaskContext
}
