"use client";
import { usePathname, useRouter } from "next/navigation";
import styles from "./ui.module.css";
import { ActionIcon } from "@mantine/core";

const BottomFixedNavigator = () => {
  const pathname = usePathname();
  const router = useRouter();
  const handleNavigate = (pages: string) => {
    router.push(`/${pages}`);
  };

  return (
    <div className={styles.fixedBottom}>
      <div className={styles.navigatorWrap}>
        {/* 홈 */}
        <ActionIcon
          variant="transparent"
          size="lg"
          onClick={() => handleNavigate("home")}
          className={`${styles.btn} ${
            pathname === "home" ? styles.btnActive : styles.btnInactive
          }`}
          classNames={{
            icon: styles.btn,
          }}
        >
          <div className={styles.icon}>🏠</div>
          <div className={styles.textXs}>홈</div>
        </ActionIcon>

        {/* 생태관광 */}
        <ActionIcon
          variant="transparent"
          size="lg"
          onClick={() => handleNavigate("routes")}
          className={`${styles.btn} ${
            pathname === "routes" ? styles.btnActive : styles.btnInactive
          }`}
          classNames={{
            icon: styles.btn,
          }}
        >
          <div className={styles.icon}>🗺️</div>
          <div className={styles.textXs}>생태관광</div>
        </ActionIcon>

        {/* 인증 - CTA 스타일 (가운데 배치) */}
        <ActionIcon
          variant="transparent"
          size="lg"
          onClick={() => handleNavigate("missions")}
          className={`${styles.cta}${
            pathname === "missions" ? styles.ctaActive : styles.ctaInactive
          }`}
          classNames={{
            icon: styles.cta,
          }}
        >
          <div className={styles.ctaIcon}>📷</div>
          <div className={`${styles.textXs} ${styles.fontMedium}`}>인증</div>
        </ActionIcon>

        {/* 커뮤니티 */}
        <ActionIcon
          variant="transparent"
          size="lg"
          onClick={() => handleNavigate("results")}
          className={`${styles.btn} ${
            pathname === "results" || pathname === "community"
              ? styles.btnActive
              : styles.btnInactive
          }`}
          classNames={{
            icon: styles.btn,
          }}
        >
          <div className={styles.icon}>👥</div>
          <div className={styles.textXs}>커뮤니티</div>
        </ActionIcon>

        {/* 마이 */}
        <ActionIcon
          variant="transparent"
          size="lg"
          onClick={() => handleNavigate("dashboard")}
          className={`${styles.btn} ${
            pathname === "dashboard" ? styles.btnActive : styles.btnInactive
          }`}
          classNames={{
            icon: styles.btn,
          }}
        >
          <div className={styles.icon}>🙍‍♂️</div>
          <div className={styles.textXs}>마이</div>
        </ActionIcon>
      </div>
    </div>
  );
};

export default BottomFixedNavigator;
