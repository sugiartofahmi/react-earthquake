const Card = ({
  title,
  wilayah,
  image,
  kordinat,
  waktu,
  magnitudo,
  kedalaman,
  potensi,
  dirasakan,
}) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-row  rounded-lg bg-white shadow-lg w-full h-full">
        <img
          className=" max-w-[350px] rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={"https://ews.bmkg.go.id/TEWS/data/" + image}
          alt=""
        />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          <p className="text-gray-700 text-base mb-4">{wilayah}</p>
          <p className="text-gray-700 text-base mb-4">Kordinat : {kordinat}</p>
          <p className="text-gray-700 text-base mb-4">
            Magnitudo : {magnitudo}
          </p>
          <p className="text-gray-700 text-base mb-4">
            Kedalaman : {kedalaman}
          </p>
          <p className="text-gray-700 text-base mb-4">Potensi : {potensi}</p>
          <p className="text-gray-700 text-base mb-4">
            Dirasakan : {dirasakan}
          </p>
          <p className="pt-5 text-gray-600 text-xs">{waktu}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
