import { HashRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./routes/ProductPage";
import SelectItems from "./routes/SelectItems";
import IndexPage from "./routes/IndexPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/page/prods/" element={<ProductPage />} />
        <Route path="/page/item/" element={<SelectItems />} />
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
