import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetail.scss';

export default function BlogDetail() {
    const prams = useParams();

    useEffect(() => {
        console.log(prams.slug);
    }, [prams]);

    return (
        <div className="blog_detail_wp">
            <div className="w-50">
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
            </div>
            <div className="breadcumb mb-none">
                <div className="container">
                    <ul>
                        <li>Trang chủ</li>
                        <i className="bi bi-chevron-right"></i>
                        <li>Blog</li>
                        <i className="bi bi-chevron-right"></i>
                        <li>Chia sẻ kinh nghiệm</li>
                        <i className="bi bi-chevron-right"></i>
                        <li>Bạn Nguyễn Quang Hưng - Học Data là 1 quá trình và mình đã vượt qua nó như nào</li>
                    </ul>
                </div>
            </div>
            <div className="content-body container">
                <div className="content-body-left">
                    <div className="blog_title">
                        <h1>Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào</h1>
                        <div></div>
                    </div>
                    <div className="content">
                        <p>
                            Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán
                            học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành
                            công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để
                            được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy
                            ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình.
                            Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các
                            trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ
                            thông tin như mong muốn mà chỉ...
                        </p>
                        <div className="table_of_content">
                            <div>
                                <i className="bi bi-list"></i>
                                <h3>Nội dung bài viết</h3>
                            </div>
                            <ol>
                                <li>Nội dung bài viết</li>
                                <li>Nội dung bài viết</li>
                                <li>Nội dung bài viết</li>
                                <li>Nội dung bài viết</li>
                                <li>Nội dung bài viết</li>
                            </ol>
                        </div>
                        <p>
                            Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán
                            học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành
                            công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để
                            được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy
                            ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình.
                            Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các
                            trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ
                            thông tin như mong muốn mà chỉ...
                        </p>
                        <p>
                            Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán
                            học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành
                            công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để
                            được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy
                            ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình.
                            Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các
                            trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ
                            thông tin như mong muốn mà chỉ...
                        </p>
                        <p>
                            Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán
                            học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành
                            công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để
                            được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy
                            ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình.
                            Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các
                            trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ
                            thông tin như mong muốn mà chỉ...
                        </p>
                        <div className="image_content"></div>
                        <p>
                            Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán
                            học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành
                            công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để
                            được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy
                            ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình.
                            Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các
                            trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ
                            thông tin như mong muốn mà chỉ...
                        </p>
                        <p>
                            Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán
                            học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành
                            công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để
                            được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy
                            ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình.
                            Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các
                            trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ
                            thông tin như mong muốn mà chỉ...
                        </p>
                    </div>
                </div>
                <div className="content-body-right">
                    <div className="ads mb-none"></div>
                    <div className="mb-none">
                        <div className="blog_title">
                            <h2>Các khóa học</h2>
                            <div></div>
                        </div>
                        <ul>
                            <li>Phân tích dữ liệu</li>
                            <li>Kỹ sư dữ liệu</li>
                            <li>Khoa học dữ liệu</li>
                            <li>Lập trình ứng dụng</li>
                        </ul>
                    </div>
                    <div className="form">
                        <h3>ĐĂNG KÝ TƯ VẤN KHÓA HỌC</h3>
                        <div>
                            <div className="form_item">
                                <label htmlFor="fullName">Họ Và Tên</label>
                                <input type="text" id="fullName" />
                            </div>
                            <div className="form_item">
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" />
                            </div>
                            <div className="form_item">
                                <label htmlFor="phoneNumber">Số Điện Thoại</label>
                                <input type="text" id="phoneNumber" />
                            </div>
                            <div className="form_item">
                                <label>Khóa Học Bạn Muốn Tư Vấn</label>
                                <select name="" id="">
                                    <option value="">Chọn khóa học</option>
                                    <option value="">Phân tích dữ liệu</option>
                                    <option value="">Kỹ sư dữ liệu</option>
                                    <option value="">Khoa học dữ liệu</option>
                                    <option value="">Lập trình ứng dụng</option>
                                </select>
                            </div>
                            <div>
                                <button>ĐĂNG KÝ TƯ VẤN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="related_post">
                <div className="container">
                    <div className="related_post_title">
                        <h2>Các bài đăng liên quan</h2>
                        <div></div>
                    </div>
                    <div className="related_post_list">
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
                                <a href="#">Xem thêm</a>
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
                                <a href="#">Xem thêm</a>
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
                                <a href="#">Xem thêm</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
