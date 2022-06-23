import React from "react";

// import carData
import { carsData } from "../data";
//  useParams
import { useParams } from "react-router-dom";


const PropertyDetails = () => {
  const { id } = useParams();
  const property = carsData.find((car) => {
    return car.id === parseInt(id);
  });

  return (
    <div className="container mx-auto min-h-[800px] mb-14">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-lg mb-4">{property.address}</h3>
        </div>
        <div className="text-3xl font-semibold text-violet-600">
          {property.price} TL
        </div>
      </div>
      <div className="flex flex-col items-start gap-8 lg:flex-row">
        <div className="max-w-[580px]">
          <div className="mb-8">
            <img src={property.imageLg} alt="" />
          </div>
          <div>
            <h6>İlan Tarihi : &emsp;&emsp;{property.date} </h6>
            <h6>
              Yakıt : &emsp;&emsp;&emsp;&emsp;{property.fuel}{" "}
            </h6>
            <h6>
              Vites : &emsp;&emsp;&emsp;&emsp;{property.gear}{" "}
            </h6>
            <h6>Motor Gücü : &emsp;{property.power} </h6>
            <h6>Motor Hacmi : &ensp;{property.capacity} </h6>
            <h6>Renk : &emsp;&emsp;&emsp;&ensp;&ensp;{property.color} </h6>
          </div>
        </div>
        <div className="flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8">
          <div className="flex items-center gap-x-4 mb-8">
            <div>
              <div className="font-bold text-lg">{property.agent.name}</div>
            </div>
          </div>
          <form className="flex flex-col gap-y-4">
            <input
              className="border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none"
              type="text"
              placeholder="Ad Soyad*"
            />
            <input
              className="border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none"
              type="text"
              placeholder="Email*"
            />
            <input
              className="border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none"
              type="text"
              placeholder="Telefon*"
            />
            <textarea
              className="border border-gray-300 focus:border-violet-700 rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none"
              type="text"
              placeholder="Mesaj*"
            />
            <div className="flex gap-x-2">
              <button
                className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition"
                type="submit"
              >
                Mesaj Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;