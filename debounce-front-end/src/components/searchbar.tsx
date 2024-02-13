import {useState} from "react";
import { FaSearch } from "react-icons/fa";
import { debounce } from "./class-debounce";
// import jsonData from "../data-front.json"; 
import "./searchbar.css"

 export const SearchBar = () => {
     const [input, setInput] = useState ("")

     const datas = [
        {
            "id": "01",
            "title": "BiciFlex",
            "description": "BiciFlex es una bicicleta innovadora que tiene un sistema de plegado inteligente que te permite cambiar su tamaño y forma según el tipo de uso que quieras darle. Puedes convertirla en una bicicleta de carretera, de montaña, de ciudad o de paseo, con solo unos movimientos. Su estructura es resistente y flexible, y su peso es muy ligero. Con BiciFlex, podrás disfrutar de la bicicleta que siempre quisiste, sin complicaciones ni limitaciones."
        },

        {
            "id": "01",
            "title": "BiciRed",
            "description": "BiciFlex es una bicicleta innovadora que tiene un sistema de plegado inteligente que te permite cambiar su tamaño y forma según el tipo de uso que quieras darle. Puedes convertirla en una bicicleta de carretera, de montaña, de ciudad o de paseo, con solo unos movimientos. Su estructura es resistente y flexible, y su peso es muy ligero. Con BiciFlex, podrás disfrutar de la bicicleta que siempre quisiste, sin complicaciones ni limitaciones."
        },

        {
            "id": "01",
            "title": "BiciYellow",
            "description": "BiciFlex es una bicicleta innovadora que tiene un sistema de plegado inteligente que te permite cambiar su tamaño y forma según el tipo de uso que quieras darle. Puedes convertirla en una bicicleta de carretera, de montaña, de ciudad o de paseo, con solo unos movimientos. Su estructura es resistente y flexible, y su peso es muy ligero. Con BiciFlex, podrás disfrutar de la bicicleta que siempre quisiste, sin complicaciones ni limitaciones."
        }
     ]
     const filterData = datas.filter(data => data.title.includes(input));

     const handlingDebounce =  debounce((e) => {
            setInput(e.target.value)
        }, 2000);

        // es de java

     return (
         <> 
         <div className="input-wrapper">
             <FaSearch id ="search-icon" />
            <input 
                 placeholder="Type to search..." 
                //  value={input} 
                 onChange={handlingDebounce}
            />
         </div>
         
         <div className="filter">
            {input != "" ? (
                filterData.map(item => (
                    <div className="results">
                        <ul>{item.title}</ul>
                    </div>
                )) 
            ): null}
        </div>
         </>
     );
};

