import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Row.css'

function Row({ title, fetchUrl }) {
    const [allMovies, setAllmovies] = useState([])
    // console.log(fetchUrl);
    const base_url = "https://image.tmdb.org/t/p/original/";


    const fetchData = async () => {
        const { data } = await instance.get(fetchUrl)
        // console.log(response);
        setAllmovies(data.results)
    }
    // console.log(allMovies);
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className='container mt-5'>
            <div>
        <h1 style={{ fontSize: '2rem' }}>New Movies</h1>
        <div className='d-flex align-items-center'>
          <h3><a style={{ fontSize: '1.7rem', fontWeight: '600', color: 'white', borderLeft: '4px solid orange', marginRight: '10px', paddingLeft: '15px', textDecoration: 'none' }} href="">{title}</a></h3>
          <svg style={{ color: 'orange' }} width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-title-link ipc-title-link-chevron" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path></svg>
        </div>
        <p style={{ fontSize: '1rem' }}>TV shows and movies just for you </p>
      </div>
            <div className='all_movies'>
                {
                    allMovies.map(item => (
                        <img className='movie-large movie' src={`${base_url}/${item.poster_path}`} alt='no image' />
                    ))
                }
            </div>
        </div>
    )
}

export default Row