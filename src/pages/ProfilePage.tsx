import Profile from "../features/profile/Profile";
const ProfilePage = () => {
  return (
    <Profile>
      <div className="flex items-center max-sm:flex-col max-sm:w-full">
        <div className="w-1/2">
          <Profile.ImageUploader />
        </div>
        <div className="lg:w-1/2 flex flex-col">
          <Profile.Block topic="Thông tin chung" field={["username"]} />
          <Profile.Block topic="Liên hệ" field={["email"]} />
        </div>
      </div>
      <Profile.SubmitButton />
    </Profile>
  );
};

export default ProfilePage;
