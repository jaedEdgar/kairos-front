import urls from "./urls.const";

export const getDailTasks = async () => {
  const response = await fetch(`${urls.Daily.Tasks}`);
  const tasks = await response.json();
  return tasks;
};

export const addNewDailyTask = async (data) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(urls.Tasks, options);
  const task = await response.json();
  return task;
};

export const getHistoryTask = async (idTask) => {
  const response = await fetch(`${urls.Daily.History}/${idTask}`);
  const history = await response.json();
  return history;
};

export const addHistoryDailyTask = async (task, duration) => {
  const options = {
    method: "POST",
    body: JSON.stringify({
      task,
      duration,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(urls.Daily.History, options);
  const history = await response.json();
  return history;
};
