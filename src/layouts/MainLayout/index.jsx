const MainLayout = ({ children }) => {
  return (
    <main className="w-full h-full flex flex-col pt-12 px-[25vh] gap-y-5">
      {children}
    </main>
  );
};

export default MainLayout;
