import React, { useState } from 'react'
import { Row, Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Image from './Image'
import fetchImages from './searchAPI'
import { increasePageToFetch, loadMore } from './resultsSlice'
import Title from './Title'

const Results = () => {

    const dispatch = useDispatch()
    const images = useSelector((state) => state.search.images)
    const lastSearched = useSelector((state) => state.search.lastSearched)
    const pageToFetch = useSelector((state) => state.result.pageToFetch)
    const loadedPages = useSelector((state) => state.result.loadedPages)
    const [loading, setLoading] = useState(false)

    const handleLoadMoreClick = () => {
        setLoading(true)
        fetchImages(lastSearched, pageToFetch)
            .then((data) => {
                setLoading(false)
                if (data.results.length !== 0) {
                    dispatch(increasePageToFetch())
                    dispatch(loadMore({ page: data.results }))
                }
            })
    }

    return (
        <Row className="results">
            <Title />

            <div className="grid">
                {images.map((image) => {
                    return (
                        <Image key={image.id} src={image.urls.thumb} alt={image.alt_description}/>
                    )
                })}
            </div>

            {loadedPages.length !== 0 ? loadedPages.map((object, index) => {
                            return (
                                <div key={pageToFetch + index} className="grid">
                                    {
                                        object.page.length !== 0 ? object.page.map((image) => {
                                                    return (
                                                        <Image key={image.id} src={image.urls.thumb} alt={image.alt_description}
                                                        />
                                                    )
                                                })
                                            : null
                                    }
                                </div>
                            )
                        })
                    : null
            }

            <Button
                variant="dark"
                className="loadMore center"
                disabled={loading}
                onClick={!loading ? handleLoadMoreClick : null}
            >
                {!loading
                    ? "Load More"
                    : <Spinner animation="border" variant="light" />
                }
            </Button>
        </Row>
    )
}

export default Results