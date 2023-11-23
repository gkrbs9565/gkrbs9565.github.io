
const $text = document.querySelector(".typing .text");

// 글자 모음
const letters = [
    "INDEX팀의 포트폴리오입니다",
];

// 글자 입력 속도
const speed = 150;
let i = 0;

// 타이핑 효과
const typing = async () => {
    const letter = letters[i].split("");

    while (letter.length) {
        await wait(speed);
        $text.innerHTML += letter.shift();
    }

    // 잠시 대기
    await wait(800);

}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1500);