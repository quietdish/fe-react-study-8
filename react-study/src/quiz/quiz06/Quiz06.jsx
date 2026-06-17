import './Quiz06.css';
import { useState } from 'react';
import ColorBox from './ColorBox';

function Quiz06() {

    let [boxes, setBoxes] = useState(['red', 'blue', 'green', 'black']);

    return (
        <div>
            <div>
                <button onClick={() => {
                    setBoxes(['red', ...boxes]);
                }}>앞빨간박스추가</button>
                <button onClick={() => {
                    setBoxes(['blue', ...boxes]);
                }}>앞파란박스추가</button>
                <button onClick={() => {
                    setBoxes(['green', ...boxes]);
                }}>앞초록박스추가</button>

                <button onClick={() => {
                    setBoxes([...boxes, 'red']);
                }}>뒤빨간박스추가</button>
                <button onClick={() => {
                    setBoxes([...boxes, 'blue']);
                }}>뒤파란박스추가</button>
                <button onClick={() => {
                    setBoxes([...boxes, 'green']);
                }}>뒤초록박스추가</button>


                <button onClick={() => {
                    //unshift shift
                    let temp = [...boxes];
                    temp.shift();
                    setBoxes(temp);
                }}>앞박스삭제</button>
                <button onClick={() => {
                    //push pop
                    let temp = [...boxes];
                    temp.pop();
                    setBoxes(temp);
                }}>뒤박스삭제</button>
            </div>

            {
                boxes.map((item, index) => {
                    //return <div className="box" style={{ backgroundColor: 'item' }} ></div>
                    //return <ColorBox key={index} index={index} bgColor={item} />
                    return <ColorBox
                        bgColor={item}      //배경색
                        boxes={boxes}       //기준배열
                        setBoxes={setBoxes} //배열set함수
                        index={index}
                        key={index} />

                })

            }





        </div>


    );

    // function ColorBox({ bgColor, index }) {
    //     return (
    //         <div className='box' style={{ backgroundColor: bgColor }}>
    //             <button onClick={() => {
    //                 let XX = [...boxes];
    //                 XX.splice(index, 1);
    //                 setBoxes(XX);
    //             }}>X</button>
    //         </div>
    //     );
    // }
}



export default Quiz06;