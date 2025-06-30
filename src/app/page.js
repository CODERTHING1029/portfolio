import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid className={styles.mainContainer}>
      <Row className="min-vh-100">
        {/* Left Section: Navigation */}
        <Col
          md={4}
          className={`${styles.leftSection} d-flex flex-column justify-content-center align-items-start p-5`}
          style={{ background: "#7F00FF", minHeight: "110vh" }}
        >
          {/* City Name on Top */}
          <div className="mb-4">
            <strong style={{ fontSize: "1.4rem" }}>Jodhpur</strong>
          </div>
          <nav>
            <ul className={styles.navList}>
              <li>
                <a href="#home" className={styles.navLink}>Home</a>
              </li>
              <li>
                <Link href="/introduction" className={styles.navLink}>Introduction</Link>
              </li>
              <li>
                <a href="#service" className={styles.navLink}>Service</a>
              </li>
              <li>
                <a href="#portfolio" className={styles.navLink}>Portfolio</a>
              </li>
              <li>
                <a href="#news" className={styles.navLink}>News</a>
              </li>
              <li>
                <a href="#contact" className={styles.navLink}>Contact</a>
              </li>
            </ul>
          </nav>
        </Col>

        {/* Right Section: Profile */}
        <Col
          md={8}
          className={`${styles.rightSection} d-flex flex-column justify-content-center align-items-center p-5`}
          style={{ minHeight: "110vh" }}
        >
          <div className="text-center">
            <Image
              src="/HARSH.jpg"
              alt="Profile Picture"
              width={190}
              height={190}
              className={styles.profileImage}
            />
              
            
            <h1 className={styles.title} style={{ marginTop: "1.5rem" }}>
           Harsh Maheshwari
            </h1>
            <h3 className={styles.profession}>Full Stack Developer </h3>
          </div>I’m a passionate JavaScript learner with a curious mind and a knack for debugging. I enjoy solving real-world problems through code and continuously improving my skills by building and breaking things in the browser.
        </Col>
      </Row>
    </Container>
  );


}
