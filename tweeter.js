const lis = document.querySelectorAll('li')
for(let li of lis){
    li.addEventListener('click', function(){
        li.remove
    })
}
const tweet = document.querySelector('#userTweet')
const comments = document.querySelector('#comments')
tweet.addEventListener('submit', function(e) {
    e.preventDefault();
   // const userInput = document.querySelector('input')[0];
   // const userTweet = document.querySelector('input')[0];
    const username = userTweet.elements.name.value
     const tweet= userTweet.elements.tweet.value

    const addComment = document.createElement('li')
    const size = document.createElement('h3');
    bTag = document.createElement('b')
    bTag.append(username)
    addComment.append(bTag);
    addComment.append(size)
    addComment.append(`tweets: ${tweet}`)
    comments.append(addComment);


    
    
   
});


