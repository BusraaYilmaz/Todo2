import React from "react";
import FirstAppBar from "./Components/AppBar";
import TodoList from "./Components/TodoList";

class App extends React.Component {
  render() {
    return (
      <div>
        <FirstAppBar />
        <br />
        <TodoList />
      </div>
    );
  }
}

export default App;
