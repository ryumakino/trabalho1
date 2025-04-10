import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import "../css/FormPage.css"

function FormPage(){
    const [name, setName] = useState("");
    const [yearBirth, setYearBirth] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [cpf, setCpf] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
          fetch(`http://localhost:5000/people/${id}`)
            .then((res) => res.json())
            .then((data) => {
              setName(data.name);
              setYearBirth(data.yearBirth);
              setAddress(data.address);
              setGender(data.gender);
              setCpf(data.cpf);
            })
            .catch((err) => console.error("Erro ao carregar usuário", err));
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !yearBirth || !address || !gender || !cpf){
            setError("Por favor, preencha todos os campos.");
            return;
        }
        try {
            const method = id ? "PUT" : "POST";
            const url = id
              ? `http://localhost:5000/people/${id}`
              : "http://localhost:5000/people";
      
            const res = await fetch(url, {
              method,
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name, yearBirth, address, gender, cpf }),
            });
      
            if (!res.ok) throw new Error("Erro ao salvar pessoa.");
            navigate("/");
        } catch (err) {
            console.error(err);
            setError("Erro ao salvar usuário.");
        }
    };

    return (
        <div className="formPage">
            <h2>{id ? "Edit Person" : "New Person"}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input> 
                <input type="text" placeholder="Year of birth" value={yearBirth} onChange={(e) => setYearBirth(e.target.value)}></input>
                <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}></input>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Selecione o Gênero</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Outro">Outro</option>
                </select>
                <input type="text" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)}></input>

                {error && <p className="error-message">{error}</p>}

                <div>
                    <button className="btn-submit" type="submit">{id ? "Update" : "Save"}</button>
                    <button className="btn-cancel" type="button" onClick={() => navigate("/")}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormPage;