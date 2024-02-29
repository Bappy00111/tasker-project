import React, { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskLisk from "./TaskLisk";

const TaskBord = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Leaarn React Native",
    description: "i want loren react and web developerment",
    tags: ["web", "recat", "js"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  //   console.log(tasks)
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        {/* <!-- Search Box --> */}
        <SearchTask></SearchTask>
        {/* <!-- Search Box Ends --> */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {/* task action  */}
          <TaskAction></TaskAction>
          <div className="overflow-auto">
            {/* task list  */}
            <TaskLisk tasks={tasks}></TaskLisk>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskBord;
