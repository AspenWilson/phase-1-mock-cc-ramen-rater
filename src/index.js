// write your code here

//Declaring consts
const menu = document.querySelector('#ramen-menu')
const detail= document.querySelector('#ramen-detail')
const form= document.querySelector('#new-ramen')

function fetchImgs() {
    fetch (`http://localhost:3000/ramens`)
    .then (resp => resp.json())
    .then (json => displayImgs(json))
}

function displayImgs (ramens){
    ramens.forEach(ramen => {
       const img = document.createElement('img')
       img.src= `${ramen.image}`
       const name = document.createElement('span')
       name.innerHTML = `${ramen.name}`
       name.className = 'hidden'
       const place = document.createElement('span')
       place.innerHTML=`${ramen.restaurant}`
       place.className = 'hidden'
       const rating = document.createElement('span')
       rating.innerHTML = `${ramen.rating}`
       rating.className = 'hidden'
       const comment = document.createElement('span')
       comment.innerHTML= `${ramen.comment}`
       comment.className= 'hidden' 
        menu.appendChild(img)
        img.appendChild(name)
        img.appendChild(place)
        img.appendChild(rating)
        img.appendChild(comment)

//adding ramen details to page on click

        img.addEventListener('click', (e) => {
            let nameDisp = document.querySelector('#nameDisp')
            nameDisp.innerHTML =`${name.innerHTML}`
            let imgDisp = document.querySelector('#display-image')
            imgDisp.src = `${img.src}`
            let placeDisp= document.querySelector('#restaurantDisp')
            placeDisp.innerHTML = `${place.innerHTML}`
            let ratingDisp = document.querySelector
            ('#rating-display')
            ratingDisp.innerHTML = `${rating.innerHTML}`
            let commentDisp = document.querySelector('#comment-display')
            commentDisp.innerHTML= `${comment.innerHTML}`
        })
    })
}
fetchImgs()

//addinng event listener to form and adding to top
form.addEventListener('submit',(e) => {
    e.preventDefault()
    let newName = document.querySelector('#new-name')
    let newPlace = document.querySelector('#new-restaurant')
    let newImg = document.querySelector('#new-image')
    let newRating = document.querySelector('#new-rating')
    let newComment = document.querySelector('#new-comment')
    
    const imgNew = document.createElement('img')
    imgNew.src= newImg.value
    const nameNew = document.createElement('span')
    nameNew.innerHTML = newName.value
    nameNew.className = 'hidden'
    const placeNew = document.createElement('span')
    placeNew.innerHTML= newPlace.value
    placeNew.className = 'hidden'
    const ratingNew = document.createElement('span')
    ratingNew.innerHTML = newRating.value
    ratingNew.className = 'hidden'
    const commentNew = document.createElement('span')
    commentNew.innerHTML= newComment.value
    commentNew.className= 'hidden' 
     menu.appendChild(imgNew)
     imgNew.appendChild(nameNew)
     imgNew.appendChild(placeNew)
     imgNew.appendChild(ratingNew)
     imgNew.appendChild(commentNew)

     form.reset()

     imgNew.addEventListener('click', (e) => {
        let nameDisp = document.querySelector('#nameDisp')
        nameDisp.innerHTML =`${nameNew.innerHTML}`
        let imgDisp = document.querySelector('#display-image')
        imgDisp.src = `${imgNew.src}`
        let placeDisp= document.querySelector('#restaurantDisp')
        placeDisp.innerHTML = `${placeNew.innerHTML}`
        let ratingDisp = document.querySelector
        ('#rating-display')
        ratingDisp.innerHTML = `${ratingNew.innerHTML}`
        let commentDisp = document.querySelector('#comment-display')
        commentDisp.innerHTML= `${commentNew.innerHTML}`
    })

})