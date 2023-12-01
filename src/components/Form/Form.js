import React, { useState } from "react";
import "./form.css";
import { submitRecord } from "../../store/interactions";
import { useDispatch, useSelector } from "react-redux";
import Grup1 from "../../assets/Group1.png";

const Form = () => {
  const provider = useSelector((state) => state.provider.connection);
  const medical = useSelector((state) => state.medical.contract);
  const account=useSelector((state)=>state.provider.account);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    submitRecord(
      name,
      age,
      gender,
      bloodType,
      allergies,
      diagnosis,
      treatment,
      provider,
      medical,
      dispatch
    );
    setName(0);
    setAge(0);
    setGender(0);
    setBloodType(0);
    setAllergies(0);
    setDiagnosis(0);
    setTreatment(0);
  };
  const [name, setName] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState(0);
  const [bloodType, setBloodType] = useState(0);
  const [allergies, setAllergies] = useState(0);
  const [diagnosis, setDiagnosis] = useState(0);
  const [treatment, setTreatment] = useState(0);

  return (
    <div className="login-container">
      <h1></h1>
     
    {account?( <form onSubmit={submitHandler}>
        <h1>Form   Mahasiswa</h1>
  
        <label htmlFor="name"> Nama :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name === 0 ? "" : name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Masukkan Nama Anda"
        />

        <label htmlFor="age">Umur:</label>
        <input
          type="number"
          id="age"
          name="age"
          required
          placeholder="Masukkan umur anda"
          value={age === 0 ? "" : age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label htmlFor="gender">Jenis Kelamin:</label>
        <select
          id="gender"
          name="gender"
          required
          onChange={(e) => setGender(e.target.value)}
          value={gender === 0 ? "" : gender}
        >
          <option value="">Pilih Jenis Kelamin</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan<">Perempuan</option>
          <option value="Other">Lainnya</option>
        </select>

        <label htmlFor="address">Semester:</label>
        <input
          type="number"
          id="name"
          name="name"
          required
          placeholder="Masukkan semester anda"
          value={bloodType === 0 ? "" : bloodType}
          onChange={(e) => setBloodType(e.target.value)}
        />
        <label htmlFor="address">Jurusan:</label>
        <select
          type="text"
          id="name"
          name="name" 
          required
          placeholder="Masukkan jurusan anda"
          value={allergies === 0 ? "" : allergies}
          onChange={(e) => setAllergies(e.target.value)}
        >
          <option value="">Pilih Jurusan anda</option>
          <option value="D4 Teknologi Rekayasa Multimedia">D4 Teknologi Rekayasa Multimedia</option>
          <option value="D4 Teknologi Game">D4 Teknologi Game</option>
          <option value="D4 Sains Data Terapan">D4 Sains Data Terapan</option>
          <option value="D4 Sistem Pembangkitan Energi">D4 Sistem Pembangkitan Energi</option>
          <option value="D4 Teknik Komputer">D4 Teknik Komputer</option>
          <option value="D4 Teknik Mekatronika">D4 Teknik Mekatronika</option>
          <option value="D4 Teknik Informatika">D4 Teknik Informatika</option>
          <option value="D4 Teknik Elektro Industri">D4 Teknik Elektro Industri</option>
          <option value="D4 Teknik Telekomunikasi">D4 Teknik Telekomunikasi</option>
          <option value="D4 Teknik Elektronika">D4 Teknik Elektronika</option>
          <option value="D3 Teknologi Multimedia Broadcasting">D3 Teknologi Multimedia Broadcasting</option>
          <option value="D3 Teknik Elektronika">D3 Teknik Elektronika</option>
          <option value="D3 Teknik Telekomunikasi">D3 Teknik Telekomunikasi</option>
          <option value="D3 Teknik Elektro Industri">D3 Teknik Elektro Industri</option>
          <option value="D3 Teknik Informatika">D3 Teknik Informatika</option>
          <option value="Other">Lainnya</option>
        </select>
        <label htmlFor="address">Email:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Masukkan email anda"
          value={diagnosis === 0 ? "" : diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
        />
        <label htmlFor="address">Alamat:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Masukkan alamat anda"
          value={treatment === 0 ? "" : treatment}
          onChange={(e) => setTreatment(e.target.value)}
        />
        <br></br>
        <input type="submit" value="Simpan" />
      </form>):(
        <h1>Sambungkan ke Wallet anda</h1>
      )}
     
    </div>
  );
};

export default Form;
