
export default function ProductItem(props) {
  const { product, onViewDetail } = props;

  return (
    <div className="bg-white border border-gray-200 p-5 text-center hover:shadow-lg transition">
  <img src={product.image} className="h-44 w-full object-contain mb-4" />
  <h3 className="text-sm font-medium">{product.name}</h3>
  <p className="font-bold my-2">{product.price} $</p>
    <button onClick={() => onViewDetail(product)} className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
        Xem chi tiết
      </button>
    </div>
  );
}

