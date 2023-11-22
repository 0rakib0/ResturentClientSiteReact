import { useContext } from "react"
import useAxious from "../../Hooks/AxiousSecure"
import SectionTitle from "../../SharePage/SectionTitle"
import { AuthContext } from "../../Provider/Provider"
import { useQuery } from "@tanstack/react-query"

const PaymentHistory = () => {
    const { user } = useContext(AuthContext)
    const secureAxious = useAxious()

    const email = user?.email


    const { data: paymentData } = useQuery({
        queryKey: ['payment', user?.email],
        queryFn: async () => {
            const res = await secureAxious.get(`/payment-history/${user?.email}`)
            return res.data || []
        }

    })
    console.log(paymentData)

    return (
        <div>
            <SectionTitle
                subHeader="My Payment History"
                mainDeader="PAYMENT HISTORY"
            ></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Price</th>
                                <th>Transation ID</th>
                                <th>Status</th>
                                <th>Item</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                paymentData?.map((data, index) => <tr key={data._id}>
                                    <th>{index + 1}</th>
                                    <td>${data.price}</td>
                                    <td>{data.transactionId}</td>
                                    <td>{data.status}</td>
                                    <td>{
                                    data.menuItem.map(item =><p>{item}</p>)
                                    }</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PaymentHistory