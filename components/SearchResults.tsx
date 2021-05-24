import { ProductItem } from "./ProductItem"
import { useMemo } from 'react'

interface SearchResultsProps {
  results : Array<{
    id: number;
    price: number;
    title: string;
  }>
  onAddToWishList: (id: number) => void;
}


export function SearchResults({ results , onAddToWishList}: SearchResultsProps){
  const totalPrice = useMemo(() => {
    return results.reduce((total, produto) => {
      return total + produto.price
    }, 0)
  }, [results])


  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => {
        return (
          <ProductItem 
              key={product.id} 
              product={product}  
              onAddToWishList={onAddToWishList} 
          />
        )
      })}
    </div>
  )
}


/* 
  Onde utilizar o memo?


  1. Pure Components - abstrair parte visual da aplicação. 
  dividir o código, não exatamente regra de negócio

  2. Renders Too Often - componentes que renderizam demais.

  3. Re-renders with same props 

  4. Medium and Huge Components


  Não adicionar otimização prematura.

  Use Memo:
  1. Cálculos pesados.
  2. Igualdade Referencial (quando a gente repassa aquela informação a um componente filho)

  Use Callback:
    utilizamos para memorizar uma função 
*/
