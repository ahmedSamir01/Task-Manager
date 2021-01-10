import React from "react";
import "./UpdateCourse.css";
import { ContextData } from "../../contexts/Context";

function UpdateCourse() {
  const context = React.useContext(ContextData);
  const [Tranzit, setTranzit] = React.useState();
  const [tempIndex, setTempIndex] = React.useState("");

  const courses = context.auth;
  const isEdit = context.isEdit;

  // when click delete cou
  function handleDel(index) {
    let newCourses;
    !isEdit
      ? (courses.splice(index, 1),
        (newCourses = [...courses]),
        context.setAuth(newCourses),
        localStorage.setItem("data", JSON.stringify(courses)))
      : null;
  }

  // when click edit
  function handleEdit(index) {
    !isEdit ? (context.setIsEdit(!isEdit), setTempIndex(index)) : null;
  }
  // handle Update
  function handleUpdate(e, index) {
    e.preventDefault();

    Tranzit
      ? (context.setIsEdit(!isEdit),
        courses.forEach((element, indexJun) => {
          if (indexJun === index) {
            courses[index] = Tranzit;
          }
        }),
        context.setAuth(courses),
        setTranzit(""))
      : context.setIsEdit(!isEdit);
    setTempIndex("");
    localStorage.setItem("data", JSON.stringify(courses));
  }

  function renderUpdateForm(course, index) {
    return (
      <form key={index} onSubmit={(e) => handleUpdate(e, index)}>
        <input
          className="form-control w-98"
          defaultValue={course}
          autoFocus={"autoFocus"}
          type="text"
          onChange={(e) => {
            setTranzit(e.target.value);
          }}
        />
        <button type="submit" className="btn-edit task-btn cus">
          <i className="fas fa-pen"></i>
        </button>
      </form>
    );
  }

  function renderCourse(course, index) {
    return (
      <li className="list-item" key={index}>
        <span className="form-control">{course}</span>
        <div className="icons">
          <button
            type="button"
            className="btn-edit task-btn"
            onClick={() => handleEdit(index)}
          >
            <i className="fas fa-pen"></i>
          </button>
          <button
            type="button"
            className="btn-delete task-btn"
            onClick={() => handleDel(index)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
    );
  }

  // loop on auth array
  const theCourses = courses.map((course, index) => {
    return isEdit && tempIndex === index
      ? renderUpdateForm(course, index)
      : renderCourse(course, index);
  });

  return context.auth.length ? (
    <div className="container">
      <ul className="list p-0">{theCourses}</ul>
    </div>
  ) : (
    <div className="no-tasks">no items to show</div>
  );
}

export default UpdateCourse;
