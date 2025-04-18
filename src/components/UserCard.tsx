import axios from "axios";
import { SERVER_URI } from "../utils/constants-env";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/store/feedSlice";

function UserCard({ user }: any) {
  const dispacth = useDispatch();
  const { age, firstName, lastName, gender, photos, skills, about, _id } = user;

  const handleConnection = async (status: string, _id: string) => {
    try {
      const res = await axios.post(
        SERVER_URI + "/request/send/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispacth(removeFeed(_id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={photos[0]}
          alt={firstName + " " + lastName + " photo"}
          className="rounded-xl max-h-52 max-w-52"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{age && gender && age + "," + gender}</p>
        <p>{about}</p>
        <div className="card-actions flex justify-between gap-10 mt-5">
          <button
            className="btn btn-primary w-25"
            onClick={() => handleConnection("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary w-25"
            onClick={() => handleConnection("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
