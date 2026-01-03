import React from "react";

const Cards = () => {

  const data = "Welcome to React!";
  const data2 = ["Apple", "Banana", "Orange"];
  
  const data3 = [
    {
      url: "https://images.unsplash.com/photo-1606755962773-0c3ce3f0c7a8", 
      title: "Pizza",
      desc: "Delicious cheese pizza"
    },
    {
      url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      title: "Burger",
      desc: "Tasty burger"
    },
    {
      url: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
      title: "Pasta",
      desc: "Creamy white pasta"
    }
  ];

  return (
    <div>
      <p>Hello students</p>

      <p>{data}</p>
      <p>{data2[1]}</p>
      <p>{data3[0].title}</p>

    </div>
  );
};

export default Card;





import React from "react";

const Card = (props) => {
  return (
    <div style={{ 
      border: "1px solid black", 
      padding: "15px", 
      margin: "20px", 
      width: "250px" 
    }}>
      
      <img 
        src={props.url} 
        alt={props.title} 
        width="100%" 
        height="150px"
        style={{ objectFit: "cover" }}
      />

      <h2>{props.title}</h2>
      <p>{props.desc}</p>

    </div>
  );
};

export default Card;
