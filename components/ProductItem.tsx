import { memo } from 'react';

interface ProductItemProps {
  product : {
    id: number;
    price: number;
    title: string;
  }
}


// shallow compare -> comparação rasa - compara a igualdade dos elementos 
// {} = {} // false
// igualdade referencial - compara a posicao do objeto em memória.

function ProductItemComponent({ product } : ProductItemProps){
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})