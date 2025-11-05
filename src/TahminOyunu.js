import { useState } from "react";
import './TahminOyunu.css';
import background from "./assets/sayilar-bg.png";


export function TahminOyunu() {

    const[rastgeleSayi,setRastgeleSayi]= useState(Math.floor(Math.random()*100)+1);
    const[tahmin,setTahmin]= useState('');
    const[mesaj,setMesaj]=useState("");
    const[denemeSayisi,setDenemeSayisi]= useState(0);
    

    const tahminKontrolEt = () => {
        const sayi = parseInt(tahmin);
        setDenemeSayisi(denemeSayisi +1);
        if(sayi===rastgeleSayi){
            setMesaj(`Tebrikler! ${denemeSayisi+1} denemede doğru tahmin ettiniz.`);
        } else if (sayi < rastgeleSayi){
            setMesaj("Daha yüksek bir sayı deneyin.");
        } else if (sayi > rastgeleSayi){
            setMesaj("Daha düşük bir sayı deneyin.");
            if (sayi< 1 || sayi > 100) {
                setMesaj("Lütfen 1 ile 100 arasında bir sayı girin.");
                return;
            }
        }
    };
    const oyunuSifirla= () => {
        setRastgeleSayi(Math.floor(Math.random()*100)+1);
        setTahmin('');
        setMesaj('');
        setDenemeSayisi(0);
    };

    return(
    
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw", 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>1 ile 100 arasında bir sayı tahmin edin</h2>

      <input
        type="number"
        min="1"
        max="100"
        value={tahmin}
        onChange={(e) => setTahmin(e.target.value)}
        placeholder="Tahmininizi girin"
        className="oyun-input"
      />

      <button onClick={tahminKontrolEt} className="oyun-buton tahmin-buton">
        Tahmin Et
      </button>

      <button onClick={oyunuSifirla} className="oyun-buton sifirla-buton">
        Oyunu Sıfırla
      </button>

      <p
        className={`oyun-mesaj ${
          mesaj.includes("Tebrikler") ? "kazandi" : ""
        }`}
      >
        {mesaj}
      </p>

      {mesaj.includes("Tebrikler") && (
        <button onClick={oyunuSifirla} className="oyun-buton yeni-oyun-buton">
          Yeni Oyun Başlat
        </button>
      )}
    </div>
  );
}
