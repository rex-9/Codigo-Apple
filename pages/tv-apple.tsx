import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import styles from "../styles/Back.module.scss";

const TvApple = () => {
  return (
    <div>
      <Nav />
      <div className={styles.back}>
        <Link href={"/"}>
          <div>
            <Image
              src="/icons/back.png"
              className={styles.pointer}
              alt="Back Arrow"
              width="100%"
              height={30}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TvApple;
