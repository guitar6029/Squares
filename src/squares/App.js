import Squares from './Squares';
import { data } from '../data';
import './App.css';
import { useState } from 'react';

export default function App() {

    let [squares, setSquares] = useState(data);

    let toggleBackgroundColor = (id) => {
        setSquares(previousSquares => {
            return previousSquares.map((square) => {
                return square.id === id ? { ...square, on: !square.on } : square
            })
        })
    }

    const squareItems = squares.map(square => {
        return (
            <Squares
                toggle={toggleBackgroundColor}
                clickedSquare={setSquares}
                className='square'
                key={square.id}
                id={square.id}
                on={square.on} />
        )
    });

    return (
        <div className="container">
            {squareItems}
        </div>
    )
}