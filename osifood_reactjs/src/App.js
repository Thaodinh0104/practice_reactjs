import "./App.css";
import { Layout } from "./components/Layouts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/base.scss";
import { AppContextProvider } from "./context/AppContextProvider";
import { store } from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/trang-chu" element={<Layout />} />
              <Route path="/gioi-thieu" element={<Layout />} />
              <Route path="/blogs" element={<Layout />} />
              <Route path="/san-pham" element={<Layout />} />
              <Route path="/lien-he" element={<Layout />} />
              <Route path="/tuyen-dung" element={<Layout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </Provider>
  );
}

export default App;
