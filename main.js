
const linkSocialMedia = {
    github: "dragonic4",
    youtube: "youtubek7",
    facebook: "facebook",
    instagram: "instagram",
    twitter: "twitter"
}
function changeSocialMedia(){
for (let li of socialinks.children){
const social = li.getAttribute('class')
li.children[0].href =  `https://${social}.com/${links[social]}`

//alert(li.children[0].href)
}
}

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linkSocialMedia.github}`
    
    fetch (url).then(response => response.json())
               .then(data => {
                   userName.textContent = data.name
                   userBio.textContent = data.bio
                   userLink.href = data.html_url
                   userImage.src = data.avatar_url
                   userLogin.textContent = data.login
                   
               })                 
}
getGitHubProfileInfos()
