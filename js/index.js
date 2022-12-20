const url = location.pathname

if (url.includes("feed.html")) {
  console.log("You are on the feed page");
  // directly target the login button 
  const login = document.getElementById('login')
  // then change it's inner text to logout
  login.innerText = "Logout"

  login.addEventListener('click', function () {
    // take back to homepage
    location.pathname = "/index.html"
  })

  const logout = document.getElementById('logout')
  console.log(logout)
  logout.innerText = "My account"
}


