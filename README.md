## 🗂️ FolderScroll

<img src="./demo.gif" width="800px"/>


```javascript

/**
 *
 * @param {string} mainContent - 전체 요소를 담는 메인 요소
 * @param {string} sticky - sticky 시킬 요소들을 담는 요소
 */
const folderScroll = new FolderScroll('.main-content-1', '.sticky');

.addEventListener('resize', () => folderScroll.init()); 
.addEventListener('scroll', () => folderScroll.animate()); 
```