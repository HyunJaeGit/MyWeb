
// 스크롤 최상단으로 이동하는 버튼을 처리
var scrollToTopButton = document.getElementById('scroll-to-top');

scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


