import "../App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromMyList } from "../store/redux/listSlice";

import { MovieCardPortrait } from "../components/Movie-Card.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export function MovieMyList() {
  const dispatch = useDispatch();
  const [showConfirm, setShowConfirm] = useState(false);

  const myList = useSelector((state) => state.list.myList);

  const handleDelete = (title) => {
    dispatch(removeFromMyList(title));
  };

  return (
    <>
      <section className="movie-section">
        <div className="title">
          <h3>Daftar Saya</h3>
          <button
            className="material-symbols-outlined delete"
            type="button"
            onClick={() => setShowConfirm(true)}
            disabled={myList.length === 0}
            title="Kosongkan Daftar Saya"
          >
            delete
          </button>{" "}
        </div>
        <div className="movie-list">
          <div className="movie-card">
            {myList.map((movie) => (
              <MovieCardPortrait
                key={movie.title}
                {...movie}
                onDelete={() => handleDelete(movie.title)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {showConfirm && (
        <div className="confirm-overlay" onClick={() => setShowConfirm(false)}>
          <div
            className="confirm-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirm-title"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 id="confirm-title">Hapus Semua?</h3>

            <p>
              Apakah kamu yakin ingin menghapus semua film dan series dari
              Daftar Saya?
            </p>

            <div className="confirm-actions">
              <button
                type="button"
                className="btn-cancel"
                onClick={() => setShowConfirm(false)}
              >
                Batal
              </button>

              <button
                type="button"
                className="btn-confirm-delete"
                onClick={() => {
                  myList.forEach((movie) => {
                    dispatch(removeFromMyList(movie.title));
                  });

                  setShowConfirm(false);
                }}
              >
                Hapus Semua
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function MyList() {
  return (
    <>
      <Navbar />
      <MovieMyList />
      <Footer />
    </>
  );
}
export default MyList;
