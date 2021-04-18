import React,{useState,useEffect} from 'react'

const SearchComponent = ({history}) => {

  const [keyword, setKeyword] = useState('')  

  const submit=e=>{
      e.preventDefault()
      if(keyword.trim()){
        history.push(`/search/${keyword}`)
    }else{
        history.push('/')
    }
  }

  return (
    <form className='search-form' onSubmit={submit}>
      <input type='text' placeholder='search for movies' onChange={e=>setKeyword(e.target.value)} />
    </form>
  )
}

export default SearchComponent
