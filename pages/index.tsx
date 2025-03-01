import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const targetDateRef = useRef(new Date().getTime() + 72 * 60 * 60 * 1000);
  const [timeLeft, setTimeLeft] = useState(
    targetDateRef.current - new Date().getTime()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDateRef.current - new Date().getTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <>
      <Head>
        <title>Coming Soon | Hoop Interactive</title>
        <meta name="description" content="Something great is on the way." />
      </Head>

      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.logoContainer}>
            <Image src="/Logo.svg" alt="Hoop Logo" width={180} height={40} />
          </div>
          <a href="#message" className={styles.contactLink}>
            Say Hello
          </a>
        </header>

        <div className={styles.centerContent}>
          <p className={styles.subtitle}>Something great is on the way</p>
          <h1 className={styles.title}>COMING SOON</h1>

          {/* Countdown Timer */}
          <div className={styles.countdown}>
            <div className={styles.time}>
              {String(days).padStart(2, "0")} : {String(hours).padStart(2, "0")}{" "}
              : {String(minutes).padStart(2, "0")} :{" "}
              {String(seconds).padStart(2, "0")}
            </div>
            <div className={styles.labels}>
              <span>Days</span>
              <span>Hours</span>
              <span>Mins</span>
              <span>Secs</span>
            </div>
          </div>

          <div className={styles.emailSection}>
            <p className={styles.ctaText}>
              Be the first to hear when we go live
            </p>
            <form className={styles.emailForm}>
              <input
                type="email"
                className={styles.emailInput}
                placeholder="Enter your email"
              />
              <button type="submit" className={styles.notifyButton}>
                Notify Me
              </button>
            </form>
          </div>
        </div>

        <div className={styles.infoSection}></div>

        <footer className={styles.footer}>
          <p className={styles.infoText}>
            Stay connected with us for updates, behind-the-scenes content, and
            exciting announcements.
          </p>
          <p className={styles.infoText}>
            Follow us on social media and be part of our journey!
          </p>

          <div className={styles.links}>
            <a
              href="https://www.linkedin.com/company/hoopinteractive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.facebook.com/hoopinteractive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.instagram.com/hoopinteractive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.tiktok.com/@hoopinteractive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/tiktok.png" alt="TikTok" width={24} height={24} />
            </a>
            <a
              href="https://www.pinterest.com/hoopinteractive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/pinterest.png"
                alt="Pinterest"
                width={24}
                height={24}
              />
            </a>
          </div>
          <p className={styles.footerText}>
            &copy; 2025 Hoop. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
