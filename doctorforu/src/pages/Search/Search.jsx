import { useState } from "react";
import { useGeoLocation } from "../../hooks";
import { postHospitals } from "../../services";

import { KakaoMap, SearchHospital } from "../../components";
import styles from "./Login.module.css";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

export function Search() {
  const [hospitalList, setHospitalList] = useState({});
  const { location, error } = useGeoLocation(geolocationOptions);

  const search = async () => {
    await postHospitals(location).then((res) => setHospitalList);
  };
  return (
    <div className={styles.container}>
      <h1>Search Hospital</h1>
      <section aria-label="kakaoMap" className={styles.kakaoMap}>
        <KakaoMap hospital={hospitalList} />
      </section>
      <section>
        <SearchHospital />
      </section>
    </div>
  );
}
