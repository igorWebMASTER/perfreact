import styles from '../styles/Home.module.css'
import { useState, FormEvent, useCallback } from 'react'
import { SearchResults } from '../components/SearchResults'

export default function Home() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  async function handleSearch(event: FormEvent) {
    event.preventDefault()

    if(!search.trim()){
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()

    console.log(data)


    setResults(data)
  }

  const addToWishList = useCallback((id : number) => {
      console.log(id)
    }, [])

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch}>
        <input 
            type="text" 
            name="search" 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
        />
        <button type="submit">Buscar</button>
      </form> 

      <SearchResults  
        results={results} 
        onAddToWishList={addToWishList} 
      />
    </div>
  )
}
