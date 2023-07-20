import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GifSpace from './GifSpace'
import './App.css'



function App() {
  // const [searchGif, setSearchGif] = useState('ocean')
  const [gif,setGif] = useState({setGif: `https://api.giphy.com/v1/gifs/random?api_key=25cPJHWW1QdDuL2xTlwSpm0tSN5OLLBa`});

  const giphyUrl = `https://api.giphy.com/v1/gifs/random?api_key=25cPJHWW1QdDuL2xTlwSpm0tSN5OLLBa`

  function getGif(gifgif){
    setGif(gifgif)
  }

  async function refreshGif(){
    try {
      const apiResponse = await fetch(giphyUrl);
      const data = await apiResponse.json();
      console.log(data, "Refreshed! Now that's the JSON")
      setGif(data);
      
    } catch (err) {
      console.log(err,"Error calling of Referesh Gif")
      
    }
  }


  useEffect(() => {


    async function getGifInfo(){
      try {
        const apiResponse = await fetch(giphyUrl);
        const data = await apiResponse.json();
        console.log(data, "<-- We parsed this JSON")
        setGif(data);
  
        
      } catch (err) {
        console.log(err,'Error calling the API')
        
      }
    }

    getGifInfo();


  }, [])


  return (
    <>
    <GifSpace gif={gif}/>
    <button onClick={refreshGif} > Random!</button>
    </>
  )
}

export default App
