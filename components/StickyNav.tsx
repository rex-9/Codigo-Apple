import styles from "../styles/StickyNav.module.scss";

const StickyNav = () => {
  return (
    <div className={styles.sticky}>
      <div>Apple TV+</div>
      <a href="https://tv.apple.com/channel/tvs.sbd.4000?itscg=10000&itsct=atv-tv_op-nav_wch-ctr-210111">
        <button type="button">Stream now</button>
      </a>
    </div>
  );
};

export default StickyNav;
