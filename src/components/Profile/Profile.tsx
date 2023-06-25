import useProfile from "./useProfile";
import "./Profile.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Profile = () => {
  const { data, isLoading } = useProfile();

  if (isLoading)
    return <Skeleton height={250} style={{ borderRadius: "6px" }} />;

  return (
    <div className="profile">
      <img src={data?.photo_url} alt={data?.first_name} className="picture" />
      <div>
        <h4>
          {data?.first_name} {data?.last_name}
        </h4>
        <p className="email">{data?.email}</p>
        <p className="number">{data?.phone_number}</p>
      </div>
    </div>
  );
};

export default Profile;
