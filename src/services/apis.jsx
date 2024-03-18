const baseUrl = process.env.BASE_URL;

export const SignupApi = () => {
  
    
    var formData = new FormData();
    formData.append('email', "mrahmed2466kjhjhk@gmail.com");
    formData.append('name', "Ahmed");
    formData.append('username', "ahmed2hfg42424");
    formData.append('password', "12345@Ao");
    formData.append('phone', "01004993015");
    
    fetch('https://siedra-shop.com/api/auth/register', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        document.querySelector('.response').innerText = JSON.stringify(error);
    });
  // return fetch(`https://siedra-shop.com/api/carousels/`, {
  //   method: "GET",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     email: "mrahmed2466@gmail.com",
  //     username: "ahmed242424",
  //     name: "Ahmed",
  //     phone: "01004993015",
  //     password: "12345@Ao"
  //   }),
  // }).then((response) => {
  //   return response.json();
  // });
};
