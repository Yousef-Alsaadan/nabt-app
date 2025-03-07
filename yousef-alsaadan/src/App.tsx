import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Hero from "./assets/Hero.png";
import Body from "./assets/body.jpg";
import FooterImg from "./assets/footer.png";
import "@emran-alhaddad/saudi-riyal-font/index.css";

function App() {
  return (
    <div className="ibm-font">
      <NavBar />
      {/*hero section */}
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${Hero})`,
          }}
        >
          <div className="hero-content md:items-center items-start justify-start text-neutral-content text-start w-full h-full container mx-auto px-4 md:mt-0 mt-40">
            <div className="max-w-[590px] text-[#212121]">
              <h1 className="md:mb-7 mb-9 text-9xl font-bold">ساكورا</h1>
              <p className="md:mb-7 mb-9 text-2xl font-normal">
                وجهتك الأولى للإبداع والتواصل مع مجتمع المصورين المحترفين
                والهواة على حدٍ سواء. نحن هنا لنقدم لك كل ما تحتاجه لتنمية
                مهاراتك، تحسين أعمالك، وتسويق إبداعاتك
              </p>
              <button className="bg-[#212121] text-[#FAFAFA] px-16 py-3 rounded-full font-medium text-base hover:bg-[#FAFAFA] hover:text-[#212121] cursor-pointer">
                اشترك معنا
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*us sectoin */}
      <div className="bg-[#F2F2F2] min-h-screen text-[#212121] hero">
        <div className="container mx-auto px-4">
          <div className="hero-content md:items-start items-center justify-start flex-col text-start w-full h-full container mx-auto px-4">
            <div className="font-normal md:text-8xl text-6xl">
              <h1 className="md:mb-8 mb-16">
                من<span className="font-bold"> نحن</span>؟
              </h1>
            </div>
            <div className="font-normal md:text-2xl text-xl max-w-5xl">
              <p>
                بعد أشهر من العمل الجاد والتخطيط، أُطلقت{" "}
                <span className="font-bold">ساكورا</span> في البداية كموقع بسيط
                يتيح للمصورين عرض أعمالهم ومشاركة تجاربهم. سرعان ما لاقت المنصة
                إقبالاً واسعاً من المصورين الذين وجدوا فيها المكان المثالي
                للتواصل والنمو.
              </p>
              <p>
                مع مرور الوقت، تطورت <span className="font-bold">ساكورا</span>{" "}
                لتشمل خدمات متنوعة، مثل أدوات التحرير المتقدمة، الدروس
                التعليمية، والمسابقات الدورية. أصبحت المنصة وجهة رئيسية للمصورين
                الذين يبحثون عن بيئة محفزة تدعم طموحاتهم الفنية.
              </p>
              <p>
                اليوم، تفتخر <span className="font-bold">ساكورا</span> بأنها
                موطن لآلاف المصورين من مختلف أنحاء العالم، وتواصل السعي لتقديم
                الأفضل لمجتمعها من خلال الابتكار والتطور المستمر. ما بدأ كحلم
                صغير في ذهن مجموعة من الأصدقاء، تحول إلى منصة رائدة تجمع بين
                الشغف، الإبداع، والتعاون.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*body section */}
      <div className="">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${Body})`,
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-overlay"></div>
          <div className="hero-content flex-col items-start md:justify-center justify-start text-neutral-content text-start w-full h-full container mx-auto px-4 md:mt-0 mt-40">
            <div className="text-[#FAFAFA]">
              <h1 className="md:mb-9 mb-8 text-8xl font-normal">
                ما الذي <span className="font-bold">نقدمه</span>؟
              </h1>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-12 w-full md:mt-9 mt-0 md:mb-0 mb-8 text-[#FAFAFA]">
              <div className="flex flex-col md:gap-8 gap-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.3063 7.1107C16.4082 7.31803 16.4755 7.54007 16.5056 7.76833L17.0625 16.0482L17.3389 20.2099C17.3418 20.6379 17.4089 21.0631 17.5382 21.4719C17.872 22.2649 18.6752 22.7689 19.549 22.7338L32.8636 21.8629C33.4402 21.8534 33.997 22.069 34.4115 22.4623C34.7569 22.7901 34.9799 23.2189 35.0501 23.6801L35.0737 23.9602C34.5227 31.5897 28.9193 37.9532 21.3056 39.5959C13.6919 41.2386 5.88445 37.7685 2.12211 31.0697C1.03746 29.1235 0.359975 26.9843 0.129436 24.7778C0.0331288 24.1246 -0.00927773 23.4648 0.00262986 22.8049C-0.0092606 14.6252 5.81567 7.55356 13.9695 5.84877C14.9508 5.69596 15.9129 6.21548 16.3063 7.1107Z"
                    fill="#AD9A4D"
                  />
                  <path
                    opacity="0.4"
                    d="M21.7399 0.00163839C30.8597 0.233655 38.5246 6.79164 40 15.6247L39.9859 15.6899L39.9457 15.7847L39.9513 16.0449C39.9304 16.3896 39.7973 16.7212 39.5679 16.9891C39.329 17.2682 39.0026 17.4582 38.6432 17.532L38.424 17.5621L23.0623 18.5574C22.5513 18.6078 22.0425 18.443 21.6625 18.1041C21.3459 17.8216 21.1434 17.4403 21.0862 17.0295L20.0551 1.69014C20.0372 1.63827 20.0372 1.58204 20.0551 1.53018C20.0692 1.10735 20.2554 0.707686 20.5719 0.420464C20.8885 0.133241 21.3091 -0.0176009 21.7399 0.00163839Z"
                    fill="#AD9A4D"
                  />
                </svg>
                <h1 className="font-bold text-2xl">أدوات تحرير متقدمة</h1>
                <p className="font-normal text-base text-[#fafafab3] max-w-[311px]">
                  مجموعة من الأدوات الرقمية لتحرير الصور وتحسين جودتها.
                </p>
              </div>
              <div className="flex flex-col md:gap-8 gap-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.6263 4C26.5317 4.48601 26.4846 4.98003 26.4856 5.47512C26.4856 9.91711 30.0918 13.518 34.5403 13.518C35.0301 13.5156 35.5187 13.4686 36 13.3776V29.3229C36 36.0312 32.043 40 25.3249 40H10.6927C3.95701 40 0 36.0312 0 29.3229V14.7122C0 8.0039 3.95701 4 10.6927 4H26.6263ZM26.868 15.9885L26.6333 16.0032C26.2422 16.0594 25.8907 16.2716 25.659 16.5912L20.8403 22.7902L15.3532 18.4702C15.0399 18.2262 14.6414 18.1184 14.2476 18.1713C13.8538 18.2242 13.498 18.4332 13.2604 18.7512L7.35125 26.3727C7.14354 26.6316 7.03172 26.9541 7.03469 27.2859L7.03988 27.5066C7.09716 28.0866 7.49497 28.5877 8.06475 28.7676C8.70576 28.97 9.40275 28.7146 9.76062 28.1463L14.7025 21.7541L20.1895 26.0566C20.5016 26.3082 20.9028 26.4223 21.3008 26.3726C21.6988 26.3229 22.0595 26.1137 22.3 25.7932L28.0156 18.4176V18.3824C28.5049 17.7249 28.3801 16.7978 27.7342 16.2927C27.4216 16.0514 27.0244 15.9469 26.6333 16.0032L26.868 15.9885Z"
                    fill="#AD9A4D"
                  />
                  <path
                    opacity="0.4"
                    d="M35 10C37.7614 10 40 7.76142 40 5C40 2.23858 37.7614 0 35 0C32.2386 0 30 2.23858 30 5C30 7.76142 32.2386 10 35 10Z"
                    fill="#AD9A4D"
                  />
                </svg>
                <h1 className="font-bold text-2xl">دروس ومقالات تعليمية</h1>
                <p className="font-normal text-base text-[#fafafab3] max-w-[311px]">
                  موارد تعليمية تغطي كل جوانب التصوير الفوتوغرافي، من الأساسيات
                  إلى التقنيات المتقدمة.
                </p>
              </div>
              <div className="flex flex-col md:gap-8 gap-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M28.1493 0H34.9212C37.7258 0 39.9983 2.2917 39.9983 5.11993V11.949C39.9983 14.7773 37.7258 17.069 34.9212 17.069H28.1493C25.3448 17.069 23.0723 14.7773 23.0723 11.949V5.11993C23.0723 2.2917 25.3448 0 28.1493 0Z"
                    fill="#AD9A4D"
                  />
                  <path
                    d="M11.849 22.931C14.6535 22.931 16.926 25.2227 16.926 28.051V34.8801C16.926 37.7064 14.6535 40 11.849 40H5.07705C2.27251 40 0 37.7064 0 34.8801V28.051C0 25.2227 2.27251 22.931 5.07705 22.931H11.849ZM34.923 22.931C37.7275 22.931 40 25.2227 40 28.051V34.8801C40 37.7064 37.7275 40 34.923 40H28.151C25.3465 40 23.074 37.7064 23.074 34.8801V28.051C23.074 25.2227 25.3465 22.931 28.151 22.931H34.923ZM11.849 0C14.6535 0 16.926 2.2917 16.926 5.11993V11.949C16.926 14.7773 14.6535 17.069 11.849 17.069H5.07705C2.27251 17.069 0 14.7773 0 11.949V5.11993C0 2.2917 2.27251 0 5.07705 0H11.849Z"
                    fill="#AD9A4D"
                  />
                </svg>
                <h1 className="font-bold text-2xl">شبكة تواصل اجتماعي</h1>
                <p className="font-normal text-base text-[#fafafab3] max-w-[311px]">
                  تواصل مع مصورين آخرين، تبادل الأفكار والخبرات، وابنِ علاقات
                  مهنية جديدة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*price section */}
      <div className="bg-[#FAFAFA] min-h-screen text-[#212121] hero">
        <div className="">
          <div className="text-center mt-12">
            <h1 className="font-bold text-6xl mb-6">الأسعار وخطط الاشتراك</h1>
            <p className="font-normal text-xl text-[#212121aa]">
              باقات مختلفة تساعدك في الوصول لهدفك
            </p>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 items-end place-items-center gap-6 my-12">
            <div className="flex flex-col justify-between items-center bg-[#F4F4F5] rounded-xl w-[315px] h-[429px] px-8 py-4">
              <p className="uppercase font-semibold text-sm">Premium</p>
              <h1 className="font-bold text-7xl">
                <span className="icon-saudi_riyal text-2xl font-medium"></span>
                299
              </h1>
              <div className="text-center font-normal text-base">
                <p>محتوى كامل متاح</p>
                <p>مكتبة لايت روم متكاملة</p>
                <p>استشارة لمدة ساعة أسبوعيًا</p>
              </div>
              <button className="bg-[#212121] text-[#FAFAFA] w-full py-3 rounded-lg font-medium text-2xl cursor-pointer">
                اشترك
              </button>
            </div>

            <div className="flex flex-col justify-between items-center bg-[#212121] text-[#FAFAFA] rounded-xl w-[315px] h-[483px] px-8 py-4">
              <p className="uppercase font-semibold text-sm">Standard</p>
              <h1 className="font-bold text-7xl">
                <span className="icon-saudi_riyal text-2xl font-medium"></span>
                199
              </h1>
              <div className="text-center font-normal text-base">
                <p>محتوى كامل متاح</p>
                <p>3 مكتبات لايت روم</p>
                <p>استشارة لمدة ساعة أسبوعيًا</p>
              </div>
              <button className="bg-[#AD9A4D] text-[#FAFAFA] w-full py-3 rounded-lg font-medium text-2xl cursor-pointer">
                اشترك
              </button>
            </div>

            <div className="flex flex-col justify-between items-center bg-[#F4F4F5] rounded-xl w-[315px] h-[429px] px-8 py-4">
              <p className="uppercase font-semibold text-sm">Basic</p>
              <h1 className="font-bold text-7xl">
                <span className="icon-saudi_riyal text-2xl font-medium"></span>
                99
              </h1>
              <div className="text-center font-normal text-base">
                <p>محتوى رئيسي</p>
                <p>استشارة لمدة ساعة مرة في الشهر</p>
              </div>
              <button className="bg-[#212121] text-[#FAFAFA] w-full py-3 rounded-lg font-medium text-2xl cursor-pointer">
                اشترك
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*footer section */}
      <div className="bg-[#212121] relative grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-12 text-[#FAFAFA] min-h-screen ibm-font overflow-hidden">
        <div className="flex items-center md:static absolute -top-40 -right-20">
          <img src={FooterImg} className="h-[681px]" />
        </div>
        <div className="md:col-span-2">
          <div className="flex-col flex h-full justify-center md:items-end items-start md:pt-0 pt-96">
            <h1 className="font-normal md:text-8xl text-5xl mb-8 w-full md:text-start text-center">
              لماذا تختار <span className="font-bold">ساكورا</span>؟
            </h1>
            <div className="md:w-[350px] w-auto container mx-auto flex justify-end">
              <ul className="md:p-0 p-4">
                <li className="border-r-[3px] font-normal text-3xl border-[#AD9A4D] pr-5 mt-9">
                  فرص لا تُفوَّت
                </li>
                <li className="border-r-[3px] font-normal text-3xl border-[#AD9A4D] pr-5 mt-9">
                  أدوات متقدمة
                </li>
                <li className="border-r-[3px] font-normal text-3xl border-[#AD9A4D] pr-5 mt-9">
                  مجتمع داعم
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
