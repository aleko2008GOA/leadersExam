const sign_up = document.getElementById('sign_up');
const sign_in = document.getElementById('sign_in');
const log_in = document.getElementById('log_in');
const all_users = document.getElementById('tableContainer');
const users_table = document.getElementById('all_users');
const back = document.getElementById('back');
const sign_in_button = document.getElementById('sign_in_button');
const sign_up_button = document.getElementById('sign_up_button');

const password = 'GOATheBest';
let isModer = false;

const users = localStorage.users ? JSON.parse(localStorage.users) : [];
getusers();
let tds = document.querySelectorAll('td');

sign_up.addEventListener('submit', (e) =>{
  e.preventDefault();

  const user = {
    name: e.target.elements.name.value,
    email: e.target.elements.email.value,
    age: e.target.elements.age.value,
    par_name: e.target.elements.par_name.value,
    fb: e.target.elements.fb.value,
    par_fb: e.target.elements.par_fb.value,
  }
  users.push(user);
  localStorage.users = JSON.stringify(users);
  getusers();
  
  tds = document.querySelectorAll('td');
  sign_up.style.display = 'none';
  sign_in.style.display = 'flex';
});

log_in.addEventListener('click', () =>{
  sign_up.style.display = 'none';
  sign_in.style.display = 'flex';
});

sign_in.addEventListener('submit', (e) =>{
  e.preventDefault();
  
  const user = {
    role: e.target.elements.moderator_viewer.value,
    password: e.target.elements.moderator_password.value
  }

  if(user.role === 'moderator' && user.password === password){
    all_users.style.display = 'flex';
    sign_in.style.display = 'none';
    isModer = true;
    
    tds.forEach(elem =>{
      elem.addEventListener('click', (e) =>{
        if(isModer){
          const ask = prompt('Change?');
          e.target.textContent = ask;
        }
      });
    });
  }
  else if(user.role === 'viewer'){
    sign_in.style.display = 'none';
    all_users.style.display = 'flex';
    isModer = false;
    console.log('a')
  }
});

function getusers(){
  users_table.innerHTML = '';
  users.forEach(user =>{
    users_table.innerHTML += `
      <tr>
        <td contenteditable = "false">${user.name}</td>
        <td contenteditable = "false">${user.email}</td>
        <td contenteditable = "false">${user.age}</td>
        <td contenteditable = "false">${user.par_name}</td>
        <td contenteditable = "false">${user.fb}</td>
        <td contenteditable = "false">${user.par_fb}></td>
      </tr>
    `
  });
}

back.addEventListener('click', () =>{
  sign_up.style.display = 'flex';
  sign_in.style.display = 'none';
});

sign_in_button.addEventListener('click', () =>{
  sign_in.style.display = 'flex';
  sign_up.style.display = 'none';
  all_users.style.display = 'none';
});

sign_up_button.addEventListener('click', () =>{
  sign_up.style.display = 'flex';
  sign_in.style.display = 'none';
  all_users.style.display = 'none';
});