import Modal from './Modal';
import './NewsBlog.css';
import { useState } from 'react';


function NewsBlog() {


    //제목 내용
    //하드 코딩(텍스트 직접) vs 변수 vs state변수
    let title = 'React Study';


    let [news1, setNews1] = useState('어제 뉴스');
    let [news2, setNews2] = useState('오늘 뉴스');
    let [news3, setNews3] = useState('내일 뉴스');

    let [news, setNews] = useState(['어제 뉴스', '오늘 뉴스', '내일 뉴스']);

    let [likeCount, setLikeCount] = useState(0);

    let [modalFlag, setModalFlag] = useState(false);



    return (
        <div>
            <div className='black-nav'>
                <h3>Blog Header</h3>
                {/* <div>React Study</div> */}
                {/* <div>{title}</div> */}
                <div style={{ color: "orange", fontsize: '20px' }}>{title}</div>
            </div>

            <div className='post-list'>
                <h4 onClick={() => {

                    //setModalFlag(true);
                    //setModalFlag( modalFlag ? false : true );
                    setModalFlag(!modalFlag); // !false -> true );
                    //재렌더링

                }}> {news[0]} <span onClick={(event) => {
                    //event.preventDefault();
                    event.stopPropagation();
                    setLikeCount(likeCount + 1);
                }}>❤</span> {likeCount}</h4>
                <p>내용자리</p>
            </div>

            <div className='post-list'>
                <h4> {news[1]}
                    {/* <span onClick={() => {
                        setLikeCount(likeCount + 1);
                    }}>❤</span> {likeCount} */}
                </h4>
                <p>내용자리</p>
            </div>

            <div className='post-list'>
                <h4> {news[2]}
                </h4>
                <p>내용자리</p>
            </div>



            {/* <div className='post-list'>
                <h4>{news[0]}</h4>
                <p>내용자리</p>
            </div>

            <div className='post-list'>
                <h4>{news[1]}</h4>
                <p>내용자리</p>
            </div> */}



            {/* <div className='post-list'>
                <h4>{news[1]}</h4>
                <p>내용자리</p>
            </div>

            <div className='post-list'>
                <h4>{news[2]}</h4>
                <p>내용자리</p>
            </div> */}


            {
                // modalFlag == true ? <Modal /> : null
            }

            {
                modalFlag && <Modal />
            }

        </div>
    )

}

export default NewsBlog;
