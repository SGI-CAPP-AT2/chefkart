import { useTitle } from "../context/title.context";

const ProductPage = () => {
  const setTitle = useTitle();
  setTitle("Products Page");
  return <div>Product Page</div>;
};
export default ProductPage;
