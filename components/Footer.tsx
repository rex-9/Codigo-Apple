import Image from "next/image";

import styles from "../styles/Footer.module.scss";

import {
  aboutApple,
  account,
  appleStore,
  appleValues,
  appleWallet,
  entertainment,
  forBusiness,
  forEducation,
  forGovernment,
  forHealthcare,
  shopNLearn,
} from "../data";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <p>
          1. $6.99/month after free trial. Only one offer per Apple ID and only
          one offer per family if you’re part of a Family Sharing group,
          regardless of the number of devices you or your family purchases. This
          offer is not available if you or your Family have previously accepted
          an Apple TV+ one year free offer. Offer good for 3 months after
          eligible device activation. Plan automatically renews until cancelled.
          Restrictions and other terms apply.
        </p>
        <p>
          2. One subscription per Family Sharing group. Plan automatically
          renews until cancelled.
        </p>
        <p>
          3. The Apple One free trial includes only services that you are not
          currently using through a free trial or a subscription. Plan
          automatically renews after trial until cancelled. Restrictions and
          other terms apply.
        </p>
        <p>
          4. Limited-time offer; offer may end at any time. Free Apple TV+
          access for students ends when you no longer qualify or do not renew
          your Apple Music Student subscription. Offer good for verified college
          students only and does not extend to a Family Sharing group.
        </p>
      </div>

      <hr className={styles.hr} />

      <div className={styles.breadcrumb}>
        <Image
          src="/icons/apple-brown.svg"
          width={15}
          height={15}
          alt="apple"
        />
        <span>&gt;</span>
        <span>Only on Apple</span>
        <span>&gt;</span>
        <span>Apple TV+</span>
      </div>

      <hr className={styles.hr} />

      <div className={styles.more}>
        <div>
          <span className={styles.title}>Shop and Learn</span>
          {shopNLearn.map((item) => (
            <p key={item}>{item}</p>
          ))}
          <span className={styles.title}>Apple Wallet</span>
          {appleWallet.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div>
          <span className={styles.title}>Account</span>
          {account.map((item) => (
            <p key={item}>{item}</p>
          ))}
          <span className={styles.title}>Entertainment</span>
          {entertainment.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div>
          <span className={styles.title}>Apple Store</span>
          {appleStore.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div>
          <span className={styles.title}>For Business</span>
          {forBusiness.map((item) => (
            <p key={item}>{item}</p>
          ))}
          <span className={styles.title}>For Education</span>
          {forEducation.map((item) => (
            <p key={item}>{item}</p>
          ))}
          <span className={styles.title}>For Healthcare</span>
          {forHealthcare.map((item) => (
            <p key={item}>{item}</p>
          ))}
          <span className={styles.title}>For Government</span>
          {forGovernment.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div>
          <span className={styles.title}>Apple Values</span>
          {appleValues.map((item) => (
            <p key={item}>{item}</p>
          ))}
          <span className={styles.title}>About Apple</span>
          {aboutApple.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>

      <p style={{ marginTop: "3rem" }}>
        More ways to shop :
        <a href="https://www.apple.com/retail/">Find an Apple Store</a> or
        <a href="https://locate.apple.com/"> other retailer </a> near you . Or
        call 1-800-MY-APPLE.
      </p>
      <hr className={styles.hr} />
      <div className={styles.cr}>
        Copyright © 2023 Apple Inc. All rights reserved.
        <div className={styles.us}>
          <div /> Privacy Policy <div className={styles.vl} /> Terms of Use{" "}
          <div className={styles.vl} /> Sales and Refunds{" "}
          <div className={styles.vl} /> Legal <div className={styles.vl} /> Site
          Map{" "}
        </div>
        United States
      </div>
    </div>
  );
};

export default Footer;
