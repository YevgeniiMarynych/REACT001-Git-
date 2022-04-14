import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import Burger from './Burger';
import sampleBurgers from '../sample-burgers';

class App extends React.Component {
    state={
        burgers: {},
        order: {}
    }
addBurger= (burger) => {
    
    //Делаем копию обьекта state
    const burgers = {...this.state.burgers}
    //Добавить новый бургер в переменную burgers
    burgers[`burger${Date.now()}`]= burger
    // Записать наш новый обьект burgers в state
    this.setState({burgers})
}

loadSampleBurgers = () => {
    this.setState({burgers: sampleBurgers})
}

addToOrder = key => {
    // 1 Делаем копию обьекта state
    const order = {... this.state.order}
    // 2 Добавить ключ к заказу со значением 1, либо обновить текущее значение
    order[key] = order[key] + 1 || 1;
    //3 Записать наш новый обьект order  в state
   this.setState({order})
}


    render() {
        return(
            <div className='burger-paradise'>
                <div className='menu'>
                 <Header title="Hot Burger"/>
                <ul className='burgers'>
                    {Object.keys(this.state.burgers).map(key => {
                        return (
                        <Burger 
                        key={key} 
                        index={key}
                        addToOrder={this.addToOrder}
                        details={this.state.burgers[key]}
                        />
                        )
                    })}
                </ul>
                 
                </div>
                <Order/>
                <MenuAdmin 
                addBurger={this.addBurger}
                loadSampleBurgers={this.loadSampleBurgers}
                /> 
            </div>
        );
    
    }
}

export default App;