import './HomePage.css'
import { FaSearch } from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';
import CardContent from '../components/CardContent';
export default function HomePage() {
  const data = [{ title: "Sứ mạng", content: "Trường ĐH Lạc Hồng là cơ sở đào tạo, nghiên cứu khoa học ứng dụng, chuyển giao công nghệ và phục vụ cộng đồng đáp ứng nhu cầu xã hội. Trường cung cấp nguồn nhân lực, bồi dưỡng nhân tài có năng lực và phẩm chất phục vụ sự nghiệp công nghiệp hóa, hiện đại hóa đất nước trong thời kỳ hội nhập quốc tế." },
  { title: "Tầm nhìn", content: "Đến năm 2030, trở thành trường đại học định hướng ứng dụng hàng đầu tại Việt Nam." },
  { title: "Triết lý giáo dục", content: "Lãnh đạo - Nhân văn - Chính trực" }
  ]
  return <>
    <section className='top-bar'>
      <div className="container d-flex justify-content-end">
        <div className='me-3'>Thông tin cho:</div>
        <div className='me-3 cursor-pointer'>Sinh viên tương lai</div>
        <div className='me-3 cursor-pointer'>Sinh viên đang học</div>
        <div className='me-3 cursor-pointer'>Phụ huynh</div>
        <div className='me-3 cursor-pointer'>Cán bộ & Giảng viên</div>
        <div className='me-3 cursor-pointer'>Cựu sinh viên</div>
        <div className='me-3 cursor-pointer'>English</div>
        <div className='profile me-3 px-2 cursor-pointer'>Trang cá nhân</div>
        <div className='me-3 cursor-pointer'><FaSearch /></div>
      </div>
    </section>
    <section className='header'>
      <div className='container d-flex align-items-center py-4'>
        <img src="/assets/logo/Logo_yellow.png" alt="" height={40} />
        <div className='title cursor-pointer px-2'>Giới thiệu</div>
        <div className='title cursor-pointer px-2'>Chương trình đào tạo</div>
        <div className='title cursor-pointer px-2'>Tuyển sinh</div>
        <div className='title cursor-pointer px-2'>Nghiên cứu</div>
        <div className='title cursor-pointer px-2'>Liên hệ</div>
      </div>
    </section>
    <section className='img-carousel container'>
      <Carousel>
        <Carousel.Item>
          <img src="https://lhu.edu.vn/Data/Folders/1/images/Khaigiangnamhoc2024_LHU.jpg" height={528} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://lhu.edu.vn/Data/Folders/1/images/HoinghiCongtacdaotao.jpg" height={528} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://lhu.edu.vn/Data/Folders/1/images/XettuyenBosung_Chinhquy.jpg" height={528} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://lhu.edu.vn/Data/Folders/1/images/AUN_QA.jpg" height={528} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://lhu.edu.vn/Data/Folders/1/images/360Banner.jpg" height={528} alt="" />
        </Carousel.Item>
      </Carousel>
    </section>
    <section className='mt-3'>
      <div className='container d-flex '>
        <div className='w-50 me-4'>
          <CardContent title={data[0].title} content={data[0].content} />
        </div>
        <div className='w-50 ms-4'>
          <CardContent title={data[1].title} content={data[1].content} />
          <CardContent title={data[2].title} content={data[2].content} rootClass='mt-4' />
        </div>
      </div>
    </section>
    <section>
      footer
    </section>
  </>
}
