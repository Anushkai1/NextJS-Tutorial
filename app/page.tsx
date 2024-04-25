import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";

const Home = async () => {


  return (
    <>
      <Image
        priority={true}
        fill={true}
        // blurDataURL=''
        // placeholder="blur"
        src="/example.png"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 33vw"
        alt={""} />
    </>
  );
}


export default Home