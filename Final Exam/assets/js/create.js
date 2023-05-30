const btn = document.querySelector('.btn')
btn.addEventListener('click',function(){
    fetch('https://6475e6cfe607ba4797dcdb22.mockapi.io/Children',{
    method:'POST',
    headers: {
             'Content-Type':'application/json'
    },
    body: JSON.stringify({
        chAvatar : document.querySelector('#picture').value,
        chName: document.querySelector('#name').value,
        chAge: document.querySelector('#age').value
    })
}).then(res=>{
    if(res.ok){
               succes("Tebrikler!Isteyiniz qeyde alindi.");
                document.querySelector('#picture').value = '';
                document.querySelector('#name').value = '';
                document.querySelector('#age').value = '';
    }
    else{
        error("Oppps!Nese problem var.")
    }
}).catch(()=>error("Oppps!Nese problem var."))
})
