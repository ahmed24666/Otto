const baseUrl = process.env.BASE_URL;

export const SignupApi = (email, name, username, password, phone) => {
  var formData = new FormData();
  formData.append("email", email);
  formData.append("name", name);
  formData.append("username", username);
  formData.append("password", password);
  formData.append("phone", phone);

  fetch("https://siedra-shop.com/api/auth/register", {
    method: "POST",
    body: formData,
  }).then((response) => response.json()).then((data) => {
    console.warn(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
  // success 
  // data: {message: "user registered successfully, check your email to verify your account."}
  // message: "Success"
  // status: true
  // error
  // errors: (2) ['This username is already taken.', 'This email is already taken.'] message: "Error" status: false
};
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
