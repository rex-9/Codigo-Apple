import Image from "next/image";

import styles from "../styles/Cards.module.scss";

import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Cards = () => {
  return (
    <>
      <div className={styles.cards}>
        <div className={styles.hCard}>
          <div
            className={styles.imgForLarge}
            style={{ marginLeft: "1.2rem", padding: "2rem 0 0 0" }}
          >
            <Image src="/images/one.jpg" width={550} height={340} alt="one" />
          </div>
          <header>
            <div className={styles.title}>
              <Image
                src="/images/apple-one.png"
                width="100&"
                height={30}
                alt="apple"
              />
            </div>
            <div className={styles.subTitle}>
              Bundle Apple TV+ with
              <br />
              up to five other great services.
              <br />
              And enjoy more for less.
            </div>
            <button type="button">
              Try Apple One free<sup>3</sup>
            </button>
            <div className={styles.link}>
              <a href="https://www.apple.com/apple-one/">Learn More</a>
              <ChevronRightIcon className={styles.icon} />
            </div>
          </header>
          <div
            className={styles.imgForSmall}
            style={{ marginLeft: "1.2rem", padding: "0 0 2rem 0" }}
          >
            <Image src="/images/one.jpg" width={550} height={340} alt="one" />
          </div>
        </div>

        <div className={styles.hCard} style={{ overflow: "hidden" }}>
          <header>
            <div className={`${styles.subTitle} ${styles.textLeft}`}>
              The Apple Music
              <br />
              Student Plan comes
              <br />
              with Apple TV+ for free. <sup>4</sup>
            </div>
            <button className={styles.textLeft} type="button">
              Try Apple One free
            </button>
          </header>
          <div className={styles.cardImg}>
            <Image
              src="/images/music.jpg"
              width={440}
              height={350}
              alt="music"
            />
          </div>
        </div>

        <div className={styles.vCardGrid}>
          <div className={styles.vCard}>
            <header style={{ paddingBottom: 0 }}>
              <div className={styles.title}>
                <Image
                  src="/images/tv4k.png"
                  width="100%"
                  height={30}
                  alt="apple"
                />
              </div>
              <div className={styles.subTitle}>
                The Apple experience.
                <br />
                Cinematic in every sense.
              </div>
              <div style={{ display: "flex", gap: "1.5rem" }}>
                <button type="button" style={{ backgroundColor: "#0071e3" }}>
                  Buy
                </button>
                <div className={styles.link}>
                  <a href="https://www.apple.com/apple-one/">Learn More</a>
                  <ChevronRightIcon className={styles.icon} />
                </div>
              </div>
            </header>

            <Image src="/images/hdtv.jpg" width={500} height={400} alt="hdtv" />
          </div>
          <div className={styles.vCard}>
            <header style={{ paddingBottom: 0 }}>
              <div className={styles.subTitle}>
                AirPlay
                <br />
                Bring Apple TV+ to
                <br />a screen near you.
              </div>
              <div style={{ display: "flex", gap: "1.5rem" }}>
                <div className={styles.link}>
                  <a href="https://www.apple.com/apple-one/">Learn More</a>
                  <ChevronRightIcon className={styles.icon} />
                </div>
              </div>
            </header>

            <Image
              src="/images/planet.jpg"
              width={500}
              height={400}
              alt="planet"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
