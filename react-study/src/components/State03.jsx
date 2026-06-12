

function State03() {

    //let Arr = [1, 2, 3, 4, 5];
    let [arr, setArr] = useState([1, 2, 3, 4, 5]);

    
    
    
    
    
    
    
    
    
    
    return (
        <div>
            <button onClick={() => {
                //배열에 값 추가 : push unshift  splice
                //  [1,2,3,4,5];
                //arr.push(6);    // [1,2,3,4,5, 6]; // [1,2,3,4,5,6,6];
                //console.log(arr);





                //let temp = arr;   얕은 복사
                let temp = [...arr];    //배열 깊은 복사    [...[1,2,3,4,5]]    [1,2,3,4,5]
                temp.push(7);       //[1,2,3,4,5,7]
                setArr(temp);       //state 변수 arr에 들어있는 값(배열의 주소) 변경 인지 -> 재렌더링

            }}>배열변경버튼</button>

            {
                arr.map((val) => {
                    return <p>{val}</p>
                })
            }
        </div>
    )
}

export default State03;