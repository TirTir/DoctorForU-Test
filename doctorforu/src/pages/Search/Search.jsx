import { useState } from "react";
import { useGeoLocation } from "../../hooks";
import { postHospitals } from "../../api";

import { KakaoMap, SearchHospital } from "../../components";
import styles from "./Login.module.css";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

export function Search() {
  const [hospitalList, setHospitalList] = useState({});
  const [hospitalForm, setHospitalForm] = useState({
    facility: 0,
    subject: 0,
    name: "",
  });
  const { location, error } = useGeoLocation(geolocationOptions);

  const search = async () => {
    await postHospitals(location).then((res) => setHospitalList);
  };

  const onChange = (e) => {
    setHospitalForm({ ...hospitalForm, name: e.target.value });
  }

  return (
    <div className={styles.container}>
      <h1>Search Hospital</h1>
      <section aria-label="kakaoMap" className={styles.kakaoMap}>
        <KakaoMap hospital={hospitalList} />
      </section>
      <section aria-label="searchHospital" className={styles.searchHospital}>
        <div className={styles.searchContainer}>
          <select name="== 전체 의료 기관 ==">
            <option value="01">상급종합병원</option>
            <option value="11">종합병원</option>
            <option value="21">병원</option>
            <option value="31">의원</option>
            <option value="28">요양병원</option>
            <option value="41">치과병원</option>
            <option value="51">치과의원</option>
            <option value="92">한방병원</option>
            <option value="93">한의원</option>
            <option value="71">보건소</option>
            <option value="72">보건지소</option>
            <option value="73">보건진료소</option>
            <option value="61">조산원</option>
          </select>
          <select name="== 진료 과목 ==">
            <option value="01">내과</option>
            <option value="02">신경과</option>
            <option value="03">정신건강의학과</option>
            <option value="04">외과</option>
            <option value="05">정형외과</option>
            <option value="06">신경외과</option>
            <option value="08">성형외과</option>
            <option value="09">마취통증의학과</option>
            <option value="10">산부인과</option>
            <option value="11">소아청소년과</option>
            <option value="12">안과</option>
            <option value="13">이비인후과</option>
            <option value="14">피부과</option>
            <option value="15">비뇨의학과</option>
            <option value="21">재활의학과</option>
            <option value="23">가정의학과</option>
            <option value="49">치과</option>
            <option value="80">한방내과</option>
            <option value="81">한방부인과</option>
            <option value="82">한방소아과</option>
          </select>
          <input 
            placeholder="병원명"
            onChange={onChange}
            value={hospitalForm.name}
            />
        </div>
        <SearchHospital />
      </section>
    </div>
  );
}
