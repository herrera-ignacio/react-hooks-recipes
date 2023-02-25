export const TASK_ADDED = 'TASK_ADDED';
export const TASK_CHANGED = 'TASK_CHANGED';
export const TASK_DELETED = 'TASK_DELETED'

export function tasksReducer(tasks, action) {
  switch(action.type) {
      case TASK_ADDED: {
        return [
          ...tasks,
          {
            id: action.task.id,
            text: action.task.text,
            done: false,
          }
        ];
      }
      case TASK_CHANGED: {
        return tasks.map(t => {
          return t.id === action.task.id
            ? action.task
            : t;
        });
      }
      case TASK_DELETED: {
        return tasks.filter(t => t.id !== action.taskId)
      }
      default: {
        throw new Error('Unknown action ' + action.type);
      }
  }
}
