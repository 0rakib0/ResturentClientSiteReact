import SectionTitle from "../../SharePage/SectionTitle"
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe('pk_test_51OEoO4Blrghrygtul7qcnZ2QxRfa2WsBD1BOmsfyp8VyLl5ZDRbC7AkA89wTRtUIsRnCRrhGTJgfDoXIUT6s9eU400JTND6Mye');

const Payment = () => {

    

    return (
        <div>
            <SectionTitle
                subHeader="Please payment to eat"
                mainDeader="PAYMENT"
            ></SectionTitle>
            <div className="ext-2xl font-semibold">
                <div>Please payment you card due!</div>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    )
}

export default Payment