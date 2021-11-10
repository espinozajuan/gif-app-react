import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Cats']);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'HunterXHunter' ]);
    // }

    return (
        <>
        <h1 className="main__title">Gif App</h1>
        <AddCategory setCategories={ setCategories } />

        <ol>
            {
                categories.map( category => (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </ol>
            
        </>
    )
}
