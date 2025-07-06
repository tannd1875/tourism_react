import { ProfileKey } from "../../types/context";
import ProfileField from "./ProfileField";

const ProfileBlock = ({
  topic,
  field,
}: {
  topic: string;
  field: Array<ProfileKey>;
}) => {
  return (
    <div className="text-2xl px-4 pt-10 rounded-lg text-center text-white relative">
      <div className="px-4 pt-10 border-2 border-black bg-transparent rounded-sm">
        {field.map((item, index) => {
          return <ProfileField label={item} key={index} />;
        })}
      </div>
      <span className="block absolute top-6 ml-6 z-10 px-4 font-bold text-emerald-500 bg-white">
        {topic}
      </span>
    </div>
  );
};

export default ProfileBlock;
