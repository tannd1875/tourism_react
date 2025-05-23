import { ReactNode } from "react";

const FormWrapper = ({ form }: { form: ReactNode }) => {
  return (
    <div className="bg-white shadow-md rounded-md mb-4 border-2">
      <p className="border-b-2 p-4 text-xl font-bold ">Tỉnh/ Thành phố</p>
      <div className="px-4 pt-6">{form}</div>
    </div>
  );
};

export default FormWrapper;
