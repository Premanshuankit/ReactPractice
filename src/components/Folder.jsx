import React, { useState } from 'react'

function Folder() {
    const data = [
        {
            id: 1,
            name: 'src',
            isOpen: true,
            children: [
                {
                    id: 2,
                    name: 'components',
                    isOpen: true,
                    children: [
                        {
                            id: 3,
                            name: 'Test.jsx',
                            isOpen: false
                        }
                    ]
                },
                {
                    id: 4,
                    name: 'App.js',
                    isOpen: false
                },
                {
                    id: 5,
                    name: 'App.css',
                    isOpen: false
                }
            ]
        },
        {
            id: 6,
            name: 'package.json',
            isOpen: false
        },
        {
            id: 7,
            name: '.gitignore',
            isOpen: false
        },
        {
            id: 8,
            name: 'node_modules',
            isOpen: true,
            children: [
                {
                    id: 9,
                    name: 'babel package',
                    isOpen: false
                },
                {
                    id: 10,
                    name: 'npm package',
                    isOpen: false
                }
            ]
        }
    ]
    return (
        <>
            <h2>File Explorer</h2>
            {data.map((item) => {
                    return <ChildFolder key={item.id} item={item}/>
            })} 
        </>
    )
}

export default Folder


function ChildFolder({ item }) {
    const [showChildren, setShowChildren] = useState(false)
    console.log(item)

    return (
        <div style={{marginLeft: '20px'}}>
            {item.isOpen ? (
                <>
                    <div 
                        style = {{cursor: 'pointer'}}
                        onClick={() => setShowChildren(!showChildren)}>
                        📁 {item.name}
                    </div>

                    <div 
                        style = {{cursor: 'pointer'}}>
                        
                        {showChildren && item.children?.map((child) => {
                            return <ChildFolder key ={item.id} item = {child} />
                        })}
                    </div>
                </>
            ) : (
                <div>📄 {item.name}</div>
            )
            }
        </div>
    )
}