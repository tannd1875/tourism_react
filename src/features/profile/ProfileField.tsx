import { useContext } from "react";
import { ProfileContext } from "../../store/context/context";
import { ProfileKey } from "../../types/context";

const ProfileField = ({ label }: { label: ProfileKey }) => {
  const context = useContext(ProfileContext);
  const { setUsername, setEmail } = useContext(ProfileContext);

  const labelHandlers: Record<string, (arg: string) => void> = {
    username: setUsername,
    email: setEmail,
  };

  const handlers = labelHandlers[label];

  return (
    <div className="flex lg:gap-4 mb-8 lg:text-xl text-base">
      <label className="inline  pt-3 pb-2 w-40 text-left text-black capitalize">
        {label as unknown as string}
      </label>
      <input
        type="text"
        value={(context?.[label] as string) ?? ""}
        className={`px-6 py-2 border-black border rounded-sm text-black w-full`}
        onChange={(e) => {
          handlers(e.target.value);
        }}
      />
    </div>
  );
};

export default ProfileField;
