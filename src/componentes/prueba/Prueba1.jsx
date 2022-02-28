import React, {useState} from "react";

    const Select = ({ options, onSelect, defaultOption}) =>{
       
       return (
       <select onChange={(e) => onSelect(e.target.value)}>
           {options.map((o) => (
           <option value={o.value}>{o.text}</option>
           ))}

        </select>
       );
    };

    const Prueba1 = () => {

        const [first, setFirst] = useState("");

    const opt = [
        { value: 1, text: "Azul" },
        { value: 2, text: "Rojo" },
        { value: 3, text: "Negro" },
        ];

    const handleChange = (value) => {
        setFirst(value);
    };

    return (
        <>
            <Select options={opt} onSelect={handleChange} defaultOption={1} />
        </>
    )
  }


export default Prueba1