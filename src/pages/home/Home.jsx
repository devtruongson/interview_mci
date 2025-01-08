import './Home.scss';

export default function Home() {
    return (
        <div className="home_wrapper">
            <section className="banner">
                <img className="mb-none" src="/f5e45e953e991aae8ee26ef0ae503701.jpeg" alt="Banner" />
                <img className="pc-none" src="/3179f7861d0b501147e42ca364ba4575.jpeg" alt="Banner" />
            </section>
            <section className="container blog_section">
                <div className="blog_section-left">
                    <div className="blog_section-title">
                        <h2>Sự kiện của MCI</h2>
                        <div></div>
                    </div>
                    <div className="card_blog mt-4">
                        <div className="card_blog-item"></div>
                        <div className="card_blog-item mt-4"></div>
                        <div className="card_blog-item mt-4"></div>
                        <div className="side_slick">
                            <button className="slick_arrow">
                                <i className="bi bi-chevron-left"></i>
                            </button>
                            <button className="dot"></button>
                            <button className="dot"></button>
                            <button className="dot"></button>
                            <button className="dot active"></button>
                            <button className="dot"></button>
                            <button className="dot"></button>
                            <button className="slick_arrow">
                                <i className="bi bi-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="blog_section-right">
                    <div className="blog_section-right-search">
                        <i className="bi bi-search"></i>
                        <input type="text" placeholder="Tìm kiếm bài viết" />
                    </div>
                    <div className="blog_section-right-menu">
                        <ul>
                            <li>Chia sẻ kinh nghiệm</li>
                            <li className="divider"></li>
                            <li>Kiến thức chuyên môn</li>
                            <li className="divider"></li>
                            <li>MCI Careers</li>
                            <li className="divider"></li>
                            <li>Kinh nghiệm thực chiến</li>
                            <li className="divider"></li>
                            <li>Lịch khai giảng</li>
                        </ul>
                    </div>
                    <div className="card_blog mt-4">
                        <div className="card_blog-item mt-4">
                            <div className="card_blog-item-thumbnail"></div>
                            <div className="card_blog-item-intro">
                                <h3>Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào</h3>
                                <p>
                                    Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những
                                    logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                                    học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                                    không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
                                </p>
                                <a href="/blog/slug_blog">Xem thêm</a>
                            </div>
                        </div>
                        <div className="card_blog-item mt-4 mb-none">
                            <div className="card_blog-item-thumbnail"></div>
                            <div className="card_blog-item-intro">
                                <h3>Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào</h3>
                                <p>
                                    Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những
                                    logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                                    học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                                    không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
                                </p>
                                <a href="/blog/slug_blog">Xem thêm</a>
                            </div>
                        </div>
                        <div className="card_blog-item mt-4 mb-none">
                            <div className="card_blog-item-thumbnail"></div>
                            <div className="card_blog-item-intro">
                                <h3>Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào</h3>
                                <p>
                                    Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những
                                    logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                                    học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                                    không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
                                </p>
                                <a href="/blog/slug_blog">Xem thêm</a>
                            </div>
                        </div>
                        <div className="card_blog-item mt-4 mb-none">
                            <div className="card_blog-item-thumbnail"></div>
                            <div className="card_blog-item-intro">
                                <h3>Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào</h3>
                                <p>
                                    Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những
                                    logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                                    học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                                    không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
                                </p>
                                <a href="/blog/slug_blog">Xem thêm</a>
                            </div>
                        </div>
                        <div className="card_blog-item mt-4 mb-none">
                            <div className="card_blog-item-thumbnail"></div>
                            <div className="card_blog-item-intro">
                                <h3>Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào</h3>
                                <p>
                                    Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những
                                    logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                                    học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                                    không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
                                </p>
                                <a href="/blog/slug_blog">Xem thêm</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_lib_image">
                <div className="container">
                    <div className="section_lib_image-title">
                        <h2>Thư viện ảnh</h2>
                        <div></div>
                    </div>
                    <div className="mt-4">
                        <div className="section_lib_image-list mb-none">
                            <div className="section_lib_image-list--item-col-8"></div>
                            <div className="section_lib_image-list--item-col-4"></div>
                        </div>
                        <div className="section_lib_image-list mt-4">
                            <div className="section_lib_image-list--item-col-4"></div>
                            <div className="section_lib_image-list--item-col-8"></div>
                        </div>
                        <div className="section_lib_image-list--item-col-12 pc-none mt-4"></div>
                    </div>
                </div>
            </section>
            <section className="section_course">
                <div className="container">
                    <div className="section_course-title">
                        <h2>Chương trình đào tạo của MCI</h2>
                        <div></div>
                    </div>
                    <div className="section_course-list mt-4">
                        <div className="section_course-item">
                            <div className="section_course-item-thumbnail"></div>
                            <div className="section_course-item-intro">
                                <h3>Phân tích dữ liệu</h3>
                                <p>
                                    Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những
                                    logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                                    học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                                    không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
                                </p>
                                <a href="/blog/slug_blog">Xem thêm</a>
                            </div>
                        </div>
                        <div className="section_course-item">
                            <div className="section_course-item-thumbnail"></div>
                            <div className="section_course-item-intro">
                                <h3>Phân tích dữ liệu</h3>
                                <p>
                                    Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những
                                    logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                                    học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                                    không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
                                </p>
                                <a href="/blog/slug_blog">Xem thêm</a>
                            </div>
                        </div>
                        <div className="section_course-item">
                            <div className="section_course-item-thumbnail"></div>
                            <div className="section_course-item-intro">
                                <h3>Phân tích dữ liệu</h3>
                                <p>
                                    Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những
                                    logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                                    học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                                    không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
                                </p>
                                <a href="/blog/slug_blog">Xem thêm</a>
                            </div>
                        </div>
                        <div className="section_course-item">
                            <div className="section_course-item-thumbnail"></div>
                            <div className="section_course-item-intro">
                                <h3>Phân tích dữ liệu</h3>
                                <p>
                                    Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những
                                    logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                                    học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                                    không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
                                </p>
                                <a href="/blog/slug_blog">Xem thêm</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
