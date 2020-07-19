import React, {Component} from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

class Avatar extends Component {
        constructor () {
            super();
            this.state = {name:'Welcome subscriber'};
        }


        nameChange  = () => {
            this.setState({name: "blue"});
        }


    render (){
        const avatarlistarray = [
            {
                id: 1,
                name: 'Chandan',
                work:'Web developer'
            },
            {
                id: 2,
                name: 'Nishu',
                work:'Doctor'
            },
            {
                id: 3,
                name: 'Karuna',
                work:'PHP developer'
            },
            {
                id: 4,
                name: 'Gaurav',
                work:'JAVA developer'
            }
        ];

        const arrayavatarcard = avatarlistarray.map((avatarcard, i) => {
            return <Avatarlist id={avatarlistarray[i].id} name={avatarlistarray[i].name} work={avatarlistarray[i].work}/>

        });

        return ( <div className="mainpage">
            <h1>{this.state.name}</h1>
            {arrayavatarcard}
            <button onClick={this.nameChange}>Subscribe</button>
            </div>
        )
    }

}

export default Avatar;