import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-form.scss';

export const TodoForm = () => {
  const { setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState('');

  const handleAddTodo = () => {
    // push the new task, unchecked, to the end of the existing todos array
    //id is set to increment from the value of the id from the last element
    //that way, if an item is deleted, ids will not accidentally recur.
    setTodos(todos => [...todos, {id: todos[todos.length-1].id + 1, label: task, checked: false}]);
    emptyField();
  };

  // empty input upon submission
  const emptyField = () => {
    setTask("");
  }

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
