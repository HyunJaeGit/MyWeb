document.getElementById('scroll-to-right').addEventListener('click', function () {
    // 원하는 right 이동 거리를 설정합니다.
    var rightDistance = 1600; // 조절 가능

    // 스크롤을 right 방향으로 이동합니다. 부드럽게 스크롤하기 위해 behavior 속성을 'smooth'로 설정합니다.
    window.scrollBy({ left: rightDistance, behavior: 'smooth' });
});

document.getElementById('scroll-to-left').addEventListener('click', function () {
    // 원하는 left 이동 거리를 설정합니다.
    var leftDistance = -1600; // 조절 가능

    // 스크롤을 left 방향으로 이동합니다. 부드럽게 스크롤하기 위해 behavior 속성을 'smooth'로 설정합니다.
    window.scrollBy({ left: leftDistance, behavior: 'smooth' });
});

// Left 버튼 요소 가져오기
var leftButton = document.getElementById('scroll-to-left');

// 스크롤 이벤트를 사용하여 스크롤 위치를 모니터링합니다.
window.addEventListener('scroll', function () {
    // 현재 스크롤 위치를 가져옵니다.
    var currentScroll = window.scrollX; // 또는 window.pageXOffset를 사용할 수도 있습니다.

    // 만약 스크롤 위치가 0 이하라면 Left 버튼을 숨깁니다.
    if (currentScroll <= 0) {
        leftButton.style.display = 'none'; // 숨김
    } else {
        leftButton.style.display = 'block'; // 보임
    }
});

// 초기 상태에서도 스크롤 위치를 확인하여 버튼을 숨길지 여부를 설정합니다.
var initialScroll = window.scrollX; // 초기 스크롤 위치 가져오기
if (initialScroll <= 0) {
    leftButton.style.display = 'none'; // 초기 상태에서 숨김
} else {
    leftButton.style.display = 'block'; // 초기 상태에서 보임
}

// Left 버튼 클릭 이벤트 처리는 그대로 유지합니다.
leftButton.addEventListener('click', function () {
    var leftDistance = -1600;
    window.scrollBy({ left: leftDistance, behavior: 'smooth' });
});