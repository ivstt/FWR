import React from 'react';
import ItemDetails from '../components/ItemDetails.js';
import "../styles/discover-pg.css"

function Discover(){

    const [items, setItems] = React.useState([]);

    const getItems = async() => {
        let baseUrl = document.getElementById("baseUrl").value;
        let url = baseUrl + "donationService.php?action=listDonations";
        const fetchResult =  await fetch(url);
        const jsonResult = await fetchResult.json();

        setItems(jsonResult.data);
    };


    const deleteItem = async(itemId) => {
        let baseUrl = document.getElementById("baseUrl").value;
        let url = baseUrl + "donationService.php?id=" + itemId;
        const fetchResult = await fetch(url, {
            method: "DELETE"
        });
        const jsonResult = await fetchResult.json();

        if(jsonResult.success){
            getItems();
        }
        else{
            console.error("Failed to deliver item.")
        }

    };

    React.useEffect(() => {getItems();}, []);
    
    return (      
        <div className='items-container'>
            {items.map(r => <ItemDetails {...r} onDelete={deleteItem}/>)}
        </div>
        )
}



export default Discover;