import urls from "./urls.const";

export const getNoteBooks = async () => {
  const response = await fetch(urls.Notebooks);
  const notebooks = await response.json();
  return notebooks;
};

export const saveNotebook = async (name) => {
  const options = {
    method: "POST",
    body: JSON.stringify({ name }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(urls.Notebooks, options);
  let resultOnSave = {};

  if (response.status === 201) {
    resultOnSave = await response.json();
  } else {
    throw new Error("error nombre duplicado");
  }

  return resultOnSave;
};
