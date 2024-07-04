import CreateTaskForm from "@/components/shared/CreateTaskForm";
import TasksContainer from "@/components/shared/TasksContainer";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <CreateTaskForm />
      <TasksContainer />
    </div>
  );
};

export default DashboardPage;
