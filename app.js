//=============== 전역변수, 함수 정의부분 =============//
const gameData = [
    {
        id: 1,
        answerLetter: '웃1',
        questionLetter: '홋1'
    },
    {
        id: 2,
        answerLetter: '웃2',
        questionLetter: '홋2'
    },
    {
        id: 3,
        answerLetter: '웃3',
        questionLetter: '홋3'
    },
    {
        id: 4,
        answerLetter: '웃4',
        questionLetter: '홋4'
    },
    {
        id: 5,
        answerLetter: '웃5',
        questionLetter: '홋5'
    }
];

//자식 요소 지우는 함수
function removeAllChild($parentNode) {
    //풀이 2. 자식이 있으면(길이가 1 이상이면) 계속 첫째를 삭제하라/
    while(!!$parentNode.children.length){ 
        $parentNode.removeChild($parentNode.firstElementChild)
    }
}

// 레벨(id)별 게임 판 까는 함수
function newGame() {
    const $letterBord = document.getElementById('letterBord');

    //가상의 태그
    const $virtual = document.createDocumentFragment();
    //gameDataIndex
    const $answer1 = gameData[0].answerLetter
    const $question1 = gameData[0].questionLetter
    const $randomNum = Math.floor(Math.random() * 9) + 1;
    //글자 9개 깔기
    for (let i = 1; i <= 9; i++) {
        
        const $newDiv = document.createElement('div');
        $newDiv.textContent = $question1;
        if (i === $randomNum) {
            $newDiv.textContent = $answer1;
            $newDiv.classList.add('clickHere')
            const target = i;
        }

        $virtual.appendChild($newDiv);
    }
    //가상의 태그를 letterBord 자식으로 넣기
    $letterBord.appendChild($virtual);

    //정답 태그 
    const $answereDiv = document.querySelector('.clickHere')
    // console.log($answereDiv);

    $letterBord.addEventListener('click', function(e){
        // console.log(e.target);
        if(e.target.matches('#letterBord > .clickHere')) {
            alert('정답입니다!');
            removeAllChild($letterBord);
            return;
        }
    })

}




//=============== 메인 코드 실행부분 ===============//
(function() {
    //새판 깔기
    const $startBtn = document.getElementById('startBtn');
    $startBtn.addEventListener('click', newGame)

    

})()

// while(true){
//     if('게임시작'){
//         newGame(gameData);
//     } else if ('정답'){
//         for ( let i = 2; i <= gameData.length; i++){
//             newGame();
//         }
//         break;
//     } else if ('10초가 지나면')
//     setTimeout(againGame, 10000);
// }



// function timer (){
//     console.log('5초!');
// }

// const $clock = document.getElementById('clock');

// serInterval(timer(), 5000)
