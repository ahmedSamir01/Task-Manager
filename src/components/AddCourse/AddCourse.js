import React from "react";
import "./AddCourse.css";
import { ContextData } from "../../contexts/Context";

function AddCourse() {
  const context = React.useContext(ContextData);
  const [Course, setCourse] = React.useState("");
  const isEdit = context.isEdit;

  function HandleAdd(e) {
    e.preventDefault(),
      !isEdit
        ? Course.length
          ? (context.setAuth([...context.auth, Course]),
            setCourse(""),
            localStorage.setItem(
              "data",
              JSON.stringify([...context.auth, Course])
            ))
          : alert("empty input")
        : null;
    // localstorage set
  }

  // when click delete All
  function DelAll() {
    !isEdit ? (context.setAuth([]), localStorage.setItem("data", [])) : null;
  }

  return (
    <form className="AddCourse my-5" onSubmit={HandleAdd} className="form">
      <div className="container">
        <input
          className="task-input"
          type="text"
          value={Course}
          placeholder="task"
          onChange={(e) => setCourse(e.target.value)}
        />
        <div className="buttons">
          <button className="btn add-task-btn" type="submit">
            Add task
          </button>
          {context.auth.length > 1 && (
            <button className="btn clear-btn" type="button" onClick={DelAll}>
              Clear
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

export default AddCourse;
