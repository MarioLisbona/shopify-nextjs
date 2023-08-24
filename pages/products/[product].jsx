import ProductPageContent from "@/components/ProductPageContent";
import { getAllproducts } from "@/lib/shopify";
import { getProduct } from "@/lib/shopify";

export default function ProductPage({ product }) {
  return <ProductPageContent product={product} />;
}

export async function getStaticPaths() {
  const products = await getAllproducts();

  const paths = products.map((item) => {
    const product = String(item.node.handle);

    return {
      params: { product },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);

  return {
    props: {
      product,
    },
  };
}
