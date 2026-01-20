import React from "react";
import "../Styles/Header.css";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Header() {
  return (
    <div
      className="d-flex text-dark py-lg-2 py-0 justify-content-between"
      style={{ backgroundColor: "#ffffff", borderBottom: "2px solid grey" }}
    >
      <div className="d-flex ms-2 ms-lg-5 gap-1 gap-md-3 gap-lg-4">
        <a
          href="tel:+918850285886"
          className="text-dark text-decoration-none phone-hover"
        >
          <span>
            <FaPhone className="mx-2 mx-lg-1 ms-3" />
            <span className="d-none d-lg-inline">+91 8850285886</span>
          </span>
        </a>

        <a
          href="https://maps.app.goo.gl/NnhiQP1diAiy6VBX7?g_st=ic"
          className="text-dark text-decoration-none location-hover"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <FaMapMarkerAlt className="mx-2 mx-lg-1" />
            <span className="d-none d-lg-inline">Andheri, Mumbai | India</span>
          </span>
        </a>

        <a
          href="mailto:jafar@libamigrationservices.com"
          className="text-dark text-decoration-none email-hover"
        >
          <span>
            <FaEnvelope className="mx-2 mx-lg-1" />
            <span className="d-none d-lg-inline" target="_blank">
              jafar@libamigrationservices.com
            </span>
          </span>
        </a>
      </div>
      <div className="d-flex justify-content-between gap-2 me-3">
        <a
          href="https://www.facebook.com/libamigration?mibextid=wwXIfr&mibextid=wwXIfr"
          target="_blank"
          rel="noreferrer"
          className="text-dark d-flex gap-1 gap-md-2 gap-lg-3 me-2 me-lg-3 mt-1"
        >
          <FaFacebookF className="" />
        </a>
        <a
          href="https://www.instagram.com/liba_migration?igsh=eDRkdXR3NWozZTdr"
          target="_blank"
          rel="noreferrer"
          className="text-dark d-flex gap-1 gap-md-2 gap-lg-3 me-2 me-lg-3 mt-1"
        >
          <FaInstagram className="" />
        </a>
        <button className="text-dark d-flex gap-1 gap-md-2 gap-lg-3 me-2 me-lg-3 mt-1 border-0 bg-transparent">
          <FaTwitter className="" />
        </button>
        <button className="text-dark d-flex gap-1 gap-md-2 gap-lg-3 me-2 me-lg-3 mt-1 border-0 bg-transparent">
          <FaYoutube className="" />
        </button>
      </div>
    </div>
  );
}