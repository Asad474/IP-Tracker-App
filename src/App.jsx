import React, {useEffect, useState} from 'react';
import Map from './components/Map';
import Form from './components/Form';
import background from './assets/background.png';
import IPDetails from './components/IPDetails';
import axios from 'axios';

function App() {
  const [ipaddr, setIpaddr] = useState('8.8.8.8');
  const [address, setAddress] = useState(null);

  const trackIpaddr = ip => {
    setIpaddr(ip);
  };

  useEffect(() => {
    const fetchDetails = async() => {
      const checkIpaddr = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
      const checkDomain = /^(?!-)[A-Za-z0-9-]+([-.\]{1}[a-z0-9]+)*\.[A-Za-z]{2,6}$/;

      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country,city`, {
            params: {
              apiKey: process.env.REACT_APP_API_KEY,
              ...(checkIpaddr.test(ipaddr) ? { ipAddress: ipaddr } : {}),
              ...(checkDomain.test(ipaddr) ? { domain: ipaddr } : {})
            }
        }
      );

      const data = response.data;
      setAddress(data);
    };

    fetchDetails();
  }, [ipaddr]);

  return (
    <>
      <div className="relative">
        <img src={background} alt="" className='w-full h-80 object-cover' />
      </div>

      <div className='absolute top-10 left-0 w-full flex flex-col items-center'>
        <h1 className="text-3xl font-bold text-center text-white ">
          IP Address Tracker
        </h1>
        <Form trackIpaddr={trackIpaddr}/>
        {address && <IPDetails address={address}/>}
      </div>
      {ipaddr && address && <Map position={[address.location.lat, address.location.lng]} />}
    </>
  );
};

export default App;