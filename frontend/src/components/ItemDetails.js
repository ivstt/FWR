import React from 'react';
import "../styles/itemDet.css";

class ItemDetails extends React.Component{

    handleDelete = () => {
        this.props.onDelete(this.props.itemsId) // todo - add alert
    };

    render(){

        const imgPath =  "/itemsImages/" + this.props.itemsPic;


        return(
            <section className='itemSection'>

                <div className='imgContainer'>
                    <img className='itemImg' alt="product" src={imgPath}></img>
                </div>
                
                <div className='itemContent'>
                    <div>
                        <h2>expires in {this.props.expiryDate}</h2>
                        <p>{this.props.descrip}</p>
                    </div>
                    <div>
                        <button type="button" className='btn'>Message</button>
                        <button type="button" className='btn'>Rescue Me</button>
                    </div>
                </div>

                <div className='delete-container'>
                    <i className='fa fa-trash' onClick={this.handleDelete}>X</i>
                </div>
            </section>
        )
    }

}

export default ItemDetails;