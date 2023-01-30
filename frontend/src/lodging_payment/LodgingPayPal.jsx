import {PayPalScriptProvider, PayPalHostedFieldsProvider, PayPalHostedField, usePayPalHostedFields,} from "@paypal/react-paypal-js";

    const SubmitPayment = () => {
        // Here declare the variable containing the hostedField instance
        const hostedFields = usePayPalHostedFields();

        const submitHandler = () => {
            if (typeof hostedFields.submit !== "function") return; // validate that `submit()` exists before using it
            hostedFields
                .submit({
                    // The full name as shown in the card and billing address
                    cardholderName: "Yuri Jung",
                })
                .then((order) => {
                    fetch(
                        "/lodgingPaymentEnd"
                    )
                        .then((response) => response.json())
                        .then((data) => {
                            // Inside the data you can find all the information related to the payment
                        })
                        .catch((err) => {
                            // Handle any error
                        });
                });
        };

        return <button onClick={submitHandler}>Pay</button>;
    };

    export default function PaypalApp() {
        return (
            <PayPalScriptProvider
                options={{
                    "client-id": "AelKrwx59EQIuE4_2aa69nqfooRHj2Q41Ko9IDTlD72BtjVbT_p3jaawmaQ16ciIL6m86So_MRYxxY4t",
                    "data-client-token": "ELxsQekImQ8l4mgdvtKUnisul2Y7QlwX5gaU6S53GhU-XOIV8jFXha_tsiiihYxNn8BG_30Pd7-pJlSB",
                }}
            >
                <PayPalHostedFieldsProvider
                    createOrder={() => {
                        // Here define the call to create and order
                        return fetch(
                            "/lodgingPaymentEnd"
                        )
                            .then((response) => response.json())
                            .then((order) => order.id)
                            .catch((err) => {
                                console.error(err);
                                alert("결제오류")

                            });
                    }}
                >
                    <PayPalHostedField
                        id="card-number"
                        hostedFieldType="number"
                        options={{selector: "#card-number"}}
                    />
                    <PayPalHostedField
                        id="cvv"
                        hostedFieldType="cvv"
                        options={{selector: "#cvv"}}
                    />
                    <PayPalHostedField
                        id="expiration-date"
                        hostedFieldType="expirationDate"
                        options={{
                            selector: "#expiration-date",
                            placeholder: "MM/YY",
                        }}
                    />
                    <SubmitPayment/>
                </PayPalHostedFieldsProvider>
            </PayPalScriptProvider>
        );
    }
