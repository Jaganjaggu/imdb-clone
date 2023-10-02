import React from 'react'
import { useEffect, useState } from 'react'
import instance from '../instance';
import { Card } from 'react-bootstrap'
import './VideoList.css'

function RecentlyViewes({ fetchUrl }) {
    const base_Url = ' https://image.tmdb.org/t/p/original/'
    const [allMovie, setAllMovie] = useState([])


    const fetchData = async () => {
        const { data } = await instance.get(fetchUrl)
        setAllMovie(data.results[Math.floor(Math.random() * data.results.length)])
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='container mt-5 '>
            <div>
                <h1 style={{ fontSize: '2rem' }}>Recently viewed</h1>
                <div className='d-flex align-items-center'>
                    <h3><a style={{ fontSize: '1.7rem', fontWeight: '600', color: 'white', borderLeft: '4px solid orange', marginRight: '10px', paddingLeft: '15px', textDecoration: 'none' }} href="">Watch more</a></h3>
                    <svg style={{ color: 'orange' }} width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-title-link ipc-title-link-chevron" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path></svg>
                </div>
                <p style={{ fontSize: '1rem' }}>TV shows and movies just for you </p>
            </div>
            <div className='recent-card'>
                <Card style={{ width: '13rem', marginRight: '10px', marginBottom: '30px' }}>
                    <Card.Img variant="top" src={`${base_Url}/${allMovie.poster_path}`} />
                    <Card.Body className='card-body'>
                        <div className='d-flex align-items-center mb-1'>
                            <svg style={{ color: "orange" }} width="18" height="18" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--star-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
                            <div className='ms-2' >{allMovie.vote_average}</div>
                            <div className='star-button'><i class="fa-regular fa-star"></i></div>
                        </div>
                        <Card.Title style={{ fontSize: '15px' }}>{`${allMovie.original_title}`}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default RecentlyViewes