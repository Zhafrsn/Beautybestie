import React from "react";
import "./NotFound.css";

const NotFound: React.FC = () => {
  return (
    <div className="NotFound_Wrapper">
      <header>
        <h1>404</h1>
        <p>Page Not Found</p>
      </header>

      <section className="NotFound_Description">
        <p>
          Kami minta maaf, halaman yang Anda cari tidak dapat ditemukan.
        </p>
        <p>
          Ini mungkin karena halaman telah dihapus, alamat URL salah, atau ada
          kesalahan teknis.
        </p>
      </section>

      <section className="NotFound_Button">
        <a href="/home">
          <button>Go Home</button>
        </a>
      </section>
    </div>
  );
};

export default NotFound;
