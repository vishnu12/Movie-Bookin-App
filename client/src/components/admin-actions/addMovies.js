import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listScreens } from '../../actions/screenActions'

const addMovies = () => {

  const [movie, setMovie] = useState('')
  const [trailerUrl, setTrailerUrl] = useState('')
  const [about, setAbout] = useState('')
  const [actorName, setActorName] = useState('')
  const [actorChar, setActorChar] = useState('')
  const [actressName, setActressName] = useState('')
  const [actressChar, setActressChar] = useState('')
  const [suppActorName, setSuppActorName] = useState('')
  const [suppActorChar, setSuppActorChar] = useState('')
  const [directorName, setDirectorName] = useState('')
  const [producerName, setProducerName] = useState('')
  const [musicDirName, setMusicDirName] = useState('')

  const [screen, setScreen] = useState('')

  const [poster, setPoster] = useState(null)
  const [actorImg, setActorImg] = useState(null)
  const [actressImg, setActressImg] = useState(null)
  const [suppActorImg, setSuppActorImg] = useState(null)
  const [directorImg, setDirectorImg] = useState(null)
  const [producerImg, setProducerImg] = useState(null)
  const [musicDirImg, setMusicDirImg] = useState(null)

  const [path, setPath] = useState('')

  const dispatch = useDispatch()
  const screensList = useSelector(state => state.screensList)
  const { screens, loading, error } = screensList

  useEffect(() => {
    dispatch(listScreens())
  }, [dispatch])

  const uploadHandler = async() => {
    let formData = new FormData()
    formData.append('poster', poster)
    formData.append('actor', actorImg)
    formData.append('actress', actressImg)
    formData.append('suppActor', suppActorImg)
    formData.append('director', directorImg)
    formData.append('producer', producerImg)
    formData.append('musicDir', musicDirImg)

    const config = {
      headers: {
        'Content-type': 'multipart/form-data'
      }
    }

    try {
      const { data } = await axios.post('/upload', formData, config)
       setPath(data)
       window.alert('Files uploaded')

    } catch (error) {
      console.log(error)
    }


  }

  const handleSubmit=async e=>{
    e.preventDefault()

    const movieData = {
      name: movie,
      about: about,
      cast: [
        {
          name: actorName,
          image: path && path[0],
          charactor: actorChar
        },
        {
          name: actressName,
          image: path && path[1],
          charactor: actressChar
        },
        {
          name: suppActorName,
          image: path && path[2],
          charactor: suppActorChar
        },

      ],

      crew:[
        {
          name:directorName,
          image:path && path[3],
          role:'director'
        },
        {
          name:producerName,
          image:path && path[4],
          role:'producer'
        },
        {
          name:musicDirName,
          image:path && path[5],
          role:'music director'
        }
      ],
      trailer:trailerUrl,
      rating:4,
    }

    console.log(movieData);

  }



 

  return (
    <form className='add-movie-form col-md-6 mt-5 mr-auto ml-auto' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>Enter Movie Name</label>
        <input type='text' name='name' onChange={e => setMovie(e.target.value)} />
      </div>

      <div className='form-group'>
        <label>About the movie</label>
        <input type='textarea' name='name' onChange={e => setAbout(e.target.value)} />
      </div>

      <div className='form-group'>
        <label>Trailer</label>
        <input type='text' name='name' onChange={e => setTrailerUrl(e.target.value)} />
      </div>
      <div className='form-group'>
        <label>Enter actor name</label>
        <input type='text' name='actorName' onChange={e => setActorName(e.target.value)} />
      </div>

      <div className='form-group'>
        <label>Enter actor charactor</label>
        <input type='text' name='actorChar' onChange={e => setActorChar(e.target.value)} />
      </div>

      <div className='form-group'>
        <label>Enter actress name</label>
        <input type='text' name='actressName' onChange={e => setActressName(e.target.value)} />
      </div>

      <div className='form-group'>
        <label>Enter actress charactor</label>
        <input type='text' name='actressChar' onChange={e => setActressChar(e.target.value)} />
      </div>

      <div className='form-group'>
        <label>Enter supporting actor name</label>
        <input type='text' name='suppActorName' onChange={e => setSuppActorName(e.target.value)} />
      </div>

      <div className='form-group'>
        <label>Enter supporting actor charactor</label>
        <input type='text' name='suppActorChar' onChange={e => setSuppActorChar(e.target.value)} />
      </div>

      <div className='form-group'>
        <label>Enter directorName name</label>
        <input type='text' name='directorName' onChange={e => setDirectorName(e.target.value)} />
      </div>

      <div className='form-group'>
        <label>Enter producer name</label>
        <input type='text' name='producerName' onChange={e => setProducerName(e.target.value)} />
      </div>

      <div className='form-group'>
        <label>Enter music director name</label>
        <input type='text' name='musicDirName' onChange={e => setMusicDirName(e.target.value)} />
      </div>

      <div className='form-group'>
        <label>Select the screen</label>
        <select name='screen' value={screen} onChange={e => setScreen(e.target.value)}>
          <option value=''>select screen</option>
          {screens && screens.map((scr, ind) => {
            return <option key={ind} value={scr._id}>{scr.name}</option>
          })}
        </select>
      </div>

      <div className='form-group'>
        <label>Choose movie poster</label>
        <input type='file' name='poster' onChange={e => setPoster(e.target.files[0])} />
      </div>

      <div className='form-group'>
        <label>Choose actor pic</label>
        <input type='file' name='actor' onChange={e => setActorImg(e.target.files[0])} />
      </div>

      <div className='form-group'>
        <label>Choose actress pic</label>
        <input type='file' name='actress' onChange={e => setActressImg(e.target.files[0])} />
      </div>

      <div className='form-group'>
        <label>Choose supporting actor pic</label>
        <input type='file' name='suppActor' onChange={e => setSuppActorImg(e.target.files[0])} />
      </div>

      <div className='form-group'>
        <label>Choose director pic</label>
        <input type='file' name='director' onChange={e => setDirectorImg(e.target.files[0])} />
      </div>

      <div className='form-group'>
        <label>Choose producer pic</label>
        <input type='file' name='producer' onChange={e => setProducerImg(e.target.files[0])} />
      </div>

      <div className='form-group'>
        <label>Choose music director pic</label>
        <input type='file' name='musicDir' onChange={e => setMusicDirImg(e.target.files[0])} />
      </div>

      <div className='form-group'>
        <button type='button' className='btn btn-light' onClick={()=>uploadHandler()}>UPLOAD IMAGES</button>
      </div>

      <div className='form-group'>
        <button type='submit' className='btn btn-light'>ADD MOVIE</button>
      </div>
    </form>
  )
}

export default addMovies
