import React from "react";

const Tesa = (props) => (
    <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center transform transition-transform hover:scale-105">
        <img 
            src={`/images/${props.image}`} 
            alt={props.name}
            className="w-40 h-40 object-cover rounded-lg mb-4" 
        />
        <h3 className="text-xl font-semibold mb-2">{props.name}</h3>
        <p className="text-gray-600 text-center mb-3 text-sm">{props.description}</p>
        <span className="text-lg font-medium text-gray-900">{props.price}</span>
    </div>
);

export default Tesa;