import Dashboard from "./Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import {courses} from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
function Kanbas() {
  const [dbCourses, setCourses] = useState<any[]>(courses);
  const [course, setCourse] = useState({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...dbCourses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(dbCourses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      dbCourses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation />
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard
              courses={dbCourses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
          } />
          <Route path="Courses/:courseId/*" element={<Courses courses={dbCourses} />} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;
