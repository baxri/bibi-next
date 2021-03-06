import React, { Component } from "react";
import { withRouter } from "next/router";
import Link from "next/link";

class Header extends Component {
  render() {
    const {
      router: { pathname },
      children,
    } = this.props;

    return (
      <header id="header">
        <div className="container  main-menu">
          <div className="header-wrapper row align-items-center d-flex justify-content-between justify-content-lg-start">
            <div id="logo d-flex ">
              <Link href="/">
                <a href="#">
                  <h1 className="pl-3">
                    <span className="logo-b">B</span>IBI
                  </h1>
                </a>
              </Link>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light d-flex">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    {/* <Link href="/"> */}
                    <a
                      className={
                        pathname === "/" ? "nav-link active" : "nav-link"
                      }
                      href="/"
                    >
                      My Status{" "}
                    </a>
                    {/* </Link> */}
                  </li>
                  <li className="nav-item">
                    {/* <Link href="/about"> */}
                    <a
                      className={
                        pathname === "/about" ? "nav-link active" : "nav-link"
                      }
                      href="/about"
                    >
                      about{" "}
                    </a>
                    {/* </Link> */}
                  </li>
                  <li className="nav-item">
                    {/* <Link href="/react-native" > */}
                    <a
                      className={
                        pathname === "/react-native"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      href="/react-native"
                    >
                      React Native
                    </a>
                    {/* </Link> */}
                  </li>
                  <li className="nav-item">
                    {/* <Link href="/latest-works"> */}
                    <a
                      className={
                        pathname === "/latest-works"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      href="/latest-works"
                    >
                      latest-works
                    </a>
                    {/* </Link> */}
                  </li>
                  <li className="nav-item">
                    {/* <Link href="/schedule-time"> */}
                    <a
                      className={
                        pathname === "/schedule-time"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      href="/schedule-time"
                    >
                      Schedule Time
                    </a>
                    {/* </Link> */}
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div
          className="hidden-menu collapse navbar-collapse container-fluid"
          id="navbarNav"
        >
          <ul className="hidden-menu-navbar navbar-nav d-flex justify-content-center">
            <li className="d-flex hidden-menu-navbar-item nav-item justify-content-center">
              <Link href="/">
                <a
                  className={pathname === "/" ? "nav-link active" : "nav-link"}
                  href="#"
                >
                  My Status{" "}
                </a>
              </Link>
            </li>
            <li className="d-flex hidden-menu-navbar-item nav-item justify-content-center">
              <Link href="/about">
                <a
                  className={
                    pathname === "/about" ? "nav-link active" : "nav-link"
                  }
                  href="#"
                >
                  about{" "}
                </a>
              </Link>
            </li>
            <li className="d-flex hidden-menu-navbar-item nav-item justify-content-center">
              <Link href="/react-native">
                <a
                  className={
                    pathname === "/react-native"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="#"
                >
                  React Native
                </a>
              </Link>
            </li>
            <li className="d-flex hidden-menu-navbar-item nav-item justify-content-center">
              <Link href="/latest-works">
                <a
                  className={
                    pathname === "/latest-works"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="#"
                >
                  latest works
                </a>
              </Link>
            </li>
            <li className="d-flex hidden-menu-navbar-item nav-item justify-content-center">
              <Link href="/schedule-time">
                <a
                  className={
                    pathname === "/schedule-time"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="#"
                >
                  Schedule Time
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <style jsx global>{`
          .logo-b {
            color: #e45447;
          }

          .navbar {
            background-color: white !important;
            margin-left: 70px;
          }

          .nav-link {
            margin-left: 20px;
            font-family: "Poppins", sans-serif !important;
            padding: 0px;
            color: #222222;
            font-weight: 500;
            font-size: 16px;
            text-transform: capitalize;
            outline: none;
          }

          .hidden-menu {
            background: white;
          }

          .hidden-menu-navbar-item {
            // border-bottom: 1px dotted lightgray;
          }

          @media only screen and (max-width: 991px) {
            #header {
              background: white;
            }
          }
        `}</style>
      </header>
    );
  }
}

export default withRouter(Header);
