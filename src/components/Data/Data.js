import React from "react";
import "./data.css";
import { dataBookSelector } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { deleteData } from "../../store/interactions";

const Data = () => {
  const orderData = useSelector(dataBookSelector);
  const account = useSelector((state) => state.provider.account);
  const provider = useSelector((state) => state.provider.connection);
  const medical = useSelector((state) => state.medical.contract);
  const dispatch = useDispatch();
  const deleteHandler = (e, data) => {
    if (window.confirm("Apakah anda ingin menghapus data ini?")) {
      deleteData(medical, data.recordId, dispatch, provider);
    } else {
      console.log("Data tidak dihapus");
    }
  };
  return (
    <div>
      {account ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Nomor NRP</th>
                <th>Data dan waktu</th>
                <th>Nama</th>
                <th>Usia</th>
                <th>Jenis Kelamin</th>
                <th>Semester</th>
                <th>Email</th>
                <th>Alamat</th>
                <th>Prodi</th>
                <th>Hapus</th>
              </tr>
            </thead>
            <tbody>
              {orderData &&
                orderData.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      {/* <td>{data.recordIdNew}</td> */}
                      <td>{data.formattedTimestamp}</td>
                      <td>{data.name}</td>
                      <td>{data.ageNew} </td>
                      <td>{data.gender}</td>
                      <td>{data.bloodType}</td>
                      <td>{data.allergies}</td>
                      <td>{data.diagnosis}</td>
                      <td>{data.treatment}</td>

                      <td>
                        <button
                          className="delete-button"
                          onClick={(e) => deleteHandler(e, data)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>Coba sambungkan ke Wallet anda</h1>
      )}
    </div>
  );
};

export default Data;
