import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Take a Shower",
    "Walk the dog",
  ]);
  const [newTask, setNewTask] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleInputChange(e) {
    setNewTask((n) => e.target.value);
  }

  function hideErrorMessage() {
    document.getElementById("error-message").hidePopover();
    setErrorMessage("");
  }

  function showErrorMessage(error) {
    setErrorMessage((e) => error);
    document.getElementById("error-message").showPopover();
  }

  function addTask() {
    if (newTask.trim() == "") {
      showErrorMessage("You cannot add an empty task");
      return;
    }

    setTasks((t) => [...t, newTask]);
    setNewTask("");
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks((t) => updatedTasks);
  }

  function moveTaskUp(index) {
    if (index == 0) {
      showErrorMessage("This task cannot be moved up");
      return;
    }

    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] = [
      updatedTasks[index - 1],
      updatedTasks[index],
    ];

    setTasks((t) => updatedTasks);
  }

  function moveTaskDown(index) {
    if (index == tasks.length - 1) {
      showErrorMessage("This task cannot be moved down");
      return;
    }

    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index + 1]] = [
      updatedTasks[index + 1],
      updatedTasks[index],
    ];

    setTasks((t) => updatedTasks);
  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>
      <div>
        <input
          onChange={handleInputChange}
          value={newTask}
          placeholder="Enter a task..."
          type="text"
        />
        <button onClick={addTask} className="add-button">
          Add
        </button>

        <span id="error-message" popover="manual" className="error-message">
          {errorMessage} <br></br>
          <button className="closeErrorButton" onClick={hideErrorMessage}>
            Okay
          </button>
        </span>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              ☝️
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
