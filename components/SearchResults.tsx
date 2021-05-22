import { ProductItem } from "./ProductItem"


interface SearchResultsProps {
  results : Array<{
    id: number;
    price: number;
    title: string;
  }>
}

export function SearchResults({ results }: SearchResultsProps){

  return (
    <div>
      {results.map(product => {
        return (
          <ProductItem product={product} />
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

*/
