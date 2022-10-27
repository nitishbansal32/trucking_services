import styles from "./Footer.module.css";

import FooterLogo from "../../Images/FooterLogo.svg";
import Copyright from "../../Images/Copyright.svg";

const Footer = (props) => {
    return (
        <div id="Contact" className={styles.container}>
            <div className={styles.content}>
                <img src={FooterLogo} alt="" className={styles.footer_logo} />

                <ul className={styles.list1}>
                    <li>
                        {" "}
                        <a href="#About">About Us</a>{" "}
                    </li>
                    <li>
                        {" "}
                        <a href="#Services"> Avail Services</a>
                    </li>
                </ul>
                <ul className={styles.list2}>
                    <li>
                        <img src={props.contactIcon} alt="" />
                        <span>{props.contactNo}</span>
                    </li>
                    <li>
                        <a
                            href="mailto:info@freightstarts.com
"
                        >
                            <img src={props.emailIcon} alt="" />
                            <span>{props.email}</span>
                        </a>{" "}
                    </li>
                </ul>
            </div>
            <img className={styles.copyright} src={Copyright} alt="" />
        </div>
    );
};

export default Footer;
