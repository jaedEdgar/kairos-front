const baseUrl = "http://localhost:8000/api";
const urls = {
  Daily: {
    History: `${baseUrl}/daily/history`,
    Tasks: `${baseUrl}/daily/tasks`,
  },
  Notebooks: `${baseUrl}/notebooks`,
  Notebook: `${baseUrl}/notebook`,
  Tasks: `${baseUrl}/tasks`,
  Task: `${baseUrl}/task`,
};

export default urls;
