import { useEffect, useState } from "react";

interface userProps {
    id: number;
}
const useUser = (user: userProps) => {
    const [userData, setUserData] = useState();
    useEffect(() => {
      if (user) {
        fetch("users.json").then((response) =>
          response.json().then((users) => {
            console.log(users)
            return setUserData(users.find((user:any) => user.id === user.id));
          })
        );
      }
    }, []);
  
    return userData;
  };


export default useUser;