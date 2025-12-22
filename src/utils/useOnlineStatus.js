import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    addEventListener("online", () => {
      setOnlineStatus(true);
    });

    addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);

  //boolean values
  return onlineStatus;
};

export default useOnlineStatus;
