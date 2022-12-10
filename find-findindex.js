function findUserByUsername(usersArray, username) {
  return usersArray.index(function(user){
    return user.username === username
  })
}

function removeUser(usersArray, username) {
  let foundIdx = usersArray.findIndex(function(user){
    return user.username === username;
  }); if(foundIdx === -1) return;
    return usersArray.splice(foundIdx, 1)[0];
}