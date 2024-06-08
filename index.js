const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main=document.getElementById("main")
 
for(let i=0;i<posts.length;i++){
    main.innerHTML +=`<section>
            <div class="credentials container">
                <img src= ${posts[i].avatar} alt="${posts[i].name} profile picture" class="avatar" />
                <h3>${posts[i].name}</h3>
                <p class="location">${posts[i].location}</p>
            </div>
        </section>

        <section>
            <div class="post container">
                <img src=${posts[i].post} alt="${posts[i].name} Potrait" class="postcontent" />
            </div>
        </section>

        <section>
            <div class="interaction container">
                <button class="icon" id="like-btn-${i}"><img src="images/icon-heart.png" alt="heart icon for liking" ></button>
                <button class="icon"><img src="images/icon-comment.png" alt="comment icon" /></button>
                <button class="icon"><img src="images/icon-dm.png" alt="aeroplane shape share icon"/></button>
            </div>
        </section>

        <section>
            <div class="output container">
                <p class="likes"><span id="likes-cnt-${i}">${posts[i].likes}</span> likes</p>
                <p class="last-para"><span class="username">${posts[i].username}</span><span class="comment"> ${posts[i].comment}</span></p>
            </div>
        </section>`
}

// Attach event listeners
for (let i = 0; i < posts.length; i++) {
    const likeBtn = document.getElementById(`like-btn-${i}`)
    const likesCnt = document.getElementById(`likes-cnt-${i}`)
    let isLike=false
    likeBtn.addEventListener("click", function() {
        
        if(!isLike){
            posts[i].likes++
            likesCnt.innerHTML = posts[i].likes 
            isLike =true
        } else{
            posts[i].likes--
            likesCnt.innerHTML = posts[i].likes
            isLike = false
        }
    })
}





