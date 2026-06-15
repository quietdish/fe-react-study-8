import { useState } from 'react';
import Box from './Box'

function Props02() {


    // 배열의 값이 변경 -> 변경된 값 유지 -> 화면에 재렌더링
    //let arr = ['아침', '점심', '저녁'];
    let [textArr, setTextArr] = useState(['아침', '점심', '저녁']);
    //let detail = ['졸려', '배불러', '피곤해'];
    let [detailArr, setDetailArr] = useState(['졸려', '배불러', '피곤해']);


    return (

        <div>

            <button onClick={() => {

                //데이터 기반으로 화면에 표시
                //데이터 조작

                //야식 정보 -> 배열에 추가

                //textArr.push('야식')
                let temp = [...textArr]; //깊은복사
                temp.push('야식');
                setTextArr(temp);   //랜더링 발생 조건

                //let temp2 = ...
                detailArr.push('행복하다');
                //setDetailArr(detailArr);
                setDetailArr(tempdetail);

                //재렌더링 발생 조건 -> state변수값이 set함수를 통해서 변경

                console.log(textArr);
                console.log(detailArr);

            }}>야식추가버튼</button>


            {
                textArr.map((item, index) => {
                    return (
                        //<Box text={arr[index]} detail={detail[index]} />
                        <Box text={item} detail={detailArr[index]} key={index} />
                    )
                })
            }
        </div>
    )
}

//export default Props02      ////이거먼저 쓰고 App.jsx상단에 임포트

export default Props02;
