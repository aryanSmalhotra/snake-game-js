const button = document.querySelector('button');
button.addEventListener('click', function(){
    const r = Math.floor(Math.random() *255);
   const g = Math.floor(Math.random() *255);
   const b = Math.floor(Math.random() *255);
   const colorPicker = `rgb(${r},${g},${b})`
   document.body.style.backgroundColor = colorPicker;
   h1.innerText = colorPicker;
})
const button2 = document.querySelector('button2');
button2.addEventListener('click', function(){
    const r = Math.floor(Math.random() *255);
   const g = Math.floor(Math.random() *255);
   const b = Math.floor(Math.random() *255);
   const a = Math.floor(Math.random() *5);
   const colorPicker2 = `rgb(${r},${g},${b},${a})`
   document.body.style.backgroundColor = colorPicker2;
   h1.innerText = colorPicker2;
})
