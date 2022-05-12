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


// 레벨(id)별 게임 판 까는 함수
function newGame() {
    const $letterBord = document.getElementById('letterBord');

    //가상의 태그
    const $virtual = document.createDocumentFragment();
    const $answer1 = gameData[0].answerLetter
    const $question1 = gameData[0].questionLetter
    // console.log(gameData[1].answerLetter);
    const $randomNum = Math.floor(Math.random() * 9) + 1;
    // console.log(Math.floor(Math.random() * 9) + 1);
    for (let i = 1; i <= 9; i++) {
        const $newDiv = document.createElement('div');
        $newDiv.textContent = $question1;
        // $newDiv.classList.add('icon');
        // console.log($newDiv);
        // console.log($question1);
        if (i === $randomNum) {
            $newDiv.textContent = $answer1;
            $newDiv.classList.add('clickHere')
            const target = i;
        }

        $virtual.appendChild($newDiv);
    }
    $letterBord.appendChild($virtual);
}


//=============== 메인 코드 실행부분 ===============//
(function() {
    //새판 깔기
    const $startBtn = document.getElementById('startBtn');
    $startBtn.addEventListener('click', newGame)

    //정답 클릭
    const $answer1 = gameData[0].answerLetter

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
