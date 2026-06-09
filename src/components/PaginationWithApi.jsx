import React, { useState, useEffect } from 'react'

function PaginationWithApi() {
    const [currentPage, setCurrentPage] = useState(1)
    const [data, setData] = useState([])
    const itemsPerPage = 10

    async function fetchData() {
        try {
            const response = await fetch('https://dummyjson.com/todos')
            // console.log('response', response)
            const result = await response.json()
            console.log('result', result)

            if (result) {
                setData(result.todos)
                console.log(result.todos, 'sdfghjk')
            }
        } catch(err) {
            console.log('error : ', err)
        }

    }
    useEffect(() => {
        fetchData()
    }, [])

    let startIndex = (currentPage - 1) * itemsPerPage
    let endIndex = startIndex + itemsPerPage
    // console.log(startIndex, endIndex)

    let currentItems = data.slice(startIndex, endIndex)
    console.log(currentItems, 'currentItems')
    let totalPages = Math.ceil(data.length / itemsPerPage)

    function handlePrev() {
        setCurrentPage((prev) => prev - 1)
    }

    function handleNext() {
        setCurrentPage((prev) => prev + 1)
    }
    return (
        <>
            <h2>pagination</h2>

            {currentItems.map((item, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            padding: '10px',
                            margin: '10px',
                            border: '1px solid grey'
                        }}
                        > {item.todo}

                    </div>
                )
            })}
            <div 
                style={{
                    position: 'fixed', 
                    bottom: '50px', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%'
                }}>
                <button onClick={handlePrev} disabled={currentPage == 1}> previous </button>
                <span style={{margin: '10px'}}> page {currentPage} of {totalPages} </span>
                <button onClick ={handleNext} disabled={currentPage == totalPages}> next </button>
            </div>
        </>
    )
}

export default PaginationWithApi