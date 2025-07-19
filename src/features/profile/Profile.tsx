import ImageUploader from "./ImageUploader";
import ProfileBlock from "./ProfileBlock";
import ProfileSubmitButton from "./ProfileSubmitButton";

const Profile = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-40 lg:w-4/5 mx-auto w-full mb-10">{children}</div>;
};

Profile.ImageUploader = ImageUploader;
Profile.Block = ProfileBlock;
Profile.SubmitButton = ProfileSubmitButton;

export default Profile;
