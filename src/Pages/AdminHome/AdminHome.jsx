import { useQuery } from "@tanstack/react-query";
import useAxious from "../../Hooks/AxiousSecure";
import { FaChartLine, FaUsers, FaCookieBite, FaCartPlus  } from "react-icons/fa";


const AdminHome = () => {
    const axiousSecure = useAxious()

    const { data: stats } = useQuery({
        queryKey: ['adminstates'],
        queryFn: async () => {
            const res = await axiousSecure.get('/admin-stats')
            return res.data
        }
    })
    // #BB34F5 0%, #FCDBFF 100%)

    return (
        <div className="mt-24 ml-12 text-white grid md:grid-cols-4 gap-4">
            <div className="flex items-center bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] p-4 gap-4">
                <div className="text-4xl">
                    <FaChartLine></FaChartLine>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold">{stats.revenue}</p>
                    <h4 className="text-xl">Revenue</h4>
                </div>
            </div>
            <div className="flex items-center bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] p-4 gap-4">
                <div className="text-4xl">
                    <FaUsers></FaUsers>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold">{stats.users}</p>
                    <h4 className="text-xl">Customerse</h4>
                </div>
            </div>
            <div className="flex items-center bg-gradient-to-r from-[#FE4880] to-[#FECDE9] p-4 gap-4">
                <div className="text-4xl">
                    <FaCookieBite></FaCookieBite>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold">{stats.menuItem}</p>
                    <h4 className="text-xl">Products</h4>
                </div>
            </div>
            <div className="flex items-center bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] p-4 gap-4">
                <div className="text-4xl">
                    <FaCartPlus></FaCartPlus>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold">{stats.totalOrder}</p>
                    <h4 className="text-xl">Orders</h4>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;