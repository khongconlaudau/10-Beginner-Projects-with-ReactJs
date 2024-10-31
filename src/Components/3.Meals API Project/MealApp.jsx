import { useEffect, useState } from "react";
import "./MealStyle.css"
const MealApp = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
      );
      const data = await res.json();
      setItems(data.meals);
    };
    getData();
  }, []);

  const itemList = items.map(({ strMeal, strMealThumb, idMeal }) =>{
    return <section className="card" key={idMeal}>
        <img src={strMealThumb} alt={strMeal} />
        <section className="content">
            <p>{strMeal}</p>
            <p>#{idMeal}</p>
        </section>
    </section>
  })
  return (
    <div className="container">
        {itemList}
    </div>
  );
};

export default MealApp;
