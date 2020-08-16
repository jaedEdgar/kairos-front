import urls from "./urls.const";

export const addNewTask = async (notebookId, taskName) => {
  const options = {
    method: "POST",
    body: JSON.stringify({
      notebook: notebookId,
      name: taskName,
      description: "",
      status: 1,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(urls.Tasks, options);
  const task = await response.json();
  return task;
};

export const getTasks = async (notebookId) => {
  const response = await fetch(`${urls.Tasks}?notebook=${notebookId}`);
  const tasks = await response.json();
  return tasks;
};

export const toggleCheckTask = async (taskId, status) => {
  const options = {
    method: "PATCH",
    body: JSON.stringify({ status }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${urls.Task}/${taskId}`, options);
  const task = await response.json();
  return task;
};

export const updateNameTask = async ({ id, name }) => {
  const options = {
    method: "PATCH",
    body: JSON.stringify({
      name,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${urls.Task}/${id}`, options);
  const task = await response.json();
  return task;
};

export const deleteTask = async (id) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${urls.Task}/${id}`, options);
  const task = await response.json();
  return task;
};
