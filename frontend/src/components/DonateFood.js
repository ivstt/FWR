import React from 'react';

function DonateFood(){
    const[title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");
    const [image, setImage] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     const formData = new FormData();
        //     // create a new objebt to hold the value from states / input fields
        //     title: title,
        //     image: image,
        //     body: body
        // };

        // const validForm = formData.title && formData.body && formData.image; // will return false if one of the properties doesn't have a value
        // if (validForm) {
        //     // if all fields/ properties are filled, then call savePost
        //     savePost(formData);
        // } else {
        //     // if not, set errorMessage state.
        //     setErrorMessage("Please, fill in all fields.");
        // }
    // }

        return( <>
        <form>
            <section>        
            <h1>1.Upload photos:</h1>
            <ul>
                <li>first photo should clearly show the type of the product.</li>
                <li>photo of the expiration date.</li>
            </ul>
            <label for="img">Select images:</label>
            <input type="file" id="img" name="img" accept="image/*"/>         
            </section>
            <section>
                <h1>2.Write a short description</h1>
                <textarea name="descr" form="usrform">Enter text here...</textarea>
            </section> 
            <section>
                <h1>3.Select the quantity of your item/s:</h1>
                <input type="number" id="quantity" name="quantity" min="1" max="30" placeholder="0"/>
            </section>
            <section>
                <h1>4.Select the expiration date of your item/s</h1>
                <input type="date" id="start" name="trip-start" value="2022-05-30" min="2022-05-30" max="2030-12-31"/>
            </section>
            <button className='btn'>Donate</button>
        </form>
        </>    )  
        
    }

export default DonateFood;