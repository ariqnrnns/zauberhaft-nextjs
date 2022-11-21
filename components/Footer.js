import React from "react";
import Link from "next/link";
import footerData from "../data/FooterData.json";
import socialData from "../data/SocialData.js";
import Image from 'next/image';
import ZauberhaftLogo from '../public/logo-40x40.png'
export default function Footer() {
  return (
    <footer id="footer" className="p-y-24 flex flex-column">
      <div className="container container-xl">
        <div className="footer-info border-none">
          <ul className="footer-links">
            <li className="flex">
              <Link href={"https://github.com"} passHref className="h6 font-semibold flex align-center items-center"
                  aria-label="Zauberhaft by Ravenbright CSS">

<Image
                className="w-10 h-10 m-r-4"
                src={ZauberhaftLogo}
                loading="lazy"
                width="100"
                height="100"
                alt="Zauberhaft Logo"
              />
                  <div className="flex items-start flex-column ">
							<h1 className="h5 font-bold line-h-xl">Zauberhaft</h1>
								<p className="small align-left">By Ravenbright CSS</p>
							</div>

              </Link>
            </li>
          </ul>
          <ul className="footer-links xs-flex-wrap md-flex-no-wrap">
            {footerData.link.map((footerData) => (
              <li className="xs-m-b-8 sm-m-b-0 m-l-12" key={footerData.name}>
                <Link  href={footerData.url} className="subtitle link-footer">{footerData.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container container-xl m-b-6">
        <div className="footer-info">
          <ul className="footer-links">
            {socialData.map((data, index) => (
              <li key={index}>
                <Link href={data.socialUrl}
                    className="flex m-r-9"
                    aria-label={data.socialLabel}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {data.socialLogo}

                </Link>
              </li>
            ))}
          </ul>
          <small>{footerData.copyright}</small>
        </div>
      </div>
      <div className="container container-xl">
        <div className="flex flex-column  ">
          <ul className="flex m-b-6 flex-wrap  lg-w-50">
            {footerData.attributions.map((data, index, index1) => (
              <li className="m-r-2 caption" key={index}>
                {data.text}
                <Link href={data.url} target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label={data.brandName}
                    className="caption m-l-2 underline"
                    key={index1}
                  >
                    {data.brandName}

                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </footer>
  );
}
