import React, { useEffect, useState } from "react";
import "../styles/Filter.css";
import FlowerCard from "./Flower-card";
import CartLmj from "./CartLmj";
import { Flowers } from "../data/main";

const Filter = () => {
  const [sortOrder, setSortOrder] = useState("croissant");
  const [priceFilter, setPriceFilter] = useState("Tous les prix");
  const [typeFilter, setTypeFilter] = useState("Tous les types");
  const [filteredFlowers, setFilteredFlowers] = useState([]);
  const flowers = Flowers();

  // Fonction pour trier les fleurs
  const sortedFlowers = () => {
    let sortedArray = [...flowers];
    if (sortOrder === "croissant") {
      sortedArray = sortedArray.sort((a, b) => a.Price - b.Price);
    } else {
      sortedArray = sortedArray.sort((a, b) => b.Price - a.Price);
    }
    return sortedArray;
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const changePrice = (e) => {
    setPriceFilter(e.target.value);
  };

  const changeType = (e) => {
    setTypeFilter(e.target.value);
  };

  useEffect(() => {
    // Filtrer par prix
    let filteredByPrice = flowers;
    if (priceFilter !== "Tous les prix") {
      const [minPrice, maxPrice] = priceFilter.split("-");
      filteredByPrice = flowers.filter(
        (flower) =>
          flower.Price >= parseFloat(minPrice) &&
          flower.Price <= parseFloat(maxPrice)
      );
    }

    // Filtrer par type
    let filteredByType = filteredByPrice;
    if (typeFilter !== "Tous les types") {
      filteredByType = filteredByPrice.filter((flower) =>
        flower.Type.toLowerCase().includes(typeFilter.toLowerCase())
      );
    }

    // Tri et mise à jour de la liste de fleurs filtrée
    const sortedAndFilteredFlowers = sortedFlowers().filter((flower) =>
      filteredByType.includes(flower) && filteredByPrice.includes(flower)
    );
    setFilteredFlowers(sortedAndFilteredFlowers);
  }, [flowers, priceFilter, typeFilter, sortOrder]);

  return (
    <div>
        <div className="filter">
          <div className="sort-attributes">
            <input
              type="radio"
              name="sort"
              id="croissant"
              value="croissant"
              checked={sortOrder === "croissant"}
              onChange={handleSortChange}
            />
            <label htmlFor="croissant">Croissant</label>
          </div>
          <div className="sort-attributes">
            <input
              type="radio"
              name="sort"
              id="decroissant"
              value="decroissant"
              checked={sortOrder === "decroissant"}
              onChange={handleSortChange}
            />
            <label htmlFor="decroissant">Décroissant</label>
          </div>
          <div className="filters">
            <label htmlFor="price">Prix</label>
            <select
              onChange={changePrice}
              value={priceFilter}
              name="price"
              id="price"
            >
              <option defaultChecked value="Tous les prix">
                Tous les prix
              </option>
              <option value="0-10">0€ - 10€</option>
              <option value="10-20">10€ - 20€</option>
              <option value="20-30">20€ - 30€</option>
              <option value="30-40">30€ - 40€</option>
            </select>
          </div>
          <div className="filters">
            <label htmlFor="type">Type</label>
            <select
              onChange={changeType}
              value={typeFilter}
              name="type"
              id="type"
            >
              <option defaultChecked value="Tous les types">
                Tous les types
              </option>
              <option value="iris">Iris</option>
              <option value="lilas">Lilas</option>
              <option value="rose">Rose</option>
              <option value="orchidée">Orchidée</option>
              <option value="lys">Lys</option>
            </select>
          </div>
        </div>
        <div className="flowers">
          {filteredFlowers.map((item) => (
            <FlowerCard
              key={item.id}
              id={item.id}
              image={item.Pic_URL}
              title={item.FlowerName + " " + item.Type}
              price={item.Price}
            />
          ))}
        </div>
      </div>
  );
};

export default Filter;
