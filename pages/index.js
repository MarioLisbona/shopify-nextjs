import { getProductsInCollection } from "@/lib/shopify";
export default function Home({ products }) {
  console.log(products);
  return (
    <div className="text-3xl text-red-400">
      This is a shopify and next js application
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();
  return {
    props: { products },
  };
}
