import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TaskList from "../TaskManagement/TaskList";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const token = localStorage.getItem("token");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // const fetchTasks = async (e) => {
    const fetchTasks = async () => {
      if (user) {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5000/api/tasks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setTasks(data);
      }
    };

    if (token) {
      fetchTasks();
    } else {
      navigate("/");
    }
    fetchTasks();
  }, [user, navigate, token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleEditTask = (taskId) => {
    //logic to edit the task

    const handleDeleteTask = (taskId) => {
      // logic to delete the task using an API call
    };

    return (
      <>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogout}
              style={{ marginBottom: 20 }}
            >
              Logout
            </Button>
            ;
          </Grid>
          <Grid item xs={12} md={9}>
            <h2>Task Management</h2>
            <TaskList
              tasks={tasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          </Grid>
        </Grid>
      </>
    );
  };
};

export default Dashboard;
