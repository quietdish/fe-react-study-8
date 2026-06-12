
//<Box title={arr[0]} msg={detail[0]}/>
// props = { title:"아침", msg:"졸리다"};


//<Box text={arr[0]} detail={detail[0]}/>
// props = { text:"아침", detail:"졸리다"};



////방법_0
// function Box(props) {
//     //props : 컴포넌트 내부에 필요로하는 매개변수 전달받기

//     // let arr = ['아침', '점심', '저녁'];
//     // let detail = ['졸려', '배불러', '피곤해'];

//     return (

//         <div style={{ backgroundColor: 'lightgreen' }}>
//             <h1>{props.text}</h1>
//             <p>{props.detail}</p>
//         </div>
//     )

// }



////응용_1
// {text, detail} = { text:"아침", detail:"졸려"};
function Box({ text, detail }) {
    //props : 컴포넌트 내부에 필요로하는 매개변수 전달받기

    return (

        <div style={{ backgroundColor: 'lightgreen' }}>
            <h1>{text}</h1>
            <p>{detail}</p>
        </div>
    )

}

export default Box;

//

//     {
//         //      아침 0  점심 1  저녁 2
//         arr.map((item, index) => {

//             return (
//                 <div style={{ backgroundColor: 'gray' }}>
//                     <h1>{arr[index]}</h1>
//                     <h1>{item}</h1>
//                     <p>{detail[index]}</p>
//                 </div>
//             )
//         })
//     }

//     <div style={{ backgroundColor: 'gray' }}>
//         <h1>{arr[0]}</h1>
//         <p>{detail[0]}</p>
//     </div>

//     <div style={{ backgroundColor: 'gray' }}>
//         <h1>{arr[1]}</h1>
//         <p>{detail[1]}</p>
//     </div>

//     <div style={{ backgroundColor: 'gray' }}>
//         <h1>{arr[2]}</h1>
//         <p>{detail[2]}</p>
//     </div>



// </div>

//}
