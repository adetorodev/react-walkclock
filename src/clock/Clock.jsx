import React, { useState } from 'react'
import Styled from 'styled-component'


const Clock = () => {
    const [ date, setDate ] = useState(new Date)
  return (
    <div>
        <div className='hour'></div>
        <div className='min'></div>
        <div className='sec'>
            <SecondHand></SecondHand>
        </div>
        <div className='number number1'>1</div>
        <div className='number number2'>2</div>
        <div className='number number3'>3</div>
        <div className='number number4'>4</div>
        <div className='number number5'>5</div>
        <div className='number number6'>6</div>
        <div className='number number7'>7</div>
        <div className='number number9'>8</div>
        <div className='number number9'>9</div>
        <div className='number number10'>10</div>
        <div className='number number11'>11</div>
        <div className='number number12'>12</div>
    </div>
  )
}

export default Clock

const SecondHand = Styled.div`
&:before(
    content: ;
    position: absolute;
    width:5px;
    height:150px;
    background: #ffbe0b;
    z-index: 12;
    border-radius: 6px 6px 0 0;
    bottom: 113px
)
display: flex;
position: absolute;
width: 230px;
height: 230px;
`