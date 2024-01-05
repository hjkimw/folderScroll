export class FolderScroll {
  start = 0;
  end = 0;
  headerVh = 6;
  contentPaddingTop = 94; // header UI 겹치지 않게 위에 여백공간 설정
  constructor({ wrapper = '.wrapper', stickyWrapper = '.sticky-wrapper'}) {
    this.$wrapper = document.querySelector(wrapper);
    this.$sticky = document.querySelector(stickyWrapper);
    this.$children = this.$sticky.querySelectorAll('section');
    this.length = this.$children.length;
    this.contentVh = this.contentPaddingTop - this.headerVh * this.length;
  }

  init({contentTitle = '.title', content = '.content'}) {
    this.start = this.$wrapper.offsetTop + 100;
    this.end = this.$wrapper.offsetTop + this.$wrapper.offsetHeight - innerHeight - 100;

    this.$children.forEach((child, i) => {      
      child.style.bottom = -(100 - this.headerVh * (this.length - i)) + 'vh'
      child.querySelector(contentTitle).style.height = this.headerVh + 'vh'
      child.querySelector(content).style.height = this.contentVh + 'vh'
    });
  }

  animate() {
    this.$children.forEach((child, i) => {
      const unit = (this.end - this.start) / this.length;
      const s = this.start + unit * i + 100;
      const e = this.start + unit * (i + 1);

      if (scrollY <= s) {
        child.style.transform = `translate3d(0, 0, 0)`;
      } else if (scrollY >= e) {
        child.style.transform = `translate3d(0, ${-this.contentVh}%, 0)`;
      } else {
        child.style.transform = `translate3d(0, ${((scrollY - s) / (unit - 100)) * -this.contentVh}%, 0)`;
      }
    });
  }
}
