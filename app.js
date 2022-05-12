//=============== 전역변수, 함수 정의부분 =============//
const gameData = [
    {
        id: 1,
        answerLetter: 'O1',
        questionLetter: '홋1'
    },
    {
        id: 2,
        answerLetter: 'O2',
        questionLetter: '홋2'
    },
    {
        id: 3,
        answerLetter: 'O3',
        questionLetter: '홋3'
    },
    {
        id: 4,
        answerLetter: 'O4',
        questionLetter: '홋4'
    },
    {
        id: 5,
        answerLetter: 'O5',
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
    const $answer = gameData[idxNum].answerLetter;
    const $question = gameData[idxNum].questionLetter;
    const $randomNum = Math.floor(Math.random() * maxNum) + 1;
    const $virtual = document.createDocumentFragment();

    for (let i = 1; i <= maxNum; i++) { 
        console.log(`i: ${i}, random: ${$randomNum}`);
            //가상의 태그
            //가상에 밀어넣을 숫자 div
        const $newDiv = document.createElement('div');
       if (i === $randomNum) {
          $newDiv.textContent = $answer;
          $newDiv.classList.add('clickHere')
          console.log(`answer i: ${i}`);
      } else if ( i !== $randomNum){
         $newDiv.textContent = $question;
      }
      $virtual.appendChild($newDiv);
      $letterBord.appendChild($virtual);
    }
    console.log('-------');
 }



//=============== 메인 코드 실행부분 ===============//
(function() {
    //새판 깔고 정답 맞추기
    const $startBtn = document.getElementById('startBtn');

    let idx = 1;
    $startBtn.addEventListener('click', function(){

        // id1 판 깔기
        gameBord(9, 0);
            // 정답 맞추기
        const $letterBord = document.getElementById('letterBord');
        $letterBord.addEventListener('click', e => {
            if(e.target.matches('#letterBord > .clickHere')){
                if (idx === 5){
                    removeAllChild($letterBord);
                    alert('1~5판 종료');
                    return;
                }
                confirm('정답입니다!\n다음 단계로 가시겠습니까?');
                removeAllChild($letterBord);
                gameBord(9, idx++);
            } //end if(e.target.matches
        }) // end $letterBord.addEventListener
    }) //end $startBtn.addEventListener    
})() // end 전체 익명함수