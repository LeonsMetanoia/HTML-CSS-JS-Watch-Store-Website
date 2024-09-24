// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");
//ketka menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar side bar untuk keluar dari menu

const menus = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menus.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Form Validation

/*function validateName() {
  var name = document.getElementById('contact-name').value;

  if(name.length == 0){
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
  {
    nameError.innerHTML = 'Write Full Name';
    return false;
  }
  nameError.innerHTML = 'VALID :)';
  return true;





}*/


const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>{
  let messages = []
  if (name.value == '' || name.value == null){
    messages.push('Name is required')
  }
  if(email)
  if (messages.length > 0){
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
  

})






