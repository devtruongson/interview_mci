import './Header.scss';

export default function Header() {
    return (
        <header>
            <div className="header-left">
                <a className="logo" href="/">
                    <img src="/new-logo.png" alt="Logo" />
                </a>
                <div className="divider"></div>
                <ul>
                    <li>
                        <a href="#">
                            KHÓA HỌC <i className="bi bi-caret-down-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            LỊCH ĐÀO TẠO <i className="bi bi-caret-down-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            DOANH NGHIỆP <i className="bi bi-caret-down-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">BLOG</a>
                    </li>
                    <li>
                        <a href="#">
                            VỀ CHÚNG TÔI <i className="bi bi-caret-down-fill"></i>
                        </a>
                    </li>
                </ul>
                <button className="pc-none">
                    <i className="bi bi-list"></i>
                </button>
            </div>
            <div className="header-right">
                <button>
                    <i className="bi bi-search"></i>
                </button>
                <span className="pc-none">
                    <i className="bi bi-box-arrow-in-right"></i>
                </span>
                <button>Đăng nhập</button>
            </div>
        </header>
    );
}
