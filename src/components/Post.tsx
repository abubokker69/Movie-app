import { FC, useEffect, useState } from "react";
import Topbar from "./Topbar";
import axios from "axios";

interface data {
  id?: number;
  title?: string;
  url?: any;
}

const Post: FC<data> = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = "https://jsonplaceholder.typicode.com/photos";
  const fetchData = (apiUrl) => {
    setLoading(true);
    axios
      .get(apiUrl)
      .then((response: any) => {
        const data = response.data;
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    fetchData(apiUrl);
  }, []);
  return (
    <>
      <Topbar />
      {loading && (
        <div className="flex justify-center items-center h-screen w-screen">
          <div className="border-t-4 border-blue-500 border-solid rounded-full h-12 w-12 animate-spin"></div>
        </div>
      )}
      <div className="flex flex-wrap w-2/3 gap-4 mx-auto p-4">
        {data.map((item) => (
          <div key={item.id} className="p-4 shadow-xl w-[200px]">
            <h1>{item.title}</h1>
            <img src={item.url} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;
