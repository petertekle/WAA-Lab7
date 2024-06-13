// import React from "react";
// import { Car } from "./Car";
// import { useState } from "react";

// export const Cars = () => {
//     const images = {
//         crv: "https://di-uploads-pod31.dealerinspire.com/gwinnettplacehonda/uploads/2023/09/mlp-img-top-2024-crv.png",
//         tesla: "https://www.topgear.com/sites/default/files/2022/03/TopGear%20-%20Tesla%20Model%20Y%20-%20003.jpg",
//         corola: "https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2024/corolla/nightshade/1868/218/36/5.png?fmt=png&w=930&qlt=90"
//     }
//     const [car, setCar] = useState([{
//         name:"",
//         img:"",
//         model:"",
//         brand:"",
//         price:"",
//         year:""
//     }]);

//     const[carInput, setCarInput] = useState({
//         name:"",        
//         model:"",
//         brand:"",
//         price:"",
//         year:""
//     });

//     const imageHandler = (model) => {
//         let imgLink = "";
//         if(model.toLowerCase == "crv"){
//             imgLink = images.tesla;
//         } else if (model.toLowerCase == "camry"){
//             imgLink = images.tesla;
//         } else if (corola.toLowerCase == "corola"){
//             imgLink = images.corola;
//         }

//         return imgLink;
//     };

//     const handleInputName = (event) => {
//         setCarInput(prevState => {
//             return {...prevState, name: event.target.value}
//         })

//     }

//     const handleInputModel = (event) => {
//         setCarInput(prevState => {
//             return {...prevState, model: event.target.value}
//         })
//     }

//     const handleInputBrand = (event) => {
//         setCarInput(prevState => {
//             return{...prevState, brand: event.target.value}
//         })
//     }

//     const handleInputPrice = (event) => {
//         setCarInput(prevState => {
//             return{...prevState, price: event.target.value}
//         })
//     }

//     const handleInputYear = (event) => {
//         setCarInput(prevState => {
//             return{...prevState, year: event.target.value}
//         })
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setCar((prevState) => [            
//                 ...prevState,

//                 {name: carInput.name, 
//                     model: carInput.model, 
//                     brand: carInput.brand, 
//                     price: carInput.price, 
//                     year: carInput.year,
//                     img: imageHandler(carInput.model),
//                 },
    
//         ]);
//         setCarInput(() => {
//             return{name: "",}
//         })
//     }

//     const styleCustomImg = {
//         width: "5vw",
//         height: "5vw"
//     }


//     return (
//         <div >
//             <h1 style={styleCustom}>Car Rental System</h1>
//             {
//                 car.map(c => {
//                     return <Car name={c.name} img={imageHandler()} model={c.model} brand={c.brand} price={c.price} year={c.year}/>
//                 })
//             }

//             <div>
//             Name: <input onChange={handleInputName}  type="text" placeholder="Enter Name of the Car" />  <br />{" "} <br />
//             Model: <input onChange={handleInputModel} type="text" placeholder="Enter Model of the Car"/>{" "} <br /> <br />
//             Brand: <input onChange={handleInputBrand} type="text" placeholder="Enter Brand of the Car"/>{" "}  <br /> <br />
//             Price: <input onChange={handleInputPrice} type="text" placeholder="Enter Price of the Car"/>{" "}  <br /> <br />
//             Year: <input onChange={handleInputYear} type="text" placeholder="Enter Year of the Car"/>{" "}  <br /> <br />
//             <button onClick={handleSubmit}>Submit</button >
//             </div>

//         </div>
//     );
// }

import React, { useState } from "react";
import { Car } from "./Car";

export const Cars = () => {
    const images = {
        crv: "https://di-uploads-pod31.dealerinspire.com/gwinnettplacehonda/uploads/2023/09/mlp-img-top-2024-crv.png",
        tesla: "https://www.topgear.com/sites/default/files/2022/03/TopGear%20-%20Tesla%20Model%20Y%20-%20003.jpg",
        corolla: "https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2024/corolla/nightshade/1868/218/36/5.png?fmt=png&w=930&qlt=90"
    };

    const [car, setCar] = useState([]);

    const [carInput, setCarInput] = useState({
        name: "",
        model: "",
        brand: "",
        price: "",
        year: ""
    });

    const imageHandler = (model) => {
        let imgLink = "";
        if (model.toLowerCase() === "crv") {
            imgLink = images.crv;
        } else if (model.toLowerCase() === "tesla") {
            imgLink = images.tesla;
        } else if (model.toLowerCase() === "corolla") {
            imgLink = images.corolla;
        }

        return imgLink;
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCarInput(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setCar(prevState => [
            ...prevState,
            {
                ...carInput,
                img: imageHandler(carInput.model)
            }
        ]);
        setCarInput({
            name: "",
            model: "",
            brand: "",
            price: "",
            year: ""
        });
    };

    const styleCustom = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    };

    const styleCustomImg = {
        width: "5vw",
        height: "5vw"
    };

    return (
        <div style={styleCustom}>
            <h1>Car Rental System</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {car.map((c, index) => {
                    return <Car key={index} name={c.name} img={c.img} model={c.model} brand={c.brand} price={c.price} year={c.year} />;
                })}
            </div>

            <div>
                Name: <input name="name" value={carInput.name} onChange={handleInputChange} type="text" placeholder="Enter Name of the Car" /><br /><br />
                Model: <input name="model" value={carInput.model} onChange={handleInputChange} type="text" placeholder="Enter Model of the Car" /><br /><br />
                Brand: <input name="brand" value={carInput.brand} onChange={handleInputChange} type="text" placeholder="Enter Brand of the Car" /><br /><br />
                Price: <input name="price" value={carInput.price} onChange={handleInputChange} type="text" placeholder="Enter Price of the Car" /><br /><br />
                Year: <input name="year" value={carInput.year} onChange={handleInputChange} type="text" placeholder="Enter Year of the Car" /><br /><br />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};
