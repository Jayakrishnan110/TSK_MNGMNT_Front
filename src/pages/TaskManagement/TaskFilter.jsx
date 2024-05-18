import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const TaskFilter = ({ onFilter }) => {
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('all');
  const [priority, setPriority] = useState('all');
  const [status, setStatus] = useState('all');

  const handleFilter = () => {
    const filters = { searchText, category, priority, status };
    onFilter(filters);
  };

  return (
    <div>
      <TextField
        label="Search Tasks"
        variant="outlined"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <FormControl fullWidth>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="all">All</MenuItem>
          {/* Add more options based on your category management */}
          <MenuItem value="work">Work</MenuItem>
          <MenuItem value="personal">Personal</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="priority-select-label">Priority</InputLabel>
        <Select
          labelId="priority-select-label"
          id="priority-select"
          value={priority}
          label="Priority"
          onChange={(e) => setPriority(e.target.value)}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="status-select-label">Status</InputLabel>
        <Select
          labelId="status-select-label"
          id="status-select"
          value={status}
          label="Status"
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="in-progress">In Progress</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleFilter}>
        Filter Tasks
      </Button>
    </div>
  );
};

export default TaskFilter;