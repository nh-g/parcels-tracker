import React, {useEffect, useState} from 'react';
import FetchData from '../FetchData'
import axios from 'axios';

import ParcelItem from './ParcelItem';

export default function ParcelList() {
    const [parcels, setParcels] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');
    
    const ParcelsArray = parcels.map((item) => 
    <ParcelItem key={item.id} parcel ={item}/>
    )
   
    useEffect(() => {
        FetchData('https://my.api.mockaroo.com/orders.json?key=e49e6840')
          .then(res => {
            setParcels(res);
            setLoad(true)
        }).catch(err => {
                setError(err);
                setLoad(true);
            }
        );
    }, []);
    

    if (load) {
        return (
          <ul>
            {error ? (
              <li>{error.message}</li>
            ) : (
              <ParcelsArray />
            )}
          </ul>
        );
    } else {
        return (
            <div>
                Loading...
            </div>
        );
    }
};

