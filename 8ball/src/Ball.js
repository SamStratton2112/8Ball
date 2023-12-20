import { useState } from 'react';
import answers from './Answers';
import './Ball.css'

const Ball = ()=>{
    let [answer, setAnswer] = useState('Think of a Question');
    let [color, setColor] = useState('black');
    let questionIdx = Math.floor(Math.random() * answers.length);
    const getAnswerAndColor = ()=>{
        setAnswer(answers[questionIdx].msg);
        setColor(answers[questionIdx].color);
    }
    const reset = ()=>{
        setAnswer('Think of a question');
        setColor('black');
    }
    return(
        <>
        <div className="Ball">
            <p className="Ball-text" style={{backgroundColor: color}} onClick={()=>getAnswerAndColor()}><b>{answer}</b></p>
            <button className="Ball-Restart-Btn" onClick={()=>reset()}>Restart</button>
        </div>
        </>
    )
}

export default Ball;