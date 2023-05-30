
    fetch('https://6475e6cfe607ba4797dcdb22.mockapi.io/Children')
    .then(res=>res.json())
    .then(data=>{
        const row = document.querySelector('.api')
        row.innerHTML = ''
        data.forEach(el => {
            row.innerHTML+=`
            <div class="item col-md-4 col-sm-6 col-xs-12">
                     <div class="image">
                         <img class="babe1 w-100" src="${el.chAvatar}" alt="">
                     </div>
                     <div class="imgwrite d-flex mb-4">
                         <p class="name">${el.chName},</p>
                         <p class="age">${el.chAge} yrs.old</p>
                         </div>
                        </div>
            `
        });
    })