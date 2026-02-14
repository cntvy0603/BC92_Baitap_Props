export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="inset-0 z-40 bg-gray-100 bg-opacity-15"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="relative w-full max-w-2xl p-4">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Header */}
            <div className="flex items-center justify-center border-b border-default">
              <h3 className="text-lg font-medium text-heading">
                {product.name}
              </h3>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-60 object-contain"
                />
                <div>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    {product.price}$
                  </p>

                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    {product.description}
                  </p>

                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                    Quantity: {product.quantity}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                onClick={onClose}
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
