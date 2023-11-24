//Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
const p = document.querySelector('p');
p.insertAdjacentHTML('afterend', '<a href="https://www.facebook.com/">Facebook</a>')

//Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 5 ký tự trong đoạn văn (background = “yellow”)
const text = p.textContent;
const words = text.split(/\s+/); //tách đoạn văn thành các từ
const specialChar= /[^a-zA-Z0-9]/; //Kiểm tra kí tự đặc biệt
words.forEach(word => {
    if(word.length>= 5 && !specialChar.test(word)){
       
         //word.classList.add('backgroud');
        //console.log(newWord);
        //word.replace(newWord)
    }

})
//đếm số từ 
const countWord = words.length;
const div = document.createElement('div');
div.innerText = countWord;
p.insertAdjacentElement('afterend', div);

//Thay thế ký hiệu (, - dấu phẩy) => 🤔 và (. - dấu chấm) => 😲

const replacedText = text
  .replace(/,/g, '🤔')
  .replace(/\./g, '😲');
  p.textContent = replacedText;