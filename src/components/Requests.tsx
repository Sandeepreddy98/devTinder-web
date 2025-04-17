import axios from "axios";
import { SERVER_URI } from "../utils/constants-env";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/store/requestSlice";

function Requests() {
  const requests = useSelector((store: any) => store.requests);
  const dispatch = useDispatch();

  const fetchRequests = async () => {
    try {
      const res = await axios.get(SERVER_URI + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (error) {
      console.error(error);
    }
  };

  const handleRequest = async (status: string, req_id: string) => {
    try {
      await axios.post(
        SERVER_URI + "/request/review/" + status + "/" + req_id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(req_id));
    } catch (error) {}
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;
  if (requests.length === 0) {
    return (
      <h1 className="text-2xl text-white text-center my-5">
        No Requests Found
      </h1>
    );
  }
  return requests.map((connection: any) => {
    const { _id, age, firstName, lastName, gender, photos, about } =
      connection?.fromUserId;
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
        <div className="flex justify-between items-center gap-3 cursor-pointer">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
            className="size-8"
            onClick={() => handleRequest("rejected", connection._id)}
          >
            <path
              d="m13 13 6 6m0-6-6 6m15-3c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Z"
              stroke="#d11723"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#2ad117"
            className="size-8"
            onClick={() => handleRequest("accepted", connection._id)}
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    );
  });
}

export default Requests;
