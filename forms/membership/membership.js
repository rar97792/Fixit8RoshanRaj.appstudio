let user_name = ""

let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

subButton.onclick=function(){
  user_name = nameInput.value
  if (members.includes(user_name) == true) {
    Label1.value = "They are a member"
  } else {
    Label1.value = "Not a member, but your name has been added now"
    members.push(user_name)
  }
}