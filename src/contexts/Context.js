import React from "react";

export const ContextData = React.createContext();

export function ContextProvider(props) {
  const [auth, setAuth] = React.useState([]);
  const [isEdit, setIsEdit] = React.useState(false);

  // localStorage getItem
  React.useEffect(() => {
    const DataStore = localStorage.getItem("data");
    const storedNames = DataStore ? JSON.parse(DataStore) : [];
    setAuth(storedNames);
  }, []);

  return (
    <ContextData.Provider value={{ auth, setAuth, isEdit, setIsEdit }}>
      {props.children}
    </ContextData.Provider>
  );
}
