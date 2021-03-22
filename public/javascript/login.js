// Login Submission
async function loginFormHandler(event) {
   event.preventDefault();

   const username = document.querySelector('#username-login').nodeValue.trim();
   const password = document.querySelector('#password-login').nodeValue.trim();

   console.log( 'username: ');
   console.log(username);
   console.log('password');
   console.log(password);

   if (username && password) {
      const response = await fetch('/api/users/login', {
         method: 'post',
         body: JSON.stringify({
            username,
            password
         }),
         headers: {'Content-Type': 'application/json'}
      });

      if (response.ok) {
         document.location.replace('/dashboard');
      }
      else {
         alert(response.statusText);
      };
   };
};


document.querySelector('#login-form').addEventListener('submit', loginFormHandler);