const Modal = ({ onClick, image }) => {
  return (
    <>
      <div
        onClick={onClick}
        id="defaultModal"
        tabindex="-1"
        aria-hidden="true"
        className=" overflow-y-auto overflow-x-hidden flex justify-center items-center fixed z-50 p-4 w-full md:inset-0 h-modal md:h-full backdrop-blur-[2px] "
      >
        <div className="relative w-full max-w-2xl h-full md:h-auto flex justify-center items-center">
          <img src={image} />
        </div>
      </div>
    </>
  );
};

export default Modal;
