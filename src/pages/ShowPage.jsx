import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import "../css/ShowPage.css";

function ShowPage(){
    const { id } = useParams();
    const [person, setPerson] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/people/${id}`)
            .then((res) => {
                console.log("Status da resposta:", res.status);
                return res.json();
            })
            .then((data) => {
                console.log("Dados recebidos:", data);
                setPerson(data);
            })
            .catch((err) => console.error("Erro ao buscar person", err));
    }, [id]);
    

    if (!person) return <p>carregando...</p>;

    return(
        <div className="showPage">
            <div className="person-details">
                <h2>Detalhes do Usuario</h2>
                <p><strong>Name:</strong> {person.name}</p>
                <p><strong>Year of birth:</strong> {person.yearBirth}</p>
                <p><strong>Address:</strong> {person.address}</p>
                <p><strong>Gender:</strong> {person.gender}</p>
                <p><strong>Cpf:</strong> {person.cpf}</p>
                <button className="btn-cancel" onClick={() => navigate("/")}>Back</button>
            </div>
        </div>
    );
}

export default ShowPage;