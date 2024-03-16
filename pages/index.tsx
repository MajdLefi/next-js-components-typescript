import Dynamic from "next/dynamic";
const OurServices = Dynamic(() => import("@/components/our-services"), { ssr: false });
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <OurServices />
    </>
  );
}
