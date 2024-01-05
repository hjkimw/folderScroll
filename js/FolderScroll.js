export class FolderScroll {
  start = 0
  end = 0
  headerVh = 6
  constructor(wrapper, sticky) {
    this.wrapper = document.querySelector(wrapper);
    this.sticky = document.querySelector(sticky);
    this.children = this.sticky.querySelectorAll('.section')
    this.length = this.children.length
    this.contentVh = 96 - this.headerVh * this.length
    this.init();
  }

  init() {
    this.start = this.wrapper.offsetTop + 100
    this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight - 100

    this.children.forEach((child, i) => {
      child.style.bottom = -(100 - this.headerVh * (this.length - i)) + 'vh'
      child.querySelector('.title').style.height = this.headerVh + 'vh'
      child.querySelector('.content').style.height = this.contentVh + 'vh'
    })
  }

  animate() {
    this.children.forEach((child, i) => {
      const unit = (this.end - this.start) / this.length
      const s = this.start + unit * i + 100
      const e = this.start + unit * (i + 1)

      if (scrollY <= s) {
        child.style.transform = `translate3d(0, 0, 0)`
      } else if (scrollY >= e) {
        child.style.transform = `translate3d(0, ${-this.contentVh}%, 0)`
      } else {
        child.style.transform = `translate3d(0, ${(scrollY - s) / (unit - 100) * (-this.contentVh)}%, 0)`
      }
    })
  }
}
