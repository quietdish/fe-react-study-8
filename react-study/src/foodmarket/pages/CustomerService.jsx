
function CustomerService() {




    /*
        localStorage 사용
        브라우저에 간단한 데이터 저장 및 활용

        읽기    localStorage.getItem(키)
        쓰기    localStorage.setItem(키, 값)
        삭제    localStorage.removeItem(키)

    */

    localStorage.setItem('key11', '안녕');
    localStorage.setItem('hello', 'nicetomeetyou');

    localStorage.removeItem('abc');
    console.log(localStorage.removeItem('msg'));

    /*
        단순 텍스트가 아니라 복잡한 배열이나 객체 단위를 저장

        localStorage 단순 텍스트만 저장     ////수작업을 해줘야함...

        JSON 포맷의 텍스트

        js객체 -> JSON 포맷의 문자열 변환   -> 저장
        JSON.stringify()
        
        읽기 -> JSON 포맷의 문자열 -> js 객체 변환
        JSON.parse()

    */
    let tempFood = {
        id: 'fd000',
        title: "Cake",
        content: "당보충 초코 케이크",
        price: 8000,
        stockCount: 10,
        imgPath: 'images/food1.jpg'
    };
    localStorage.setItem('tempFood', tempFood); //[object Object]
    localStorage.setItem('tempFoodJson', JSON.stringify(tempFood));

    //console.log(localStorage.getItem('tempFoodJson'));
    let tempFoodJson = localStorage.getItem('tempFoodJson');
    console.log(tempFoodJson);
    console.log(tempFoodJson.title);

    let jsonObject = JSON.parse(tempFoodJson);
    console.log(jsonObject);
    console.log(jsonObject.id);
    console.log(jsonObject.title);

    /*
        [{a},{b},{c}] -> JSON.stringify() -> localStorage : [{a},{b},{c}]

        [{d}] -> JSON.stringfy() -> localStorage : [{d}]

        localStorage -> JSON.parse -> [{a},{b},{c}].push({d})
                -> [{a},{b},{c},{d}] -> JSON.stirngify() -> localStorage : [{a},{b},{c},{d}]
    */


    return (
        <div>
            <h1>고객 서비스 페이지</h1>
            <h2>정성을 다하겠습니다.</h2>
        </div>
    )
}

export default CustomerService;