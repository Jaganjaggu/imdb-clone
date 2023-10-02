import React, { useEffect, useState } from 'react'
import './VideoList.css'
import instance from '../instance'
import { Card, Button } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

function VideoList({ fetchUrl }) {
  const base_Url = ' https://image.tmdb.org/t/p/original'
  const [movies, setMovies] = useState([])


  const fetchData = async () => {
    const { data } = await instance.get(fetchUrl)
    setMovies(data.results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='container'>
      <div>
        <h1 style={{ fontSize: '2rem' }}>What to watch</h1>
        <div className='d-flex align-items-center'>
          <h3><a style={{ fontSize: '1.7rem', fontWeight: '600', color: 'white', borderLeft: '4px solid orange', marginRight: '10px', paddingLeft: '15px', textDecoration: 'none' }} href="">Top picks</a></h3>
          <svg style={{ color: 'orange' }} width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-title-link ipc-title-link-chevron" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path></svg>
        </div>
        <p style={{ fontSize: '1rem' }}>TV shows and movies just for you </p>
      </div>

      <div >
        <Carousel fade >
          {
            movies.map((item, index) => (
              <Carousel.Item style={{marginBottom:'20px'}} className='d-flex justify-content-center align-items-center'>


                <div className='card-flexing'>

                  <Card style={{ width: '15rem', marginRight: '10px', marginBottom: '30px' }}>
                    <Card.Img variant="top" src={`${base_Url}/${item.poster_path}`} />
                    <Card.Body className='card-body'>
                      <div className='d-flex align-items-center mb-1'>
                        <svg style={{ color: "orange" }} width="18" height="18" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--star-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
                        <div className='ms-2' >{item.vote_average}</div>
                        <div className='star-button'><i class="fa-regular fa-star"></i></div>
                      </div>
                      <Card.Title style={{ fontSize: '13px' }}>{`${movies[index].original_title}`}</Card.Title>

                      <Button style={{ width: '100%',  margin: '0px', padding: '0px' }} className='card-button d-flex align-items-center justify-content-center mt-4' variant="primary"><span style={{ fontSize: '20px', fontWeight: '100', marginRight: '5px' }}>+</span> Watchlist</Button>
                      <div className='d-flex justify-content-center align-items-center mt-2'>
                        <div style={{ marginRight: '5px' }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--play-arrow ipc-btn__icon ipc-btn__icon--pre" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"></path></svg></div>
                        <div>Trailer</div>
                      </div>

                    </Card.Body>
                  </Card>
                  {movies[index + 1] &&
                    <Card style={{ width: '15rem', marginRight: '10px', marginBottom: '30px' }}>
                      <Card.Img variant="top" src={`${base_Url}/${movies[index + 1]?.poster_path}`} />
                      <Card.Body className='card-body'>
                        <div className='d-flex align-items-center mb-1'>
                          <svg style={{ color: "orange" }} width="18" height="18" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--star-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
                          <div className='ms-2' >{movies[index + 1]?.vote_average}</div>
                          <div className='star-button'><i class="fa-regular fa-star"></i></div>
                        </div>
                        <Card.Title style={{ fontSize: '13px' }}>{`${movies[index + 1]?.original_title}`}</Card.Title>

                        <Button style={{ width: '100%', margin: '0px', padding: '0px' }} className='card-button d-flex align-items-center justify-content-center mt-4' variant="primary"><span style={{ fontSize: '20px', fontWeight: '100', marginRight: '5px' }}>+</span> Watchlist</Button>
                        <div className='d-flex justify-content-center align-items-center mt-2'>
                          <div style={{ marginRight: '5px' }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--play-arrow ipc-btn__icon ipc-btn__icon--pre" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"></path></svg></div>
                          <div>Trailer</div>
                        </div>

                      </Card.Body>
                    </Card>
                  }
                  {movies[index + 2] &&
                    <Card style={{ width: '15rem', marginRight: '10px', marginBottom: '30px' }}>
                      <Card.Img variant="top" src={`${base_Url}/${movies[index + 2]?.poster_path}`} />
                      <Card.Body className='card-body'>
                        <div className='d-flex align-items-center mb-1'>
                          <svg style={{ color: "orange" }} width="18" height="18" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--star-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
                          <div className='ms-2' >{movies[index + 2]?.vote_average}</div>
                          <div className='star-button'><i class="fa-regular fa-star"></i></div>
                        </div>
                        <Card.Title style={{ fontSize: '13px' }}>{`${movies[index + 2]?.original_title}`}</Card.Title>

                        <Button style={{ width: '100%', margin: '0px', padding: '0px' }} className='card-button d-flex align-items-center justify-content-center mt-4' variant="primary"><span style={{ fontSize: '20px', fontWeight: '100', marginRight: '5px' }}>+</span> Watchlist</Button>
                        <div className='d-flex justify-content-center align-items-center mt-2'>
                          <div style={{ marginRight: '5px' }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--play-arrow ipc-btn__icon ipc-btn__icon--pre" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"></path></svg></div>
                          <div>Trailer</div>
                        </div>

                      </Card.Body>
                    </Card>
                  }
                  {movies[index + 3] &&
                    <Card style={{ width: '15rem', marginRight: '10px', marginBottom: '30px' }}>
                      <Card.Img variant="top" src={`${base_Url}/${movies[index + 3]?.poster_path}`} />
                      <Card.Body className='card-body'>
                        <div className='d-flex align-items-center mb-1'>
                          <svg style={{ color: "orange" }} width="18" height="18" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--star-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
                          <div className='ms-2' >{movies[index + 3]?.vote_average}</div>
                          <div className='star-button'><i class="fa-regular fa-star"></i></div>
                        </div>
                        <Card.Title style={{ fontSize: '13px' }}>{`${movies[index + 3]?.original_title}`}</Card.Title>

                        <Button style={{ width: '100%', margin: '0px', padding: '0px' }} className='card-button d-flex align-items-center justify-content-center mt-4' variant="primary"><span style={{ fontSize: '20px', fontWeight: '100', marginRight: '5px' }}>+</span> Watchlist</Button>
                        <div className='d-flex justify-content-center align-items-center mt-2'>
                          <div style={{ marginRight: '5px' }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--play-arrow ipc-btn__icon ipc-btn__icon--pre" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"></path></svg></div>
                          <div>Trailer</div>
                        </div>

                      </Card.Body>
                    </Card>
                  }
                  {movies[index + 4] &&
                    <Card style={{ width: '15rem', marginRight: '10px', marginBottom: '30px' }}>
                      <Card.Img variant="top" src={`${base_Url}/${movies[index + 4]?.poster_path}`} />
                      <Card.Body className='card-body'>
                        <div className='d-flex align-items-center mb-1'>
                          <svg style={{ color: "orange" }} width="18" height="18" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--star-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
                          <div className='ms-2' >{movies[index + 4]?.vote_average}</div>
                          <div className='star-button'><i class="fa-regular fa-star"></i></div>
                        </div>
                        <Card.Title style={{ fontSize: '13px' }}>{`${movies[index + 4]?.original_title}`}</Card.Title>

                        <Button style={{ width: '100%', margin: '0px', padding: '0px' }} className='card-button d-flex align-items-center justify-content-center mt-4' variant="primary"><span style={{ fontSize: '20px', fontWeight: '100', marginRight: '5px' }}>+</span> Watchlist</Button>
                        <div className='d-flex justify-content-center align-items-center mt-2'>
                          <div style={{ marginRight: '5px' }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--play-arrow ipc-btn__icon ipc-btn__icon--pre" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"></path></svg></div>
                          <div>Trailer</div>
                        </div>

                      </Card.Body>
                    </Card>
                  }

                </div>
              </Carousel.Item>
            ))
          }
        </Carousel>
      </div>
    </div>
  )
}

export default VideoList