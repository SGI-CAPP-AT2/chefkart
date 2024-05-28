import { HashRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./routes/ProductPage";
import SelectItems from "./routes/SelectItems";
import CommonLayout from "./components/CommonLayout";

function App() {
  return (
    <HashRouter>
      <CommonLayout>
        <Routes>
          <Route path="/prod/:id" element={<ProductPage />} />
          <Route path="/" element={<SelectItems />} />
        </Routes>
      </CommonLayout>
    </HashRouter>
  );
}

export default App;
