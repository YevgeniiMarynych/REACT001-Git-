import React from 'react';


class Burger extends React.Component {
    
    render() {
        
        return <li className='menu-burger'>
            <div className='image-container'>
                <img src= {this.props.details.image}  alt="" />

            </div>

        </li>
           
            
        
    
    }
}

export default Burger;