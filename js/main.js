import { FolderScroll } from './FolderScroll.js';

/* 동적으로 요소 추가 */
const init = (() =>{
  for(let i=1; i<=5; i++){
    const $section = document.createElement('section');
    $section.className = `section section-${i}`;
  
    const $h2 = document.createElement('h2');
    $h2.className = 'title';
    $h2.textContent = `Lorem ipsum dolor ${i}`;
  
    const $div = document.createElement('div');
    $div.className = 'content';
    
    const $img = new Image() 
    $img.src = 'https://source.unsplash.com/user/erondu/1600x900';
  
    $div.append($img); 
    $section.append($h2, $div);
    document.querySelector('.main-content-1 .sticky').append($section);
  }
})();

const folderScroll = new FolderScroll('.main-content-1', '.sticky');
const lenis = new Lenis();

lenis.on('scroll', _ => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

window.addEventListener('resize', () => folderScroll.init());
window.addEventListener('scroll', () => folderScroll.animate());