import RowPekerjaan from "./rowPekerjaan";
import RowRiwayat from "./rowPekerjaan";

export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
                <h2 className="text-2xl font-bold mb-4">Riwayat Pekerjaan</h2>
            </div>
            <RowPekerjaan tahun="2026" instansi="Google" sebagai="Graphic Designer" />
            <RowPekerjaan tahun="2028" instansi="Unilever" sebagai="Senior Graphic Designer" />
            <RowPekerjaan tahun="2030" instansi="Amazon" sebagai="HRD" />
            <RowPekerjaan tahun="2032" instansi="Deloitte" sebagai="Manager Marketing" />
        </div>
    );
}