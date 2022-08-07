import React, { useEffect, useState } from "react";
import axios from "axios";

const ReviewPage = () => {
  const [chats, setChats] = useState([]);
  const fetchStats = async () => {
    const { data } = await axios.get("/info");
    console.log(data);
    setChats(data);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return <div key="key">{chats.uni}</div>;
};

export default ReviewPage;
