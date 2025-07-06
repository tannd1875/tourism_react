const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-200 p-10 mt-28">
      <section className="flex justify-start items-center bg-emerald-500 rounded-2xl text-white">
        <div className="w-1/2 overflow-hidden max-sm:hidden">
          <img
            src="./src/assets/img/Register.png"
            alt="Cover"
            className="w-full h-full rounded-tl-2xl rounded-bl-2xl"
          />
        </div>
        {children}
      </section>
    </div>
  );
};

export default AuthLayout;
