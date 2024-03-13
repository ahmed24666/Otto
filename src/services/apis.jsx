const baseUrl = process.env.BASE_URL;

export const SignupApi = () => {
    return fetch(`https://domain-name.com/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email:"mrahmed2466@gmail.com",
        username:"ahmed242424",
        name:"Ahmed",
        phone:"01004993015",
        password:"12345@Ao",
      }),
    }).then((response) => {
      return response.json();
    });
  };