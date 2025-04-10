import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import "../css/ListPage.css"

function ListPage() {
    const [people, setPeople] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/people")
            .then((res) => res.json())
            .then((data) => setPeople(data))
            .catch((err) => console.error("Erro ao buscas people", err));
    }, []);

    const handleDeleteUser = async (id) => {
        try {
          const res = await fetch(`http://localhost:5000/people/${id}`, {
            method: "DELETE",
          });
          if (!res.ok) throw new Error("Erro ao deletar usuário.");
          setPeople(people.filter((p) => p.id !== id));
        } catch (err) {
          console.error("Erro ao deletar usuário", err);
        }
    };

    return(
        <div className="person-list">
            <div className="title">
                <h2>List of people</h2>
                <button onClick={() => navigate("/new")}>New Person</button>
            </div>

            <ul>
                {people.map((person) => (
                    <li key={person.id} className="person-item">
                    <div className="person-info">
                      <span className="person-name">{person.name}</span>
                      <span className="person-cpf">{person.cpf}</span>
                    </div>
                    <div className="person-actions">
                      <button className="btn-view" onClick={() => navigate(`/people/${person.id}`)}>See</button>
                      <button className="btn-edit" onClick={() => navigate(`/edit/${person.id}`)}>Editar</button>
                      <button className="btn-delete" onClick={() => handleDeleteUser(person.id)}>Deletar</button>
                    </div>
                  </li>
                  
                ))}
            </ul>
        </div>
    );
}

export default ListPage;