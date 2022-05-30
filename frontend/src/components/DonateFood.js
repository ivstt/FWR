import React from 'react';

function DonateFood({onSubmit}){
    const[image, setImage] = React.useState(null);
    const [description, setDescription] = React.useState("");
    const [quantity, setQuantity] = React.useState("");
    const [date, setDate] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const validForm = description && quantity && date && image; // will return false if one of the properties doesn't have a value
        if (validForm) {
            const data = new FormData();
            data.append("uploadedImage", image, image.name);
            data.append("description", description);
            data.append("quantity", quantity);
            data.append("date", date);
            data.append("action", "addItem");

            onSubmit(data);
           
        } else {
            // if not, set errorMessage state.
            setErrorMessage("Please, fill in all fields.");
        }
    }

        return( <>
        <form onSubmit={handleSubmit}>
            <section>        
            <h1>1.Upload photos:</h1>
            <ul>
                <li>first photo should clearly show the type of the product.</li>
                <li>photo of the expiration date.</li>
            </ul>
            <label for="img">Select images:</label>
            <input type="file" id="img" name="img" accept="image/*" onChange={e => setImage(e.target.files[0])}/>         
            </section>
            <section>
                <h1>2.Write a <b>short</b> description</h1>
                <textarea onChange={e => setDescription(e.target.value)} placeholder="Enter text here..."></textarea>
            </section> 
            <section>
                <h1>3.Select the quantity of your item/s:</h1>
                <input type="number" id="quantity" name="quantity" min="1" max="30" placeholder="0" onChange={e => setQuantity(e.target.value)}/>
            </section>
            <section>
                <h1>4.Select the expiration date of your item/s</h1>
                <input type="date" id="start" name="trip-start" value="2022-05-30" onChange={e => setDate(e.target.value)}/>
            </section>
            <section>
                <p>{errorMessage}</p>
            </section>
            <button className='btn' type='submit'>Donate</button>
        </form>
        </>    )  
        
    }

export default DonateFood;