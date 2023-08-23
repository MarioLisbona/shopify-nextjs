import ProductList from "@/components/ProductList";
import { getProductsInCollection } from "@/lib/shopify";
export default function Home({ products }) {
  console.log(products);
  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();
  return {
    props: { products },
  };
}