// localStorage.user = {
//   username: "",
//   password: ""
// }

if (localStorage.user === undefined) {
  window.location.href = "/pages/auth.html"
}