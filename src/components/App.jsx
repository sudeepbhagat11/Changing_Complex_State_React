import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function setDetails(events) {
    // const value = events.target.value;
    // const name = events.target.name;
    const { value, name } = events.target;

    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          lName: value,
          fName: prevValue.fName,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          email: value,
          lName: prevValue.lName,
          fName: prevValue.fName
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={setDetails} />
        <input name="lName" placeholder="Last Name" onChange={setDetails} />
        <input name="email" placeholder="Email" onChange={setDetails} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
