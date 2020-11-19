class SoldOut {
  constructor() {
    this.optgroupAll = document.querySelectorAll('optgroup');
  }
  
  soldOut() {
    this.optgroupAll.forEach((optgroup) => {
      if (optgroup.disabled !== true) {
        // 단품 품절
        const option = optgroup.querySelectorAll('option');
        option.forEach((opt) => {
          if (opt.disabled === true) {
            opt.innerText += `(Sold Out)`;
          }
        })
      } else {
        // 그룹 품절
        let menu = optgroup.getAttribute('label');
        optgroup.label = `${menu}(Sold Out)`;
      }
    })
  }
}

const soldout = new SoldOut();
soldout.soldOut();