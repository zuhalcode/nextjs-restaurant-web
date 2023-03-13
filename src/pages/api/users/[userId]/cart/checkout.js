import midtransClient from "@lib/midtrans";

export default async function handler(req, res) {
  const { orderId, grossAmount, firstName, lastName, email, phone } = req.body;

  try {
    const transactionDetails = {
      order_id: orderId,
      gross_amount: grossAmount,
    };

    const customerDetails = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
    };

    const parameter = {
      transaction_details: transactionDetails,
      customer_details: customerDetails,
    };

    const transaction = await midtransClient.createTransaction(parameter);

    const transactionToken = transaction.token;
    res.status(200).json({ transactionToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}
