import React from "react";
import Profile from "./Profile/Profile";

const user={
  name:"Lambda",
  bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  profession:"junior web developer",
  src: "/lambda.png"
};


export default function App() {
  const handleName = () => alert(user.name);
  return (
    <div>
      <Profile name={user.name} bio={user.bio} profession={user.profession} src={user.src} handleName={handleName} />
    </div>
  );
}