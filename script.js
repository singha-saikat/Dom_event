console.log('Today we learn Javascript DOM event');
function makeSkyblue(){
    document.body.style.backgroundColor ='skyblue';
}
document.getElementById('make-yellow').addEventListener('click',function(){
    document.body.style.backgroundColor = 'yellow';
})
document.getElementById('btn-update').addEventListener('click',function(){
    const storeText = document.getElementById('input-text');
    // console.log(storeText);
    const inputText = storeText.value;
    // console.log(inputText);
   const p =  document.getElementById('peragraph')
   p.innerText = inputText;
   storeText.value =''
})
document.getElementById('Hello-mr').addEventListener('click',function(){
    const p =  document.getElementById('peragraph')
    p.style.backgroundColor = 'skyblue';
})

document.getElementById('btn-post').addEventListener('click',function(){
    const textStore = document.getElementById('text-area');
    
    const storeComment = textStore.value;
    
    const commentContainer = document.getElementById('comment -container');
    const p = document.createElement('p');
    p.innerText = storeComment;
    commentContainer.appendChild(p);
    textStore.value ='';
    

})

document.getElementById('inpuT-Text').addEventListener('keyup', function(){
    // const text = event.target.value;
    const inputTexT = document.getElementById('inpuT-Text')
    const text = inputTexT.value

    const deleteBtn = document.getElementById('make-delete');
    if(text === 'delete'){
        deleteBtn.removeAttribute('disabled');
    }
    else{
        deleteBtn.setAttribute('disabled',true);
    }
})
document.getElementById('make-delete').addEventListener('click',function(){
    document.getElementById('header-info').style.display ='none';
})
