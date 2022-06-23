import React, { createContext, useState, useEffect } from 'react';

// import data
import { carsData } from '../data';

// create context
export const CarContext = createContext();

// provider
const CarContextProvider = ({ children }) => {
  const [cars, setCars] = useState(carsData);
  const [city, setCity] = useState('Location (any)');
  const [cities, setCities] = useState([]);
  const [brand, setBrand] = useState('Brand (any)');
  const [brands, setBrands] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // return all cities
    const allCities = cars.map((car) => {
      return car.city;
    });

    // remove duplicates
    const uniqueCities = ['Location (any)', ...new Set(allCities)];

    // set cities state
    setCities(uniqueCities);
  }, []);

  useEffect(() => {
    // return only cities
    const allBrands = cars.map((car) => {
      return car.type;
    });

    // remove duplicates
    const uniqueBrands = ['Brand (any)', ...new Set(allBrands)];

    // set cities state
    setBrands(uniqueBrands);
  }, []);

  const handleClick = () => {
    setLoading(true);
    // check the string if includes '(any)'
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };

    // get first string (price) and parse it to number
    const minPrice = parseInt(price.split(' ')[0]);
    // get last string (price) and parse it to number
    const maxPrice = parseInt(price.split(' ')[2]);

    const newCars = carsData.filter((car) => {
      const carPrice = parseInt(car.price);
      // all values are selected
      if (
        car.city === city &&
        car.type === brand &&
        carPrice >= minPrice &&
        carPrice <= maxPrice
      ) {
        return car;
      }
      // all values are default
      if (isDefault(city) && isDefault(brand) && isDefault(price)) {
        return car;
      }
      // city is not default
      if (!isDefault(city) && isDefault(brand) && isDefault(price)) {
        return car.city === city;
      }
      // brand is not default
      if (!isDefault(brand) && isDefault(city) && isDefault(price)) {
        return car.type === brand;
      }
      // price is not default
      if (!isDefault(price) && isDefault(city) && isDefault(brand)) {
        if (carPrice >= minPrice && carPrice <= maxPrice) {
          return car;
        }
      }
      // city and brand is not default
      if (!isDefault(city) && !isDefault(brand) && isDefault(price)) {
        return car.city === city && car.type === brand;
      }
      // city and price is not default
      if (!isDefault(city) && isDefault(brand) && !isDefault(price)) {
        if (carPrice >= minPrice && carPrice <= maxPrice) {
          return car.city === city;
        }
      }
      // brand and price is not default
      if (isDefault(city) && !isDefault(brand) && !isDefault(price)) {
        if (carPrice >= minPrice && carPrice <= maxPrice) {
          return car.type === brand;
        }
      }
    });

    // create a showMessage function to render a "Nothing found" message to the screen
    setTimeout(() => {
      return (
        newCars.length < 1 ? setCars([]) : setCars(newCars),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <CarContext.Provider
      value={{
        city,
        setCity,
        cities,
        brand,
        setBrand,
        brands,
        price,
        setPrice,
        handleClick,
        cars,
        loading,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export default CarContextProvider;
