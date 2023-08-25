import React from 'react';

const IPDetails = props => {
  return (
    <div className='p-8'>
        <div
            className="bg-white rounded-xl shadow max-w-6xl mx-auto grid grid-cols-1 text-center md:grid-cols-2 lg:p-8 lg:grid-cols-4 lg:gap-0 lg:text-left -mb-10 relative lg:-mb-32"
            style={{
                zIndex: 1000,
            }}
        >
            <div className="lg:border-r lg:border-slate-400 p-6">
                <h2 className="text-sm uppercase text-slate-600">IP Address</h2>
                <p className="font-bold text-slate-900 text-2xl">
                    {props.address.ip}
                </p>
            </div>

            <div className="lg:border-r lg:border-slate-400 p-6">
                <h2 className="text-sm uppercase text-slate-600">Location</h2>
                <p className="font-bold text-slate-900 text-2xl">
                    {props.address.location.city}, {props.address.location.region}
                </p>
            </div>

            <div className="lg:border-r lg:border-slate-400 p-6">
                <h2 className="text-sm uppercase text-slate-600">Timezone</h2>
                <p className="font-bold text-slate-900 text-2xl">
                    Uprops.TC {props.address.location.timezone}
                </p>
            </div>

            <div className="p-6">
                <h2 className="text-sm uppercase text-slate-600">ISP</h2>
                <p className="font-bold text-slate-900 text-2xl">
                    {props.address.isp}
                </p>
            </div>
        </div>
    </div>
  );
};

export default IPDetails;