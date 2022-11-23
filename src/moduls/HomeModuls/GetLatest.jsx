import { useState, useEffect } from "react";
import Card from "../../components/Card";

const GetLatest = () => {
  const [latest, setLatest] = useState({});
  const getData = async () => {
    await fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
      .then((res) => res.json())
      .then((res) => setLatest(res.Infogempa.gempa));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Card
      title="Gempa Terkini"
      wilayah={latest.Wilayah}
      kordinat={latest.Coordinates}
      magnitudo={latest.Magnitude}
      kedalaman={latest.Kedalaman}
      image={latest.Shakemap}
      potensi={latest.Potensi}
      dirasakan={latest.Dirasakan}
      waktu={latest.Jam + " " + latest.Tanggal}
    />
  );
};
export default GetLatest;
