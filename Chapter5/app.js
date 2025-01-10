import React from "react";
import { createRoot } from "react-dom";

/*
Header 
    -logo
    - search bar
    - navigation
    
Body
  -
*/

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://img.freepik.com/premium-vector/logo-food-company-that-says-sun-sun-sunflower_917213-253424.jpg"
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentList = [
  {
    id: "133691",
    name: "Hotel Saravana Bhavan",
    cloudinaryImageId: "v8iouu8xvtcd35dfanhf",
    locality: "Rajouri Garden",
    areaName: "Rajouri Garden",
    costForTwo: "₹300 for two",
    cuisines: ["South Indian"],
    avgRating: 4.3,
  },
  {
    id: "40329",
    name: "Shree Rathnam",
    cloudinaryImageId: "pj3pkuixl14snqaviiuh",
    locality: "Rajokri",
    areaName: "Rohini",
    costForTwo: "₹600 for two",
    cuisines: ["South Indian", "North Indian", "Chinese", "Desserts"],
    avgRating: 4.5,
  },
  {
    id: "718674",
    name: "Anna Dosa Corner",
    cloudinaryImageId: "f1bc9ddf53de574cdc35ab2f717df234",
    locality: "Rithala",
    areaName: "Rohini",
    costForTwo: "₹200 for two",
    cuisines: ["South Indian", "Chinese"],
    avgRating: 4.2,
  },
  {
    id: "61531",
    name: "Madras Cafe",
    cloudinaryImageId: "zesv54xfkbaiulivklct",
    locality: "Rohini",
    areaName: "Rohini",
    costForTwo: "₹100 for two",
    cuisines: ["South Indian", "Chinese", "North Indian"],
    avgRating: 4.2,
  },
  {
    id: "754589",
    name: "Dosa Coffee",
    cloudinaryImageId: "26ddaad6ad73ccef5d4d173d9e5e1ecd",
    locality: "Chaudhary Balbir Singh Marg",
    areaName: "Paschim Vihar",
    costForTwo: "₹600 for two",
    cuisines: ["South Indian", "Beverages"],
    avgRating: 4.3,
  },
  {
    id: "57964",
    name: "Nivetha Dosa Corner",
    cloudinaryImageId: "l1fno5dozv4pwkimwf4d",
    locality: "Rohini",
    areaName: "Rohini",
    costForTwo: "₹200 for two",
    cuisines: ["South Indian"],
    avgRating: 4.3,
  },
  {
    id: "43380",
    name: "Vanakkam Madras Cafe",
    cloudinaryImageId: "oz7edonwdwqh1gbfqkjx",
    locality: "H Block",
    areaName: "Vikas puri",
    costForTwo: "₹150 for two",
    cuisines: ["South Indian", "Chinese"],
    avgRating: 4.2,
  },
  {
    id: "49781",
    name: "Anna South Indian Chinese Fast Food",
    cloudinaryImageId:
      "FOOD_CATALOG/IMAGES/CMS/2024/9/22/c0369103-61eb-498f-8457-49d226903972_568fd5f0-6876-4d2f-8a69-391af4c69d8e.jpg",
    locality: "Sector 3",
    areaName: "Rohini Sec 4",
    costForTwo: "₹300 for two",
    cuisines: ["South Indian", "Chinese"],
    avgRating: 4,
  },
  {
    id: "523802",
    name: "New south Indian Fast Food",
    cloudinaryImageId: "a6qmsr4wdzrckbhvuze5",
    locality: "Sector 6",
    areaName: "Rohini",
    costForTwo: "₹150 for two",
    cuisines: ["South Indian", "Chinese"],
    avgRating: 4.1,
  },
  {
    id: "316632",
    name: "Saravana South Indian Cafe",
    cloudinaryImageId: "l1fno5dozv4pwkimwf4d",
    locality: "Sector 6",
    areaName: "Rohini",
    costForTwo: "₹150 for two",
    cuisines: ["South Indian", "Chinese"],
    avgRating: 4,
    veg: true,
    parentId: "178094",
  },
  {
    id: "523802",
    name: "New south Indian Fast Food",
    cloudinaryImageId: "a6qmsr4wdzrckbhvuze5",
    locality: "Sector 6",
    areaName: "Rohini",
    costForTwo: "₹150 for two",
    cuisines: ["South Indian", "Chinese"],
    avgRating: 4.1,
    veg: true,
    parentId: "312459",
    avgRatingString: "4.1",
  },
];

const RestaurentCard = ({
  name,
  cloudinaryImageId,
  areaName,
  cuisines,
  avgRating,
}) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="img"
      />
      <h3>{cuisines ? cuisines.join(", ") : ""}</h3>
      <h4>{areaName ? areaName : ""}</h4>
      <h4>{avgRating ? avgRating : ""} Stars</h4>
    </div>
  );
};

const Body = () => {
  return (



    <div className="restaurent-list">
    {RestaurentList.map((restaurant)=>{
      return(
        <RestaurentCard {...restaurant}/>
      )
    })}
    </div>
  );
};

const Footer = () => {
  return <h1>Footer</h1>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);
