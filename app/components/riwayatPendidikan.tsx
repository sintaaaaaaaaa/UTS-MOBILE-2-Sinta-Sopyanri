import RowRiwayat from "./rowRiwayat";

export default function RiwayatPendidikan() {
    return (
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Riwayat Pendidikan</h2>
            </div>
            <RowRiwayat jenjang="SD" sekolah="SDN 3 Pakemitan" tahun="2010 - 2016" />
            <RowRiwayat jenjang="SMP" sekolah="SMP Islam Rajapolah" tahun="2016 - 2019" />
            <RowRiwayat jenjang="SMA" sekolah="MAN 3 Tasikmalaya" tahun="2019 - 2021" />
            <RowRiwayat jenjang="Perguruan Tinggi" sekolah="Masoem University" tahun="2022 - 2026" />
        </div>
    );
}