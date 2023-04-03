import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";
import Link from "next/link";
import { useEffect } from "react";

import styles from "../styles/Hero.module.scss";

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const video = document.getElementById("bgVideo");
      const firstContent = document.getElementById("firstContent");
      const secondContent = document.getElementById("secondContent");
      const thirdContent = document.getElementById("thirdContent");
      const fourthContent = document.getElementById("fourthContent");
      const price = document.getElementById("price");
      video!.style.backgroundColor = `rgba(0, 0, 0, ${window.scrollY / 500})`;
      firstContent!.style.opacity = `${1 - window.scrollY / 200}`;

      if (scrollY > 200) {
        secondContent!.style.opacity = `${0 + (scrollY - 200) / 200}`;
      }
      if (scrollY > 300) {
        thirdContent!.style.opacity = `${0 + (scrollY - 300) / 200}`;
      }
      if (scrollY > 400) {
        fourthContent!.style.opacity = `${0 + (scrollY - 400) / 200}`;
      }
      if (scrollY > 500) {
        price!.style.opacity = `${0 + (scrollY - 700) / 300}`;
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="bgVideo">
        <video className={styles.bgVideo} autoPlay loop muted>
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
        <section className={styles.hero}>
          <div id="firstContent" className={styles.content}>
            <h2>
              All Apple Originals.
              <br />
              Only on Apple TV+.
            </h2>
            <Link href={"/tv-apple"}>Stream now</Link>
            <p>Watch on the tv App</p>
          </div>
        </section>

        <section className={styles.sectionValueProps}>
          <ul>
            <li id="secondContent">New Apple Originals every month.</li>
            <li id="thirdContent">
              Stream on the Apple TV app on Apple <br />
              devices, smart TVs, consoles, or sticks.
            </li>
            <li id="fourthContent">Share Apple TV+ with your family</li>
          </ul>
        </section>
      </div>

      <section className={styles.sectionValuePrices}>
        <ul id="price" style={{ opacity: 0 }}>
          <li>
            <h5>Buy an Apple device</h5>
            <h3>3 months free.</h3>
            <div className={styles.card}>
              Apple TV+ is included for 3 months when you purchase an Apple
              device and redeem the offer within 90 days. <sup>1</sup>
            </div>
            <a href="https://tv.apple.com/channel/tvs.sbd.4000?itscg=10000&itsct=atv-0-tv_ovp-prc_elg-apl-avl-200306">
              Check eligibility
            </a>
          </li>

          <li>
            <h5>Free 7-day trial</h5>
            <h3>$6.99/mo.</h3>
            <div className={styles.card}>
              A monthly subscription is just $6.99 per month after a free 7-day
              trial. Share Apple TV+ with your family. <sup>2</sup>
            </div>
            <a href="https://tv.apple.com/channel/tvs.sbd.4000?itscg=10000&itsct=atv-0-tv_ovp-prc_tif-apl-avl-200306">
              Try it free
            </a>
          </li>

          <li>
            <h5>Free 1‑month trial</h5>
            <h3>Apple One</h3>
            <div className={styles.card}>
              Bundle Apple TV+ with up to five other great services for one low
              monthly price. And enjoy more for less. <sup>3</sup>
              <div className={styles.learnMore}>
                <a
                  href="https://www.apple.com/apple-one/"
                  className={styles.link}
                >
                  Learn More
                </a>
                <ChevronRightIcon className={styles.icon} />
              </div>
            </div>
            <a href="https://one.apple.com/us/tv/?itscg=10000&itsct=one-NA-tvhro-bnr-apl-avl-102020">
              Try Apple One free <sup>3</sup>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Hero;
