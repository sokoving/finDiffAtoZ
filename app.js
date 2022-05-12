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


 //글자 9개 깔기 함수
 function gameBord(maxNum, idxNum) {
    const $letterBord = document.getElementById('letterBord');

        //gameDataIndex
    const $answer0 = gameData[idxNum].answerLetter;
    const $question0 = gameData[idxNum].questionLetter;
    const $randomNum = Math.floor(Math.random() * maxNum) + 1;

    for (let i = 0; i < maxNum; i++) {    
            //가상의 태그
       const $virtual = document.createDocumentFragment();
            //가상에 밀어넣을 숫자 div
       const $newDiv = document.createElement('div');
       $newDiv.textContent = $question0;
       if (i === $randomNum) {
          $newDiv.textContent = $answer0;
          $newDiv.classList.add('clickHere')
      }
      $virtual.appendChild($newDiv);
      $letterBord.appendChild($virtual);
    }
    console.log('게임시작');
 }


function newGamebord(maxNum){

}



//=============== 메인 코드 실행부분 ===============//
(function() {
    //새판 깔고 정답 맞추기
    const $startBtn = document.getElementById('startBtn');
    $startBtn.addEventListener('click', function(){
        //게임 시작 > 글자 깔기
        gameBord(9, 0);

        // 정답 맞추기
        const $letterBord = document.getElementById('letterBord')
        $letterBord.addEventListener('click', e => {
            if(e.target.matches('#letterBord > .clickHere')){
                console.log(e.target);
                if(confirm('정답입니다!\n다음 단계로 가시겠습니까?')) {
                    removeAllChild($letterBord);
                    gameBord(9, 1);
                }
            }
        })
        console.log($letterBord);
    })

    

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