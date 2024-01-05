import { FolderScroll } from './FolderScroll.js';

/* 생성할 콘텐츠 요소 개수 */
const sectionLength = 5;

/* 동적으로 요소 추가 */
const init = (stickyTarget) => {
  for (let i = 1; i <= sectionLength; i++) {
    const $section = document.createElement('section');
    $section.className = `section section-${i}`;

    const $h2 = document.createElement('h2');
    $h2.className = 'title';
    $h2.textContent = `content ${i}`;

    const $div = document.createElement('div');
    $div.className = 'content';

    const $img = new Image();
    $img.src = 'https://source.unsplash.com/user/erondu/1600x900';

    $div.append($img);
    $section.append($h2, $div);
    document.querySelector(stickyTarget).append($section);
  }
};
init('.sticky-list');

const folderScroll = new FolderScroll({
  wrapper: '.main-content',
  stickyWrapper: '.sticky-list',
});

// 초기화
folderScroll.init({
  contentTitle: '.title',
  content: '.content',
});

const lenis = new Lenis();

lenis.on('scroll', (_) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

window.addEventListener('resize', () => {
  folderScroll.init({
    contentTitle: '.title',
    content: '.content',
  });
});
window.addEventListener('scroll', () => folderScroll.animate());
