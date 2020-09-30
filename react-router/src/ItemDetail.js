import React, { useEffect, useState } from 'react';
import './App.css';


function ItemDetail({ match }) {
    
    useEffect(() => {
        fetchItem();
    },[]);

    const [data, setData] = useState({
        item: [],
    });
    const [image, setImage] = useState({})

    const fetchItem = async () => {
        const fetchItem = await fetch (
            `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
        );
        const data = await fetchItem.json();
        setData(data.data);
        setImage(data.data.item.images)
    };

    return (
        <div>
            
            <h1>{data.item.name}</h1>
            <img src={image.background} alt="image" />
            
        </div>
    );
}

export default ItemDetail;
