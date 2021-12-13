import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import EditTodo from "./components/EditTodo";

function App() {
  return (
    <>
      {/* <EditTodo /> */}
      <Router>
        <TodoForm />
        <TodoItem />
        <Switch>
          {/* <Route exact path="/" component={TodoForm} />
          <Route path="/view-todos" component={TodoItem} /> */}
          <Route path="/todos/:todoId" component={EditTodo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
