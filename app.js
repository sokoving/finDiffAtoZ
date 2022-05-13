
//=============== 전역변수, 함수 정의부분 =============//
const gameData = [
    {
        id: 1,
        answerLetter: '웃',
        questionLetter: '훗'
    },
    {
        id: 2,
        answerLetter: '웃',
        questionLetter: '윳'
    },
    {
        id: 3,
        answerLetter: '웃',
        questionLetter: '욧'
    },
    {
        id: 4,
        answerLetter: '웃',
        questionLetter: '읏'
    },
    {
        id: 5,
        answerLetter: '웃',
        questionLetter: '옷'
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
        // console.log(`i: ${i}, random: ${$randomNum}`);
            //가상의 태그
            //가상에 밀어넣을 숫자 div
        const $newDiv = document.createElement('div');
       if (i === $randomNum) {
          $newDiv.textContent = $answer;
          $newDiv.classList.add('clickHere')
        //   console.log(`answer i: ${i}`);
      } else if ( i !== $randomNum){
         $newDiv.textContent = $question;
      }
      $virtual.appendChild($newDiv);
      $letterBord.appendChild($virtual);
    }
    // console.log('-------');
 }

function playgame(level) {
    let idx = 1;
    gameBord(level, 0);
            // 정답 맞추기
        const $letterBord = document.getElementById('letterBord');
        if (level === 9) {
            $letterBord.style.fontSize = '80px'
            $letterBord.classList.add('leve9')
            console.log($letterBord.classList);
        } else if (level === 49) {
            $letterBord.style.fontSize = '25px'
            $letterBord.classList.add('leve49')
            console.log($letterBord.classList);
        } else if (level === 100) {
            $letterBord.style.fontSize = '18px'
            $letterBord.classList.add('leve100')
            console.log($letterBord.classList);

        }
        $letterBord.addEventListener('click', e => {
            if(e.target.matches('#letterBord > .clickHere')){
                if (idx === 5){
                    removeAllChild($letterBord);
                    alert('1~5판 종료');
                    return;
                }
                confirm('정답입니다!\n다음 단계로 가시겠습니까?');
                removeAllChild($letterBord);
                gameBord(level, idx++);
            }
            //end if(e.target.matches
            if(idx === 5 && level === 5 && confirm('다음 난이도에 도전하시겠습니까?')) {
                playgame(49);
            } else if (idx === 5 && level === 49 & confirm('다음 난이도에 도전하시겠습니까?')) {
                playgame(100);
            }else {
                return;
            }
        })
}




//=============== 메인 코드 실행부분 ===============//
(function() {

    

    // 난의도 선택 설정
    const $explain = document.getElementById('explain');
    const $levelWrap = document.querySelector('.level-wrap');
    const $startBtn = document.querySelector('.startBtn');
    $levelWrap.addEventListener('click', e => {
        // console.log(e.target);
        if (e.target.matches('.easy')) {
            console.log('쉬움');
            $explain.classList.add('disappear')
            playgame(9);
        } else if (e.target.matches('.nomal')) {
            console.log('중간');
            $explain.classList.add('disappear')
            playgame(49);
        } else if (e.target.matches('.hard')) {
            console.log('어려움');
            $explain.classList.add('disappear')
            playgame(100);
        } else {
            return;
        }
    })




    //새판 깔고 정답 맞추기
    
    
    $startBtn.addEventListener('click', function(){

        // id1 판 깔기
         // end $letterBord.addEventListener
    }) //end $startBtn.addEventListener   
    
})() // end 전체 익명함수