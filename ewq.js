const fakereq = (url) =>{
    return new Promise((resolve,reject) => {
        const rand = Math.random();
        setTimeout(() =>{
            if(rand < 0.7){
                resolve('Done with Request');
            }
          reject("Request Error");
        },1000)
    }
    )
}
fakereq('file:///D:/webdev/a.html')
.then((data) =>{
    console.log("Request Completed")
    console.log('Status is:',data)

})
.catch((err) => {
    console.log("Oh no",err)
})