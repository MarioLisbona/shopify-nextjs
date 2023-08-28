import ProductCard from "./ProductCard";

const RecommendedList = ({ products, current }) => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
          Recommended Products
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 ld:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 px-14">
        {products.map((product) =>
          product.node.id === current ? null : (
            <ProductCard key={product.node.id} product={product} />
          )
        )}
      </div>
    </div>
  );
};

export default RecommendedList;