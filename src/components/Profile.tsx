import { useSelector } from "react-redux";
import EditUser from "./EditUser";

function Profile() {
  const user = useSelector((store: any) => store.user);
  return user && <EditUser user={user} />;
}

export default Profile;
