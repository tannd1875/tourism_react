import { ProfileKey } from "../../store/redux/slice/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/redux/store";
import { updateProfile } from "../../store/redux/slice/profileSlice";

const ProfileField = ({ label }: { label: ProfileKey }) => {
  const value = useSelector((state: RootState) => state.profile[label]);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex lg:gap-4 mb-8 lg:text-xl text-base">
      <label className="inline  pt-3 pb-2 w-40 text-left text-black capitalize">
        {label as unknown as string}
      </label>
      <input
        type="text"
        value={value as string}
        className={`px-6 py-2 border-black border rounded-sm text-black w-full`}
        onChange={(e) => {
          dispatch(updateProfile({ [label]: e.target.value }));
        }}
      />
    </div>
  );
};

export default ProfileField;
