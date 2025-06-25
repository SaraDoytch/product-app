// פונקציות עזר לטעינה ושמירה של המצב ב-localStorage

export const loadState = (): any | undefined => {
  try {
    const serializedState = localStorage.getItem('products');
    if (serializedState === null) {
      return undefined; // אם אין נתונים, מחזיר undefined
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Failed to load state from localStorage", err);
    return undefined;
  }
};

export const saveState = (state: any): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('products', serializedState);
  } catch (err) {
    console.error("Failed to save state to localStorage", err);
  }
};
