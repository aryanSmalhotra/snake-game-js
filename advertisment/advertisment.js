const dcc = (color,delay) => {
    return new Promise((resolve , reject) => {
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        },delay)
    })
}
dcc('red',1000)
dcc('orange',2000)
dcc('yellow',3000)
dcc('green',4000)
dcc('cyan',5000)