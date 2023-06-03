import React, { useState } from "react";
import "./PaymentValidation.css";

function PaymentValidation() {
  const [imeNaKartici, setImeNaKartici] = useState("");
  const [brojKartice, setBrojKartice] = useState("");
  const [datumIsticanja, setDatumIsticanja] = useState("");
  const [sigurnosniKod, setSigurnosniKod] = useState("");
  const [greske, setGreske] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const novaGreska = {};

    if (imeNaKartici.trim() === "") {
      novaGreska.imeNaKartici = "Please enter card's holder name.";
    }

    if (brojKartice.trim() === "") {
      novaGreska.brojKartice = "Please enter card's number.";
    }

    if (datumIsticanja.trim() === "") {
      novaGreska.datumIsticanja = "Please enter expiration date.";
    }

    if (sigurnosniKod.trim() === "") {
      novaGreska.sigurnosniKod = "Please enter security code.";
    }

    if (Object.keys(novaGreska).length === 0) {
      console.log("Podaci kartice:", {
        imeNaKartici,
        brojKartice,
        datumIsticanja,
        sigurnosniKod,
      });

      setImeNaKartici("");
      setBrojKartice("");
      setDatumIsticanja("");
      setSigurnosniKod("");
      setGreske({});
    } else {
      setGreske(novaGreska);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="ime">Cardholder name:</label>
        <input
          type="text"
          id="ime"
          value={imeNaKartici}
          onChange={(e) => setImeNaKartici(e.target.value)}
        />
        {greske.imeNaKartici && <p className="error">{greske.imeNaKartici}</p>}
        <br />
        <br />

        <label htmlFor="broj_kartice">Card's number:</label>
        <input
          type="text"
          id="broj_kartice"
          value={brojKartice}
          onChange={(e) => setBrojKartice(e.target.value)}
        />
        {greske.brojKartice && <p className="error">{greske.brojKartice}</p>}
        <br />
        <br />

        <label htmlFor="datum_isticanja">Expiration date:</label>
        <input
          type="text"
          id="datum_isticanja"
          value={datumIsticanja}
          onChange={(e) => setDatumIsticanja(e.target.value)}
          placeholder="MM/GG"
        />
        {greske.datumIsticanja && (
          <p className="error">{greske.datumIsticanja}</p>
        )}
        <br />
        <br />

        <label htmlFor="sigurnosni_kod">Security code:</label>
        <input
          type="text"
          id="sigurnosni_kod"
          value={sigurnosniKod}
          onChange={(e) => setSigurnosniKod(e.target.value)}
        />
        {greske.sigurnosniKod && (
          <p className="error">{greske.sigurnosniKod}</p>
        )}
        <br />
        <br />

        <div className="buttons">
          <input type="submit" value="Add card" />
        </div>
      </form>
    </div>
  );
}

export default PaymentValidation;
