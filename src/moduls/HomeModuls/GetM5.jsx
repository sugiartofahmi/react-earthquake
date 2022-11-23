import { useState, useEffect } from "react";
import Table from "../../components/Table";
const GetM5 = () => {
  const [history, setHistory] = useState([]);
  const getData = async () => {
    await fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json")
      .then((res) => res.json())
      .then((res) => setHistory(res.Infogempa.gempa));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="flex  ">
        <h5 className="text-gray-900 text-xl font-medium mb-2">
          Riwayat Gempa Magnitudo {">"} 5.0
        </h5>
      </div>
      <Table>
        <thead className="text-xs font-semibold uppercase text-gray-900 bg-gray-50">
          <tr>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-center">Waktu Gempa</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-center">Kordinat</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-center">Magnitudo</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-center">Kedalaman</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-center">Wilayah</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-ceter">Potensi</div>
            </th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-100">
          {history.map((el, i) => (
            <tr className="cursor-pointer" key={i}>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left">
                  {el.Jam} {el.Tanggal}
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left">{el.Coordinates}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left ">{el.Magnitude}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left ">{el.Kedalaman}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left ">{el.Wilayah}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left ">{el.Potensi}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default GetM5;
