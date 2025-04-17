import axios from "axios";
import { SERVER_URI } from "../utils/constants-env";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/store/connectionSlice";
import { useEffect } from "react";

function Connections() {
  const dispatch = useDispatch();
  const connections = useSelector((store: any) => store.connections);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(SERVER_URI + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res?.data?.data));
    } catch (error) {}
  };

  useEffect(() => {
    fetchConnections();
  });

  if (!connections) return;
  if (connections.length === 0) {
    return (
      <h1 className="text-2xl text-white text-center my-5">
        No Connections Found
      </h1>
    );
  }
  return connections.map((connection: any) => {
    const { _id, age, firstName, lastName, gender, photos, about } = connection;
    return (
      <div
        key={connection._id}
        className="card card-side bg-base-300 shadow-sm my-5 w-1/3 m-auto p-4 flex items-center"
      >
        <figure>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-24 h-24 rounded-full ring ring-offset-2">
              <img src={photos[0]} />
            </div>
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>{age && gender && age + " ," + gender}</p>
          <p>{about}</p>
        </div>
      </div>
    );
  });
}

export default Connections;
