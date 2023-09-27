var a = document.querySelector("h5")

var addFriend=document.querySelector("#add")
var check = 0

addFriend.addEventListener("click",function(){
    if(check == 0){
        a.innerHTML = "Friends"
        a.style.color = "green"
        addFriend.innerHTML = "Remove Friend"
        check=1
    }
    else{
        a.innerHTML = "Stranger"
        a.style.color = "Red"
        addFriend.innerHTML = "Add Friend"
        check = 0
    }
})


