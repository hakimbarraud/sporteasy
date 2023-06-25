import useProfile from "./useProfile";
import "./Profile.scss";

const Profile = () => {
  const { data } = useProfile();

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
