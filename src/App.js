import './App.css';
import TodoInput from './Component/TodoInput';
import TodoList from './Component/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
