const para = document.getElementById('text');

const changeContent = ()=>{
    const quotes=[
        'nội dung 1',
        'nội dung 2',
        'nội dung 3',
        'nội dung 4',

    ]
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    para.innerText=randomQuote;
}
//câu2
const btn2 = document.getElementById('.btn-2');
const randomMexColor = ()=>{
    const hex = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hex.length);
        const randomChar = hex[randomIndex];
        color += randomChar;
    }

    return color;


}
btn2.onclick = ()=>{
    para.style.color = randomMexColor();
}

//câu3

const btn3= document.getElementById("btn-3");
const randomRGBColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};
btn3.addEventListener('click') =() => {
    para.style.backgroundColor = randomRGBColor();
}