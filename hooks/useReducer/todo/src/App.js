import { useReducer } from 'react';
import { TASK_ADDED, TASK_CHANGED, TASK_DELETED, tasksReducer } from './tasksReducer';
import AddTask from './AddTask';
import TaskList from './TaskList';

const initialTasks = [
  {id: 0, text: 'Study maths', done: true},
  {id: 1, text: 'Study networking', done: false},
  {id: 2, text: 'Study algorithms', done: false},
];

let nextId = initialTasks.length;

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const handleOnAddTask = (text) => {
    dispatch({
      type: TASK_ADDED,
      task: {
        id: nextId++,
        text,
      },
    });
  }

  const handleOnChangeTask = (task) => {
    dispatch({
      type: TASK_CHANGED,
      task,
    });
  }

  const handleOnDeleteTask = (taskId) => {
    dispatch({
      type: TASK_DELETED,
      taskId,
    });
  }

  return (
    <div className="App">
      <h1>Task List</h1>
      <AddTask onAddTask={handleOnAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleOnChangeTask}
        onDeleteTask={handleOnDeleteTask}
      />
    </div>
  );
}

export default App;
