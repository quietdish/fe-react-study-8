import './Quiz04.css';
import { useState } from 'react';

function Quiz04() {

    // let [boxes, setBoxes] = useState([<div className='box'>박스</div>, <div className='box'>박스</div>])

    let [arr, setArr] = useState([0, 0]);

    return (
        <div>

            <div style={{ margin: '10px' }}>
                <button onClick={() => {

                    //let temp = [...arr, 1];

                    setArr([...arr, 1]);

                }}>추가</button>
            </div>

            <div>

                {
                    arr.map((value, index) => {
                        console.log(value);
                        return <div className="box" key={index}>박스</div>
                    })
                }


            </div>
        </div>
    )

}

export default Quiz04;