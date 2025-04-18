import axios from "axios";
import { SERVER_URI } from "../utils/constants-env";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/store/feedSlice";
import UserCard from "./UserCard";

function Feed() {
  const dispatch = useDispatch();
  const feed = useSelector((store: any) => store.feed);

  const fetchFeed = async () => {
    if (feed) {
      return;
    }
    try {
      const res = await axios.get(SERVER_URI + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data.data));
    } catch (err) {}
  };

  useEffect(() => {
    fetchFeed();
  }, []);
  if (!feed) return;
  if (feed.length === 0) {
    return (
      <h1 className="text-2xl text-white text-center my-5">No Feed Found</h1>
    );
  }
  return (
    <div className="flex justify-center items-center my-10">
      {feed && <UserCard user={feed[0]} />}
    </div>
  );
}

export default Feed;
