//=============== 전역변수, 함수 정의부분 =============//
const gameData = [{
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
    while (!!$parentNode.children.length) {
        $parentNode.removeChild($parentNode.firstElementChild)
    }
}

// 10초마다 clickHere에 hint 클래스 부여하는 함수
function clickhint (target){
    const $hint = document.querySelector('.clickHere')
    $hint.classList.toggle('hint');
}

//글자 level개 깔기 함수
function gameBord(maxNum, idxNum) {
    const $letterBord = document.getElementById('letterBord');

    //gameDataIndex
    const $answer = gameData[idxNum].answerLetter;
    const $question = gameData[idxNum].questionLetter;
    const $randomNum = Math.floor(Math.random() * maxNum) + 1;
    const $virtual = document.createDocumentFragment();

    for (let i = 1; i <= maxNum; i++) {
        // console.log(`i: ${i}, random: ${$randomNum}`);
        //가상에 밀어넣을 숫자 div
        const $newDiv = document.createElement('div');

        // level개의 숫자중 정답 만들기
        if (i === $randomNum) {
            $newDiv.textContent = $answer;
            $newDiv.classList.add('clickHere')
            //   console.log(`answer i: ${i}`);
        } else if (i !== $randomNum) {
            $newDiv.textContent = $question;
        }
        //가상의 태그
        $virtual.appendChild($newDiv);
        // 가상의 태그를 보드 판에 넣기
        $letterBord.appendChild($virtual);
    }
    // console.log('-------');
}

// 게임판 level개의 숫자로 만들기
function playgame(level) {
    // 몇번째 판인지 구별하는 함수
    let idx = 1;
    // console.log(`idx: ${idx}, lev: ${level}`);

    // 첫판 깔기
    gameBord(level, 0);

    // level별 css적용
    const $letterBord = document.getElementById('letterBord');
    if (level === 9) {
        $letterBord.classList.add('level9')
        // console.log($letterBord.classList);
    } else if (level === 49) {
        $letterBord.classList.add('level49')
        // console.log($letterBord.classList);
    } else if (level === 100) {
        $letterBord.classList.add('level100')
        // console.log($letterBord.classList);
    }

    // 정답을 클릭했을 때 새로운 판 깔기
    $letterBord.addEventListener('click', e => {
        if (e.target.matches('#letterBord > .clickHere')) {
            // 5번째의 판이 끝이 났을때 판 지우기
            if (idx === 5) {
                removeAllChild($letterBord);
                alert('1~5판 종료');
                // 다음 난이도 도전 알람 이후 다음 난이도 열기
                if (level === 9) {
                    if (confirm('중 난이도에 도전하시겠습니까?')) {
                        idx = 1;
                        $letterBord.classList.replace('level9', 'level49')
                        level = 49;
                        playgame(level);
                    }
                } else if (level === 49) {
                    if (confirm('상 난이도에 도전하시겠습니까?')) {
                        idx = 1;
                        $letterBord.classList.replace('level49', 'level100')
                        level = 100;
                        playgame(level);
                    }
                } else if (level === 100) {
                    alert('게임 클리어!')
                    window.location.reload()
                }

                return;
            }
            // confirm('정답입니다!\n다음 단계로 가시겠습니까?');
            // console.log(`idx: ${idx}, lev: ${level}`);
            // letterBord의 자식 지우기
            removeAllChild($letterBord);
            // 새로운 판 깔기
            gameBord(level, idx++);
            // console.log(`idx: ${idx}, lev: ${level}==`);
        }

    })
}




//=============== 메인 코드 실행부분 ===============//
(function () {

    // 난이도 선택 설정
    // 변수 지정
    const $levelWrap = document.querySelector('.level-wrap');
    const $startBtn = document.querySelector('.startBtn');

    $levelWrap.addEventListener('click', e => {
        const $explain = document.getElementById('explain');
        // const $levelWrap = document.querySelector('levelWrap');
        // console.log($levelWrap);
        // console.log(e.target);
        if (e.target.matches('.easy')) {
            // console.log('쉬움');
            // 설명창 사라지기
            $explain.classList.add('disappear')
            // 숫자 9개 보드판 깔기
            playgame(9);
        } else if (e.target.matches('.nomal')) {
            // console.log('중간');
            // 설명창 사라지기
            $explain.classList.add('disappear')
            // 숫자 49개 보드판 깔기
            playgame(49);
        } else if (e.target.matches('.hard')) {
            // console.log('어려움');
            // 설명창 사라지기
            $explain.classList.add('disappear')
            // 숫자 100개 보드판 깔기
            playgame(100);
        } else {
            return;
        }
    })

    //힌트 버튼을 클릭하면 정답이 굵어졌다 돌아가는 이벤트
    const $checkboxHint = document.querySelector('.lnrmagnifie');
    $checkboxHint.addEventListener('click', e => {
        clickhint(e.target);
        setTimeout(clickhint, 100);
    })
    


})() // end 전체 익명함수