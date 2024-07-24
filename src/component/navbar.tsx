const Navbar = () => {
  return (
    <div className="flex flex-row w-full justify-between px-5 py-4 shadow-md bg-custom-red text-white">
      <h2 className=" text-base font-extrabold">Ridwan Maulana</h2>
      <div className="flex flex-row gap-5">
        <a href="#">Home</a>
        <a href="projects">Projects</a>
        <a href="summary">Summary</a>
        <a href="education">Education</a>
      </div>
    </div>
  );
};

export default Navbar;
