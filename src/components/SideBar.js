import React from "react";
import { Link } from "react-router-dom";

import "./styles/SideBar.css";
import logo from "../assets/logo80px.png";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="icons">
        <a
          href="https://www.instagram.com/gorilla_dev.uy/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6295 6.09897C9.08232 6.09897 6.2212 8.96009 6.2212 12.5072C6.2212 16.0543 9.08232 18.9155 12.6295 18.9155C16.1766 18.9155 19.0377 16.0543 19.0377 12.5072C19.0377 8.96009 16.1766 6.09897 12.6295 6.09897ZM12.6295 16.6734C10.3372 16.6734 8.46325 14.805 8.46325 12.5072C8.46325 10.2094 10.3316 8.34102 12.6295 8.34102C14.9273 8.34102 16.7957 10.2094 16.7957 12.5072C16.7957 14.805 14.9217 16.6734 12.6295 16.6734ZM20.7945 5.83684C20.7945 6.66785 20.1253 7.33154 19.2998 7.33154C18.4688 7.33154 17.8051 6.66227 17.8051 5.83684C17.8051 5.0114 18.4744 4.34213 19.2998 4.34213C20.1253 4.34213 20.7945 5.0114 20.7945 5.83684ZM25.0388 7.35385C24.944 5.35162 24.4867 3.57805 23.0199 2.11681C21.5586 0.655576 19.7851 0.198242 17.7828 0.0978514C15.7192 -0.0192708 9.53408 -0.0192708 7.4705 0.0978514C5.47385 0.192665 3.70028 0.649999 2.23347 2.11124C0.766652 3.57247 0.314895 5.34604 0.214505 7.34827C0.0973827 9.41185 0.0973827 15.597 0.214505 17.6606C0.309318 19.6628 0.766652 21.4364 2.23347 22.8976C3.70028 24.3589 5.46827 24.8162 7.4705 24.9166C9.53408 25.0337 15.7192 25.0337 17.7828 24.9166C19.7851 24.8218 21.5586 24.3644 23.0199 22.8976C24.4811 21.4364 24.9384 19.6628 25.0388 17.6606C25.1559 15.597 25.1559 9.41743 25.0388 7.35385ZM22.3729 19.8748C21.9379 20.9679 21.0957 21.8101 19.997 22.2507C18.3517 22.9032 14.4476 22.7526 12.6295 22.7526C10.8113 22.7526 6.90162 22.8976 5.26191 22.2507C4.16877 21.8156 3.32661 20.9735 2.88601 19.8748C2.23347 18.2295 2.38405 14.3254 2.38405 12.5072C2.38405 10.689 2.23904 6.77939 2.88601 5.13968C3.32103 4.04654 4.16319 3.20438 5.26191 2.76377C6.9072 2.11124 10.8113 2.26182 12.6295 2.26182C14.4476 2.26182 18.3573 2.11681 19.997 2.76377C21.0901 3.1988 21.9323 4.04096 22.3729 5.13968C23.0254 6.78497 22.8749 10.689 22.8749 12.5072C22.8749 14.3254 23.0254 18.2351 22.3729 19.8748Z"
              fill="white"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/christian-andr%C3%A9s-lopez-menchaca-9a2a54bb/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.72265 25.0038H0.53961V8.31299H5.72265V25.0038ZM3.12834 6.0362C1.47097 6.0362 0.126663 4.66343 0.126663 3.00607C0.126663 2.20998 0.44291 1.44649 1.00583 0.883564C1.56876 0.320641 2.33224 0.00439453 3.12834 0.00439453C3.92443 0.00439453 4.68792 0.320641 5.25084 0.883564C5.81376 1.44649 6.13001 2.20998 6.13001 3.00607C6.13001 4.66343 4.78515 6.0362 3.12834 6.0362ZM25.1211 25.0038H19.9492V16.8788C19.9492 14.9425 19.9101 12.4592 17.2545 12.4592C14.5597 12.4592 14.1468 14.563 14.1468 16.7393V25.0038H8.9693V8.31299H13.9403V10.5898H14.0128C14.7048 9.27839 16.3951 7.89446 18.9168 7.89446C24.1624 7.89446 25.1267 11.3487 25.1267 15.8353V25.0038H25.1211Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
      <div className="logo">
        <Link to="/">
          <img className="sidebar__brand-logo" src={logo} alt="logo" />
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
