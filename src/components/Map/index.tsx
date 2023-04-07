import { useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { getGeocode, getLatLng } from 'use-places-autocomplete';

const mapStyleContainer = {
  width: '100%',
  height: '400px',
  margin: '0 auto',
  borderRadius: '10px'
};

interface MapProps {
  address: string;
}

const Map = ({ address }: MapProps) => {
  const center = { lat: -7.23718, lng: -39.3222 };
  const [selected, setSelected] = useState<{ lat: number; lng: number }>();

  if (address) {
    (async function () {
      const results = await getGeocode({ address });
      const { lat, lng } = getLatLng(results[0]);

      setSelected({ lat, lng });
    })();
  }

  return (
    <>
      <GoogleMap
        zoom={selected ? 16 : 12}
        center={selected ? selected : center}
        mapContainerStyle={mapStyleContainer}
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
};

const MapContainer = ({ address }: MapProps) => {
  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}
      language="pt-br"
      region="BR"
      version="weekly"
    >
      <Map address={address} />
    </LoadScript>
  );
};

export default MapContainer;
