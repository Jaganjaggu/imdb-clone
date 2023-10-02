import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Banner.css'
import instance from '../instance';


function Banner({ fetchUrl }) {
    const base_Url = 'https://image.tmdb.org/t/p/original/'
    const [allMovie, setAllMovie] = useState([])
    

    const fetchData = async () => {
        const { data } = await instance.get(fetchUrl)
        setAllMovie(data.results)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col sm={9}>
                        <Carousel data-bs-theme="dark">
                            {
                                allMovie.map(item => (
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={`${base_Url}/${item.backdrop_path}`}
                                            alt="First slide"
                                        />

                                        <Carousel.Caption style={{zIndex:"1"}}>

                                            <h5 className='title-main'>{`${item.title}`}</h5>
                                           <div className='d-flex justify-content-center align-items-center'>
                                                <div className='me-2 d-flex justify-content-center align-items-center'><svg style={{ color: 'white' }} width="40" height="40" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--play-circle-outline-large-inline ipc-icon--inline sc-d4cb23a2-14 ejjmJF editorial-play-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path><path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path></svg></div>
                                                <p className='d-flex justify-content-center align-items-center watch-trailer' style={{color:'white',fontSize:"20px",marginBottom:'0px'}}>Watch Trailer</p>
                                           </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                        <div className='black-smokey'></div>

                        
                    </Col>




                    <Col sm={3} className='d-flex justify-content-center ' style={{zIndex:1}}>
                        <div>
                            <h5 style={{ color: "orange", marginBottom: '20px' }}>Up Next</h5>

                            <div className='mb-4 '>
                                <div className='d-flex' >
                                    <img width={'90px'}
                                        className='right-poster'
                                        src={`${base_Url}/${allMovie[Math.floor(Math.random() * allMovie.length)]?.poster_path}`}
                                        alt=""
                                    />
                                    <div>
                                        <div className='d-flex align-items-end'>
                                            <div className='me-2 right-poster-play'><svg className='right-poster-play' style={{ color: 'white' }} width="40" height="40" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--play-circle-outline-large-inline ipc-icon--inline sc-d4cb23a2-14 ejjmJF editorial-play-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path><path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path></svg></div>
                                            <div>{`${allMovie[Math.floor(Math.random()*allMovie.length)]?.vote_average}`}</div>
                                        </div>
                                        <div className='right-poster-title mt-3'>{`${allMovie[Math.floor(Math.random()*allMovie.length)]?.title}`}</div>
                                        
                                        <div>{`${allMovie[Math.floor(Math.random()*allMovie.length)]?.overview?.slice(0, 20)}`}</div>
                                    </div>

                                </div>
                            </div>

                            <div className='mb-4 '>
                                <div className='d-flex' >
                                    <img width={'90px'}
                                        className='right-poster'
                                        src={`${base_Url}/${allMovie[Math.floor(Math.random() * allMovie.length)]?.poster_path}`}
                                        alt=""
                                    />
                                    <div>
                                        <div className='d-flex align-items-end'>
                                            <div className='me-2 right-poster-play'><svg className='right-poster-play' style={{ color: 'white' }} width="40" height="40" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--play-circle-outline-large-inline ipc-icon--inline sc-d4cb23a2-14 ejjmJF editorial-play-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path><path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path></svg></div>
                                            <div>{`${allMovie[Math.floor(Math.random()*allMovie.length)]?.vote_average}`}</div>
                                        </div>
                                        <div className='right-poster-title mt-3'>{`${allMovie[Math.floor(Math.random()*allMovie.length)]?.title}`}</div>
                                        
                                        <div>{`${allMovie[Math.floor(Math.random()*allMovie.length)]?.overview?.slice(0, 20)}`}</div>
                                    </div>

                                </div>
                            </div>

                            <div className='mb-4 '>
                                <div className='d-flex' >
                                    <img width={'90px'}
                                        className='right-poster'
                                        src={`${base_Url}/${allMovie[Math.floor(Math.random() * allMovie.length)]?.poster_path}`}
                                        alt=""
                                    />
                                    <div>
                                        <div className='d-flex align-items-end'>
                                            <div className='me-2 right-poster-play'><svg className='right-poster-play' style={{ color: 'white' }} width="40" height="40" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--play-circle-outline-large-inline ipc-icon--inline sc-d4cb23a2-14 ejjmJF editorial-play-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path><path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path></svg></div>
                                            <div>{`${allMovie[Math.floor(Math.random()*allMovie.length)]?.vote_average}`}</div>
                                        </div>
                                        <div className='right-poster-title mt-3'>{`${allMovie[Math.floor(Math.random()*allMovie.length)]?.title}`}</div>
                                        
                                        <div>{`${allMovie[Math.floor(Math.random()*allMovie.length)]?.overview?.slice(0, 20)}`}</div>
                                    </div>

                                </div>
                            </div>
                            <h5><a style={{ textDecoration: 'none' }} href="">Browse trailer</a></h5>

                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Banner