import React, { Component } from "react";

import axios from "axios";
import parse from "html-react-parser";

import "./App.css";
import "./hamburgers.css";

class App extends Component {
    state = {
        navbarItems: [],
        duration: "",
        detail: "",
        condition: "",
        toggle: false
    };

    async componentDidMount() {
        axios
            .get("https://panjs.com/ywc.json")
            .then(res => {
                const { navbarItems, duration, detail, condition } = res.data;
                this.setState({ navbarItems, duration, detail, condition });
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleClick = e => {
        this.setState({ toggle: !this.state.toggle });
    };

    render() {
        const {
            detail: _detail,
            condition: _condition,
            navbarItems
        } = this.state;

        const detail = parse(_detail);
        const condition = parse(_condition);
        const items = navbarItems.map((item, index) => {
            return (
                <div key={index} className="header-element">
                    <a href={item.href}>{item.label}</a>
                </div>
            );
        });

        return (
            <div className="App">
                <div className="header-div">
                    <nav className="header">{items}</nav>

                    <nav className="header-mobile">
                        <a href="#" className="navbar-brand">
                            <img src={require("./assets/footer.png")} />
                        </a>
                        <button
                            className={
                                this.state.toggle
                                    ? "hamburger hamburger--slider is-active"
                                    : "hamburger hamburger--slider "
                            }
                            type="button"
                            onClick={this.handleClick}
                        >
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </nav>
                    {this.state.toggle ? (
                        <div className="header-mobile-element">{items}</div>
                    ) : (
                        ""
                    )}
                </div>
                <div className="header-banner row no-gutters">
                    <div className="col-4 cover-left"></div>

                    <div className="col-4 cover-center ">
                        <div className="row h-100 justify-content-center align-items-center">
                            <img
                                src={require("./assets/banner.png")}
                                className="banner"
                            ></img>
                        </div>
                    </div>
                    <div className="col-4 cover-right "></div>
                </div>
                <div className="container-fluid">
                    <div className="section-register ">
                        <div className="row">
                            <div className="col-12">ตั้งแต่วันที่</div>
                            <div className="col-12 duration">
                                {this.state.duration}
                            </div>
                            <div className="col-12">
                                <button className="btn register">
                                    คงเหลือสิทธิลงทะเบียน เฟส 2
                                    <br />
                                    สำหรับวันที่ 27 ตุลาคม 2562
                                    <br />
                                    รอบเวลา 6.00 น. จำนวน 91,987 คน
                                    <br />
                                    รอบเวลา 18.00 น. จำนวน 91,987 คน
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-detail">
                    <div className="container">
                        <div className="head-title d-none d-sm-block">
                            มาตรฐานส่งเสริมการบริโภค
                            <br />
                            ในประเทศ
                            <span className="text-nowrap">"ชิมชอปใช้"</span>
                        </div>

                        <div className="head-title d-sm-none">
                            มาตรฐานส่งเสริมการบริโภคในประเทศ{" "}
                            <span className="text-nowrap">"ชิมชอปใช้"</span>
                        </div>

                        <div className="detail mt-4">{detail}</div>
                        <div className="condition mt-4">
                            เงื่อนไขการเข้าร่วมมาตรการ
                        </div>
                        <div className="detail">{condition}</div>
                    </div>
                </div>

                <div className="box-tat">
                    <div className="container">
                        <img
                            src={require("./assets/Banner_KTB_SQ.png")}
                            className="col-sm-12 col-md-4"
                        />
                        <img
                            src={require("./assets/Banner_CGD_Sq.png")}
                            className="col-sm-12 col-md-4"
                        />
                        <img
                            src={require("./assets/Banner_TAT_Hotline_Sq.png")}
                            className="col-sm-12 col-md-4"
                        />
                    </div>
                </div>
                <div className="box-ktc">
                    <div className="container">
                        <div className="row d-none d-sm-block">
                            <div className="d-flex justify-content-around">
                                <a href="https://www.mof.go.th/th/home">
                                    <img src={require("./assets/MOF.png")} />
                                </a>

                                <a href="http://www.fpo.go.th/main">
                                    <img src={require("./assets/FPO.png")} />
                                </a>

                                <a href="https://www.cgd.go.th/cs/internet/internet/หน้าหลัก2.html?page_locale=th_TH">
                                    <img src={require("./assets/CGD.png")} />
                                </a>

                                <a href="https://www.newcb.ktb.co.th/">
                                    <img
                                        src={require("./assets/Krungthai.png")}
                                    />
                                </a>

                                <a href="https://www.mots.go.th">
                                    <img src={require("./assets/MOTS.png")} />
                                </a>

                                <a href="https://landing.tourismthailand.org">
                                    <img src={require("./assets/TAT.png")} />
                                </a>
                            </div>
                        </div>
                        <div className="row d-sm-none">
                            <div className="col-4 text-right">
                                <a href="https://www.mof.go.th/th/home">
                                    <img src={require("./assets/MOF.png")} />
                                </a>
                            </div>
                            <div className="col-4 text-center">
                                <a href="http://www.fpo.go.th/main">
                                    <img src={require("./assets/FPO.png")} />
                                </a>
                            </div>
                            <div className="col-4 text-left">
                                {" "}
                                <a href="https://www.cgd.go.th/cs/internet/internet/หน้าหลัก2.html?page_locale=th_TH">
                                    <img src={require("./assets/CGD.png")} />
                                </a>
                            </div>
                            <div className="col-4 text-right">
                                <a href="https://www.newcb.ktb.co.th/">
                                    <img
                                        src={require("./assets/Krungthai.png")}
                                    />
                                </a>
                            </div>
                            <div className="col-4 text-center">
                                <a href="https://www.mots.go.th">
                                    <img src={require("./assets/MOTS.png")} />
                                </a>
                            </div>
                            <div className="col-4 text-left">
                                <a href="https://landing.tourismthailand.org">
                                    <img src={require("./assets/TAT.png")} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-12">
                                <img
                                    src={require("./assets/footer.png")}
                                    alt=""
                                    className="footer-logo"
                                />
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-12">
                                <div className="head">
                                    ข้อมูลลงทะเบียนประชาชน
                                </div>
                                <div>
                                    <div class="detail">
                                        การรับสิทธิ การใช้งานแอปพลิเคชั่น{" "}
                                        <span class="nowrap">“เป๋าตัง”</span>{" "}
                                        และ{" "}
                                        <span class="nowrap">“ถุงเงิน”</span>
                                    </div>
                                    <div class="detail">
                                        ติดต่อ ชิมช้อปใช้ Call Center by
                                        Krungthai โทร.
                                        <a class="ml-1" href="tel:021111144">
                                            <span class="nowrap">
                                                0 2111 1144
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-12">
                                <div className="head">
                                    ข้อมูลลงทะเบียนผู้ประกอบการ
                                </div>
                                <div class="detail">
                                    เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ
                                </div>
                                <div class="detail">
                                    ติดต่อ โทร.
                                    <a class="ml-1" href="tel:022706400">
                                        <span class="nowrap">
                                            0 2270 6400 กด 7
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-12">
                                <div className="head">
                                    ข้อมูลเที่ยวชิมช้อปใช้
                                </div>
                                <div>ติดต่อ ททท. โทร1672</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-2">
                    <div className="container">
                        <div className="row">
                            <div className="copyright col-sm-12 col-md-3 ">
                                Copyright © 2003-2019
                            </div>

                            <div className="row col-sm-12 col-md-9 ">
                                <div className="footer-element col-sm-12 col-md-4">
                                    ลงทะเบียนเข้าร่วมมาตรการ
                                </div>
                                <div className="footer-element col-sm-12 col-md-4">
                                    ขั้นตอนการเข้าร่วมทั้งหมด
                                </div>
                                <div className="footer-element col-sm-12 col-md-4">
                                    รายชื่อร้านค้าที่เข้าร่วมรายการ
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
