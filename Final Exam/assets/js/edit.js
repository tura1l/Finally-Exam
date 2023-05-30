let url = 'https://6475e6cfe607ba4797dcdb22.mockapi.io/Children/'+window.location.search.substring(1)
if (window.location.search.substring(1) == '') {
    window.location.href = "lists.html"
}
fetch(url)
.then(res=>{
    if(res.ok){
        return res.json();
    }
    else{
        window.location.href = "lists.html"
    }
}).then(data=>{
            document.querySelector('#picture').value = data.chAvatar;
            document.querySelector('#name').value = data.chName;
            document.querySelector('#age').value = data.chAge;
}).catch(err=>console.log(err))
const btn = document.querySelector('.btn-info');
btn.addEventListener('click', function(){
        fetch(url,{
            method:'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                chAvatar: document.querySelector('#picture').value,
                chName : document.querySelector('#name').value,
                chAge : document.querySelector('#age').value
            })
        }).then(res=>{
            if(res.ok){
                window.location.href = "lists.html"
            }
            else{
                errorAlert('Bir xəta baş verdi!')
            }
        }).catch(()=>errorAlert('Bir xəta baş verdi!'))
})
