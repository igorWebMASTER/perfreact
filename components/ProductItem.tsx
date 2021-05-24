import { memo } from 'react';

interface ProductItemProps {
  product : {
    id: number;
    price: number;
    title: string;
  }
  onAddToWishList: (id: number) => void;
}


// shallow compare -> comparação rasa - compara a igualdade dos elementos 
// {} = {} // false
// igualdade referencial - compara a posicao do objeto em memória.

function ProductItemComponent({ product , onAddToWishList } : ProductItemProps){
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button onClick={() => onAddToWishList(product.id)}> Add To Wishlist</button>
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})