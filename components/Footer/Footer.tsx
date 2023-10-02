import Link from "next/link";
import { useTranslations } from "next-intl";

import FacebookLogo from "../../public/icons/FacebookLogo";
import InstagramLogo from "../../public/icons/InstagramLogo";
import Button from "../Buttons/Button";
import Input from "../Input/Input";
import styles from "./Footer.module.css";

export default function Footer() {
  const t = useTranslations("Navigation");

  return (
    <>
       <div className={`${styles.footerContainer}`}>
        <div className={`app-max-width app-x-padding ${styles.footerContents}`}>
          <div>
            <h3 className={styles.footerHead}>Sri Durga Textiles
            {/* {t("company")} */}
            </h3>

            <div className={styles.column}>
              {/* <a href="example">{t("about_us")}</a> */}
              <div>Contact:</div>
              <div>9844175739</div>
              {/* <a href="example">{t("contact_us")}</a>
              <a href="example">{t("store_location")}</a>
              <a href="example">{t("careers")}</a> */}
            </div>
          </div>
          
                  
        </div>
      </div>
      {/*
      <div className="flex flex-col items-center pb-16">
        <h4 className="text-3xl mb-4">{t("newsletter")}</h4>
        <span className="px-6 text-center">{t("newsletter_desc")}</span>
        <div className="mt-5 px-6 flex w-full sm:w-auto flex-col sm:flex-row">
          <Input
            label="Newsletter Input Box"
            name="email"
            type="email"
            extraClass=" w-full sm:w-auto"
          />{" "}
          <Button
            size="lg"
            value={t("send")}
            extraClass="ml-0 mt-4 sm:mt-0 tracking-widest sm:tracking-normal sm:mt-0 sm:ml-4 w-auto w-full sm:w-auto"
          />
        </div>
      </div> */}
      <div className={styles.bottomFooter}>
        <div className="app-max-width app-x-padding w-full flex justify-between">
              <span className="">{new Date().getFullYear()} Durga Textiles.
               {/* {t("all_rights_reserved")} */}
              </span>
          <span className="flex items-center">
            <span className="hidden sm:block">
              follow us on :
              {/* {t("follow_us_on_social_media")}: */}
            </span>{" "}
            {/* <a
              href="www.facebook.com"
              aria-label="Facebook Page for Haru Fashion"
            >
              <FacebookLogo />
            </a> */}
            <a
              href="www.ig.com"
              aria-label="Instagram Account for Haru Fashion"
            >
              <InstagramLogo />
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
