import TextItem from './TextItem';
import './Quiz03.css';

// import React from 'react';

function Quiz03() {

    let titleArr = ['일', '이', '삼', '사', '오'];
    let contentArr = ['내용일', '내용이', '내용삼', '내용사', '내용오'];

    return (
        <div className="App" >

            {titleArr.map((item, index) => {
                return (<TextItem title={item}
                    content={contentArr[index]}
                    key={index}
                />
                );
            })}

        </div >
    );

}

export default Quiz03;


//// feat.레고블록... 반복

{/* const TextItem = ({ title, content }) => {

    return (
        //<div className="App" >
        <div className='textItem'>
            <p className='title'>제목 : {title}</p>
            <p>내용 : {content}</p>
        </div>
    );
}


const Quiz03 = () => {
    //// 배열 관리..
    const items = [
        { title: '하나', content: '내용하나' },
        { title: '둘', content: '내용둘' },
        { title: '셋', content: '내용셋' },
        { title: '넷', content: '내용넷' },
        { title: '다섯', content: '내용다섯' },
    ];

    return (
        <div className="App">
            {items.map((item, index) => (
                <TextItem key={index} 
                title={item.title} 
                content={item.content} />
            ))}
        </div>
    )
}



export default Quiz03; */}




{/* * base code
<div className='textItem'>
                    <p className='title'>제목 : 둘</p>
                    <p>내용 : 내용둘</p>
                </div>
                <div className='textItem'>
                    <p className='title'>제목 : 셋</p>
                    <p>내용 : 내용셋</p>
                </div>
                <div className='textItem'>
                    <p className='title'>제목 : 넷</p>
                    <p>내용 : 내용넷</p>
                </div>
                <div className='textItem'>
                    <p className='title'>제목 : 다섯</p>
                    <p>내용 : 내용다섯</p>
                </div>
            </ > */}





