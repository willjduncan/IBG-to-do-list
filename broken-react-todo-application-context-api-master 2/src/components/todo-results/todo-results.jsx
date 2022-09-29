import * as React from 'react';
// Add Todos Context
import { TodosContext } from '../../todo-context';
import './todo-results.scss';

export const TodoResults = () => {
  // Add useContext to access todos list and a state variable to keep track of the number of completed tasks
  const { todos } = React.useContext(TodosContext);
  const [doneTasks, setDoneTasks] = React.useState(0);

  // Rather than use calculateChecked, I decided to implement a useEffect hook 
  // to capture changes in the number of completed tasks
  // by cycling through and counting the tasks on any update to the Todos value
  React.useEffect(() => {
    const fetchTasks = () => {
      let completedTasks = 0;
      for (let i=0; i<todos.length; i++) {
        if (todos[i].checked === true) {
          completedTasks ++;
        }
      }
      setDoneTasks(completedTasks);
    }
    fetchTasks();
  }, [todos]);

  return (
    <div className="todo-results">
      Done:
      {/* {calculateChecked()} */}
      {doneTasks}
    </div>
  );
};
