import { HashRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./routes/ProductPage";
import SelectItems from "./routes/SelectItems";
import CommonLayout from "./components/CommonLayout";

function App() {
  return (
    <HashRouter>
      <CommonLayout>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/page/item/" element={<SelectItems />} />
        </Routes>
      </CommonLayout>
    </HashRouter>
  );
}

export default App;
