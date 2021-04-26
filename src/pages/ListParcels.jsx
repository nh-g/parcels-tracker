import React from 'react'
import ParcelItem from "../components/parcels/ParcelItem";

export default function ListParcels({parcels}) {
    console.log(parcels)
    const ParcelsArray = parcels.map((item) => (
      <ParcelItem key={item.id} parcel={item} />
    ));
    const greetUser = parcels[0].user_name;

    return (
      <section className="home">
        <header>
          <h1>Hi {greetUser}!</h1>
          <p>Here you can track your parcels</p>
        </header>
        
        {parcels.length >= 0 ? (
          <div className="order-list">{ParcelsArray}</div>
        ) : (
          <p>"There is no parcel to track"</p>
        )}
      </section>
    );
}
