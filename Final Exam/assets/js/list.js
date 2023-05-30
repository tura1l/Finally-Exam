function getId(){
    fetch('https://6475e6cfe607ba4797dcdb22.mockapi.io/Children')
    .then(res=>res.json())
    .then(data=>{
        const tbody = document.querySelector('tbody')
        tbody.innerHTML = ''
        data.forEach(el => {
            tbody.innerHTML+=`
            <tr>
            <th>${el.id}</th>
            <td>${el.chName}</td>
            <td><img src="${el.chAvatar}" width="150"></td>
            <td>${el.chAge}</td>
            <td><a href="edit.html?${el.id}" class="btn btn-warning">Edit</a></td>
            <td><button class="btn btn-danger">Delete</button></td>
          </tr>
            `
        });
    })
}
getId()
document.addEventListener('click',function(e){
    const deleteBtn = e.target.closest('.btn-danger')
    if(deleteBtn){
       const delName = deleteBtn.parentElement.parentElement.children[1].innerText
        Swal.fire({
            title: delName,
            text: "Silmek Istediyinize Eminsiniz?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Beli',
            cancelButtonText: 'Xeyr'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch('https://6475e6cfe607ba4797dcdb22.mockapi.io/Children/'+deleteBtn.parentElement.parentElement.children[0].innerText,
                {
                    method: 'DELETE'
                }).then(res=>{
                    if (res.ok) {
                          Swal.fire(
                        'Silindi',
                        'Emeliyyat yerine yetirildi.',
                        'success'
                                )
                        getId()
                    }
                    else{
                        Swal.fire(
                            'Oooops!',
                            'Bir xeta bas verdi',
                            'danger'
                                    )
                    }
                })
                .catch(()=> Swal.fire('Oooops!','SYSTEM ERROR','danger'))
            
            }
          })
    }
})