import { useEffect } from "react";

import { ConvertForm } from "./components/ConverForm";
import { Header } from "./components/Header";
import { Toaster } from "./components/Toaster";

import { allCurrency } from "./store/slice/thunk";
import { useAppDispatch } from "./store/store";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(allCurrency());
  }, []);

  return (
    <div>
      <Toaster />
      <Header />
      <ConvertForm />
    </div>
  );
}

export default App;
