const FormWrapper = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-white shadow-md rounded-md mb-4 border-2">
      <p className="border-b-2 p-4 text-xl font-bold ">{title}</p>
      <div className="px-4 pt-6">{children}</div>
    </div>
  );
};

export default FormWrapper;
