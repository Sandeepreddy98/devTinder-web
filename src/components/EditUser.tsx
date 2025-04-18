import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { SERVER_URI } from "../utils/constants-env";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/userSlice";

function EditUser({ user }: any) {
  const { age, firstName, lastName, gender, photos, about } = user;
  const genders = ["male", "female", "others"];
  const [updatedFirstName, setUpdatedFirstName] = useState(firstName || "");
  const [updatedLastName, setUpdatedLastName] = useState(lastName || "");
  const [updatedAge, setUpdatedAge] = useState(age || "");
  const [updatedGender, setUpdatedGender] = useState(gender || "");
  const [updatedPhotos, setUpdatedPhotos] = useState(photos || ['']);
  const [updatedAbout, setUpdatedAbout] = useState(about || '');
  const dispatch = useDispatch()

  const updateProfile = async () => {
    try {
      const res = await axios.patch(
        SERVER_URI + "/profile/edit",
        {
          age: updatedAge,
          firstName: updatedFirstName,
          lastName: updatedLastName,
          gender: updatedGender,
          photos: updatedPhotos,
          about: updatedAbout,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center mt-5 gap-20">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <div className="max-h-84 overflow-x-hidden">
            <h2 className="card-title justify-center">Edit Profile</h2>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">First Name</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                value={updatedFirstName}
                onChange={(e) => setUpdatedFirstName(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Last Name</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                value={updatedLastName}
                onChange={(e) => setUpdatedLastName(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Age</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                value={updatedAge}
                onChange={(e) => setUpdatedAge(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Profile URL</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                value={updatedPhotos[0]}
                alt={updatedFirstName}
                onChange={(e) => setUpdatedPhotos([e.target.value])}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Gender</legend>
              <select defaultValue="Pick a gender" className="select" onChange={(e) => setUpdatedGender(e.target.value)}>
                <option disabled={true}>{updatedGender}</option>
                {genders.map((gen) => (
                  <option key={gen}>{gen}</option>
                ))}
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">About</legend>
              <textarea
                className="textarea h-24"
                placeholder="Bio"
                value={updatedAbout}
                onChange={(e) => setUpdatedAbout(e.target.value)}
              ></textarea>
            </fieldset>
          </div>
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary px-10" onClick={updateProfile}>Save Profile</button>
          </div>
        </div>
      </div>
      <UserCard user = {{ age : updatedAge, firstName : updatedFirstName, lastName : updatedLastName, gender : updatedGender, photos : updatedPhotos, about : updatedAbout }}/>
    </div>
  );
}

export default EditUser;
