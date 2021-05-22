interface ProductItemProps {
  product : {
    id: number;
    price: number;
    title: string;
  }
}

export function ProductItem({product}){
  return (
    <div key={product.id}>
      {product.title} - <strong>{product.price}</strong>
    </div>
  )
}