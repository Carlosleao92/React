import React, { Component } from 'react'
import './Pokecard.css';
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";


export default class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${this.props.id}.png`
        console.log(imgSrc);
        return (
            <div className='Pokecard'>
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name}/>
                <div className="Pokecard-data">
                    <div>Type: {this.props.type}</div>
                <div>EXP: {this.props.exp}</div>
                </div>
                

            </div>
        )
    }
}   