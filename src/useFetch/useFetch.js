import { useEffect, useState } from "react"



const useFetch = (url) => {
    const [datos, setDatos] = useState()
    
    useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data => setDatos(data))
    }, [])

    return datos
    
  
}

export default useFetch