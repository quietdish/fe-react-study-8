

function Modal(props) {    //
    return (
        <div className="modal" style={{ backgroundColor: props.gbColor }}>
            <h3>{props.title}❤{props.likeCount}</h3>
            <p>날짜</p>
            <p>상세내용</p> 
            <button onClick={() => {
                props.title = '긴급 뉴스';
                let temp = [...props.news];
                temp[1] = '긴급뉴스';
                props.setNews(temp);

            }}>제목 긴급 변경</button>
        </div>
    )
}

export default Modal;