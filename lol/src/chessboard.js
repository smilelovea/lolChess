  
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import './chessboard.css';

function chessboard() {
return (
    <div className="container">
        {Array(28).fill().map((_,i) => (
            <div className="holder" onDragOver = {event => event.preventDefault()} 
                 onDrop = {event => onDrop_handler(event)} key={i}  >
                {i <= 1 ? <div className="box" draggable="true" onDrop = {onDrop_prevent} 
                id={i} onDragStart = {event => event.dataTransfer.setData('text', event.target.id)}
                 onDragEnter = {dragEnter_handler} onDragLeave = {dragLeave_handler}> </div> : ''}
            </div>
        ))}
    </div>
 
)}

const onDrop_prevent = event => {
    event.preventDefault();
    event.stopPropagation();
}

 const onDrop_handler = event => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    console.log(data);
    console.log(event.currentTarget.firstElementChild); // 겹쳐진 box중 아래에 있는 box(원래 있던 box)
    console.log(data.parentNode);


    if (data) {
        event.target.append(document.getElementById(data))
    }
};

const holder = document.querySelector(".holder");
console.log(holder);

const dragEnter_handler = event => {
    event.classList.add('over');
}

const dragLeave_handler = event => {
    event.classList.remove('over');
}
 





 

export default chessboard; 