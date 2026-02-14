
import ProductItem from "./product-item";

export default function ProductList(props) {
const renderListShoes = () => {
    const{products, onViewDetail} = props;
    return products.map((item) => {
        return <ProductItem key={item.id} product={item} onViewDetail={onViewDetail} />
    })
}
return (
     <div className="grid grid-cols-3 gap-4">
        {renderListShoes()}
    </div>
)
}





