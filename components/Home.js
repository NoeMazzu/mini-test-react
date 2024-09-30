import { useState } from "react";

function Home() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div style={{ margin: "10px" }}>
      <h2>Formulaire de Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom : </label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Prénom : </label>
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email : </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button style={{ marginTop: "20px" }} type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Home;
