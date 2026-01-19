import Image from "next/image";
import connectiondb from './lib/mongoose'

export default async function Home() {

 await connectiondb()

  return (
    <div>Hi This is Atif</div>
  );
}
