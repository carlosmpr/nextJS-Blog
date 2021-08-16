import classes from "./hero.module.css";
import Image from "next/image";
export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.jpeg"
          alt="My image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi , Im Carlos</h1>
      <p>
        I blog about my jouerney and trick an treats about my learning process
      </p>
    </section>
  );
}
