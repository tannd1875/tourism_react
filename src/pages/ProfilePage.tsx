import ImageUploader from "../features/profile/ImageUploader";
import ProfileBlock from "../features/profile/ProfileBlock";
import ProfileSubmitButton from "../features/profile/ProfileSubmitButton";
import ProfileProvider from "../store/context/ProfileProvider";
const ProfilePage = () => {
  return (
    <ProfileProvider>
      <div className="mt-40 lg:w-4/5 mx-auto w-full mb-10">
        <div className="flex items-center max-sm:flex-col max-sm:w-full">
          <div className="w-1/2">
            <ImageUploader />
          </div>
          <div className="lg:w-1/2 flex flex-col">
            <ProfileBlock topic="Thông tin chung" field={["username"]} />
            <ProfileBlock topic="Liên hệ" field={["email"]} />
          </div>
        </div>
        <ProfileSubmitButton />
      </div>
    </ProfileProvider>
  );
};

export default ProfilePage;
