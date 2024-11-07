import React from 'react';

const PersonalInfo = () => {
    return (
        <div className="border border-gray-300 rounded-lg shadow-lg p-6 max-w-md mx-auto mt-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Personal Info</h2>
            <div className="text-gray-700">
                <p className="text-lg mb-2"><strong>Name:</strong> Sinta Sopyanti</p>
                <p className="text-lg mb-2"><strong>TTL:</strong> Tasikmalaya 17 Juni 2004</p>
                <p className="text-lg mb-2"><strong>Jenis Kelamin:</strong> Perempuan</p>
                <p className="text-lg mb-2"><strong>Tinggi Badan:</strong> 157 cm</p>
                <p className="text-lg mb-2"><strong>Berat Badan:</strong> 50 kg</p>
                <p className="text-lg mb-2"><strong>Status Pernikahan:</strong> Belum Menikah</p>
                <p className="text-lg mb-2"><strong>Whatsapp:</strong> 083872078598</p>
                <p className="text-lg"><strong>Email:</strong> sinta.sopyanti@gmail.com</p>
            </div>
        </div>
    );
};

export default PersonalInfo;
