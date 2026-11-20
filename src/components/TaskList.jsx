import TaskItem from "./TaskItem"

export default function TaskList({tasks, onDeleteTask, onUpdate, onToggleDone}) {
  return (
    <ul className="task-list-container">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          text={task.text} 
          id={task.id} 
          done={task.done}
          onDeleteTask={onDeleteTask}
          onUpdate={onUpdate}
          onToggleDone={onToggleDone}/>
      ))}
    </ul>
  )
}