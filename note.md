폰트 추천

1. 네이버 나눔 글꼴
https://hangeul.naver.com/2017/nanum

- 나눔 고딕
<link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-gothic.css" rel="stylesheet">
font-family: 'NanumGothicLight';
font-family: 'NanumGothic';
font-family: 'NanumGothicBold';
font-family: 'NanumGothicExtraBold';

+ 나눔스퀘어라운드
<link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square-round.css" rel="stylesheet">
font-family: 'NanumSquareRoundLight';
font-family: 'NanumSquareRound';
font-family: 'NanumSquareRoundBold';
font-family: 'NanumSquareRoundExtraBold';

+ 나눔손글씨 꽃내음
<link href="https://hangeul.pstatic.net/hangeul_static/css/NanumGgocNaeEum.css" rel="stylesheet">
font-family: 'NanumGgocNaeEum';

+ 나눔손글씨 비상체
<link href="https://hangeul.pstatic.net/hangeul_static/css/NanumBiSangCe.css" rel="stylesheet">
font-family: 'NanumBiSangCe';


2. 구글 폰트
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">

- Black Han Sans
font-family: 'Black Han Sans', sans-serif;

- Noto Sans Korean
font-family: 'Noto Sans KR', sans-serif;



1. 게임시작 버튼을 누른다
2. 글자 9개가 나온다(gameData.id.1)
3. 글자 중에 정답을 누른다
4. confirm 다음판 yes 끝 no
5. 다음판
6. 글자 9개가 나온다(gameData.id.2)


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