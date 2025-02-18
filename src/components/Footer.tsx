import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="bg-gray-300 text-neutral-700 pt-20 lg:pb-10">
      <div className="m-auto w-4/5 flex justify-between lg:items-start lg:flex-row flex-col items-center gap-8">
        <div className="lg:w-1/3">
          <div className="flex justify-start gap-4 items-center mb-8">
            <div className="flex items-center w-28 hover:cursor-pointer">
              <img
                src="./src/assets/img/logo.png"
                alt="Logo"
                className="w-full h-full"
              />
            </div>
            <h1 className="inline-block text-3xl text-wrap font-bold">
              Tour Guide - Best choice for tourism
            </h1>
          </div>
          <div>
            <div className="mb-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="w-4 mt-1 mr-2 inline float-left"
              />
              <p className="text-wrap">
                Khu phố 6, phường Linh Trung, thành phố Thủ Đức, Thành phố Hồ
                Chí Minh
              </p>
            </div>
            <div>
              <div className="mb-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-4 mt-1 mr-2 inline float-left"
                />
                <p className="whitespace-nowrap">0828787952</p>
              </div>
              <div className="mb-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-4 mt-1 mr-2 inline float-left"
                />
                <p className="whitespace-nowrap">20521875@gm.uit.edu.vn</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl mb-4 font-bold">Kênh thông tin</h1>
          <div className="flex justify-between items-center">
            <a
              className="flex items-center w-14 hover:cursor-pointer"
              href="https://www.facebook.com/UIT.Fanpage"
            >
              <img src="./src/assets/img/Facebook_logo.png" alt="Logo" />
            </a>
            <a
              className="flex items-center w-20 hover:cursor-pointer"
              href="https://www.youtube.com/@uitchannel"
            >
              <img src="./src/assets/img/Youtube_logo.png" alt="Logo" />
            </a>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6023.509970813596!2d106.80400828486249!3d10.870710424183192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2sUniversity%20of%20Information%20Technology%20-%20VNUHCM!5e0!3m2!1sen!2s!4v1718593350358!5m2!1sen!2s"
            width="360"
            height="270"
            className="mx-auto"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
