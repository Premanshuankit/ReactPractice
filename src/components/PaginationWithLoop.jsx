import React, { useState } from 'react'

function PaginationWithLoop() {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10

    let items = []
    for ( let i = 1; i < 104; i++) {
        items.push(`items ${i}`)
    }

    let startIndex = (currentPage - 1) * itemsPerPage
    let endIndex = startIndex + itemsPerPage

    let currentItems = items.slice(startIndex, endIndex)
    let totalPages = Math.ceil(items.length / itemsPerPage)

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
                        > {item}

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

export default PaginationWithLoop