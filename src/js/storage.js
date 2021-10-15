/* Обработка сохранения */
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

/* Обработка загрузки */
const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

/* Обработка удаления записи */
const remove = key => {
  try {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
      return true;
    }
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export { save, load, remove };
