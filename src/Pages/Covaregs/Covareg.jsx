import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { useRef } from "react";

const Covareg = () => {
  const SCenter = useLoaderData();
  console.log(SCenter);
  const position = [25.7494, 89.2611];
  const mapRef=useRef(null) 

  const handleSarch=(e)=>{
      e.preventDefault();

      const value=e.target.sarch.value;
      const district= SCenter.find(ce=>ce.district.toLowerCase().includes(value.toLowerCase()))

      if(district){
        const coord=[district.latitude,district.longitude]
        // console.log(coord,district)
        mapRef.current.flyTo(coord,14);
      }
  }

  return (
    <div className=" px-10 shadow-2xl rounded-2xl py-15">
      <h2 className="text-4xl font-bold text-secondary">
        We are available in 64 districts
      </h2>
      
        <form onSubmit={handleSarch}>
          <div className="py-8 flex gap-2 items-center">
          <label className="input outline-0">
            <svg
              className="h-[2em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input 
              name="sarch"
              className="text-xl"
              type="search"
              required
              placeholder="Search"
            />
          </label>
          <button className="px-4 py-1 text-base btn rounded-2xl bg-primary font-bold">
            Search
          </button>
          </div>
        </form>
      
      <h3 className="text-2xl my-6 text-secondary font-semibold">
        We deliver almost all over Bangladesh
      </h3>

      <div className=" w-full h-100">
        <MapContainer
          className="h-100"
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {SCenter.map((center, i) => (
            <Marker key={i} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br />{" "}
                {center.covered_area.join(" ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Covareg;
