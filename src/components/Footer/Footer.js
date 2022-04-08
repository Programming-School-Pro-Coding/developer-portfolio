import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import {
    BRAND_NAME,
    SITE_NAME,
    REPO,
    CODE_OF_CONDUCT,
    LEGAL_URL
} from "../../constants/Full Data";
import "./Footer.css";

export function HostedByVercel() {
  return (
    <a
      href="https://programming-school-official-site.vercel.app/"
      className="footer-link footer-logo"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="secondary-text">Created by </div>
      {BRAND_NAME}
    </a>
  );
}

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <footer style={{ backgroundColor: theme.secondary }} className="footer">
        <div className="footer-legal">
          <div className="footer-hostedby">
            <HostedByVercel />
            <div className="footer-separator" />
          </div>
          <div style={{ color: theme.tertiary }} className="footer-copyright">
            Copyright © {`${new Date().getFullYear()} `} {`${SITE_NAME}.`} All
            rights reserved.
          </div>
          <div className="footer-center-group">
            <p className="footer-paragraph">
              <a
                href={REPO}
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </p>
            <div className="footer-separator" />
            <p className="footer-paragraph">
              <a
                href={CODE_OF_CONDUCT}
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code of Conduct
              </a>
            </p>
            {LEGAL_URL && (
              <>
                <div className="footer-separator" />
                <p className="footer-paragraph">
                  <a
                    href={LEGAL_URL}
                    className="footer-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Legal
                  </a>
                </p>
              </>
            )}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
