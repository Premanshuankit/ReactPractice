import React, { useEffect, useState } from 'react'

function InfiniteScroll() {
    const [items, setItems] = useState([])

     // Initial Load
    useEffect(() => {
        loadMoreItems()
    }, [])

    function loadMoreItems() {
        setItems((prev) => {
            let newItems = []
            let start = prev.length + 1

            for (let i = start; i < start + 10; i++) {
                newItems.push(` Items ${i}`)
            }

            return [...prev, ...newItems]
        })
    }

    useEffect(() => {

        function handleScroll() {
            const scrollTop = window.scrollY
            // console.log(scrollTop, 'scrollTop  scroll by user')
            const windowHeight = window.innerHeight
            // console.log(windowHeight, 'windowHeight: related to viewport')
            const documentHeight = document.documentElement.scrollHeight
            // console.log(documentHeight, 'documentHeight: Total height of entire page(scolled + viewport)')

            if ( scrollTop + windowHeight >= documentHeight - 10) {
                loadMoreItems()
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <>
            <h2>Infinite Scroll</h2>

            {items.map((item, index) => {
                return (<div 
                    key={index} 
                    style={{
                        padding: "10px",
                        margin: '10px',
                        border: '1px solid black'
                }}>
                    {item}
                </div>)
            })}

        </>
    )
}

export default InfiniteScroll