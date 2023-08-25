import React, {useState} from 'react';
import searchImg from '../assets/searchimg.svg';

const Form = props => {
    const [ipaddr, setIpaddr] = useState('');
    const searchIP = event => {
        event.preventDefault();
        props.trackIpaddr(ipaddr);
    }

    return (
        <form action="" onSubmit={searchIP} className='flex justify-center my-4 max-w-2xl mx-auto'>
            <input 
                type="text" 
                name="ipaddr" 
                id="ipaddr" 
                value={ipaddr} 
                onChange={e => setIpaddr(e.target.value)}
                placeholder="Enter IP address or domain"
                className='shadow appearance-none border w-80 rounded-l-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center'
            />
            <button type='submit' className="bg-black py-4 px-4 rounded-r-lg">
                <img src={searchImg} alt="" />
            </button>
        </form>
    );
};

export default Form;