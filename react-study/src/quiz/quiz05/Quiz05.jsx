import './Quiz05.css';
import { useState } from 'react';
import ColorBox from './ColorBox';

function Quiz05() {

    let [boxes, setBoxes] = useState(['red', 'blue', 'green', 'black', 'yellow', 'purple']);

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
                    setBoxes([ ...boxes, 'red']);
                }}>뒤빨간박스추가</button>
                <button onClick={() => {
                    setBoxes([ ...boxes, 'blue']);
                }}>뒤파란박스추가</button>
                <button onClick={() => {
                    setBoxes([...boxes, 'green']);
                }}>뒤초록박스추가</button>


                {/* <button onClick={() => {
                    setBoxes(['red', ...boxes]);
                }}>앞박스삭제</button> */}


            </div>

            {
                boxes.map((item, index) => {
                    //return <div className="box" style={{ backgroundColor: 'item' }} ></div>
                    return <ColorBox bgColor={item} />
                })
            }

        </div>


    )

    // let [boxes, setBoxes] = useState([<div className='box'>박스</div>, <div className='box'>박스</div>])

    //let [arr, setArr] = useState([0, 0]);

    /*
        //배열에 요소 직접 넣는 경우
        let [boxes, setBoxes] = useState([<div className='box' style={{ backgroundColor: 'red' }} ></div>,
        <div className='box' style={{ backgroundColor: 'blue' }} ></div>,
        <div className='box' style={{ backgroundColor: 'green' }} ></div>,
        <div className='box' style={{ backgroundColor: 'black' }} ></div>]);
        


    //let [boxes, setBoxes] = useState([1, 2, 3, 4]);
    
    // 각 색깔 박스 별로 기준 코드로 구분하기 (기준코드: 1 2 3 4 ... 분류값)
    // return (

    //     <div>
    //         <div>
    //             <button onClick={() => {
    //                 // let temp = [...boxes];
    //                 // temp.unshift(<div dlassName='box' style={{ backgroundColor: 'red' }} ></div>);
    //                 //setBoxes(temp);
    //                 setBoxes([...boxes]);
    //             }}>앞빨간박스추가</button>

    //             <button onClick={() => { }}>앞파란박스추가</button>
    //             <button onClick={() => { }}>앞초록박스추가</button>

    //             <button onClick={() => { }}>뒤빨간박스추가</button>
    //             <button onClick={() => { }}>뒤파란박스추가</button>
    //             <button onClick={() => { }}>뒤초록박스추가</button>
    //         </div>

            {/* <div>
                {
                    arr.map((value, index) => {
                        console.log(value);
                        return <div className="box" key={index}> </div>
                    })
                }
            </div> 

            

} /*}


            {/* ////직접... */}
{/* <div className='box' style={{ backgroundColor: 'red' }} ></div>
            <div className='box' style={{ backgroundColor: 'blue' }} ></div>
            <div className='box' style={{ backgroundColor: 'green' }} ></div>
            <div className='box' style={{ backgroundColor: 'black' }} ></div> */}

{/* <button onClick={() => { }}>앞빨간박스추가</button>*/ }

{/* <button onClick={() => {
                let temp = [...boxes];
                temp.unshift(<div dlassName='box' style={{ backgroundColor: 'red' }} ></div>);
                setBoxes(temp);
            }}>앞빨간박스추가</button> */}


{/* <div style={{ margin: '10px' }}>
                <button onClick={() => {
                    //let temp = [...arr, 1];
                    setArr([...arr, -1]);
                }}>앞빨간박스추가</button>
                <button onClick={() => {
                    setArr([...arr, 1]);
                }}>앞파란박스추가</button>
                <button onClick={() => {
                    setArr([...arr, 1]);
                }}>앞초록박스추가</button>
                <button onClick={() => {
                    setArr([...arr, 1]);
                }}>뒤빨간박스추가</button>
                <button onClick={() => {
                    setArr([...arr, 1]);
                }}>뒤파란박스추가</button>
                <button onClick={() => {
                    setArr([...arr, 1]);
                }}>뒤초록박스추가</button>
            </div>

            <div>
                {
                    arr.map((value, index) => {
                        console.log(value);
                        return <div className="box" key={index}> </div>
                    })
                }
            </div> *


        </div>/} */}



export default Quiz05;