$(()=>{
    $('#navbar').load('/components/navbar.html',loginifneeded)
    $('#footer').load('/components/footer.html')
})

 function loginifneeded() {
    
    window.currentUser=window.localStorage.user? JSON.parse(window.localStorage.user) : null;
    if(!currentUser){
        let user
        
        $.post('/api/users',{},{user})
            if(user){
             console.log(user);
                window.localStorage.user=JSON.stringify(user)
                 currentUser=user
                 $('#nav-username').text(currentUser.username)
            }
    }
    else {
        console.log('resuming session as ', currentUser.username)
        console.log($('#nav-username'))
        $('#nav-username').text(currentUser.username)
      }
}