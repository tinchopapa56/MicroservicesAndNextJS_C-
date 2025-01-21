import Image from "next/image";
import { Listings } from "./auctions";

export default function Home() {
  return (
    <div>
      <h3 className="text-3xl font-serif">Home title</h3>
      <Listings />
    </div>
  );
}
