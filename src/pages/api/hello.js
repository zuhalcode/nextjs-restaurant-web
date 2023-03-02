import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });
  console.log(session.id); // Tampilkan ID user pada server log
  // ...
}
