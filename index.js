const userData = {
    name: "anthony",
    email: "anthonykimlao@gmail.com"
  };
  
  // method: "POST" is missing from the object below
  function submitData(name, email){
    const userData = {
        name: name,
        email: email
      };
    const userStringData = JSON.stringify(userData);

   return fetch("http://localhost:3000/users",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        body: userStringData
    })
    .then(res=>res.json())
    .then(data=>updateDOM(data))
    .catch(error=> {
        let message = "Unauthorized Access"
        const errorDiv = document.createElement("div");
        errorDiv.textContent = message;
        document.body.appendChild(errorDiv);
      });
  }
  
  submitData("steve", "steve@steve.com")

  function updateDOM(data){ 
    let newElement = document.createElement('li')
    newElement.innerHTML = data.id;
    document.body.appendChild(newElement);
  }
