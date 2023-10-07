import Image from "next/image";
import Link from "next/link";
import { Container } from "..";
import { map } from "lodash";

const linkList = [
  {
    title:"Ғалабалық оферта"
  },
  {
    title:"Хизметтен пайдаланыў қағыйдалары"
  },
  {
    title:"Төлемлер ҳәм жеткизип бериў"
  },
  {
    title:"Компания хаққында"
  },
  {
    title:"Буйыртпа бериў"
  }
]

const Footer = () => {
  return (
    <div className="footer">
    {/* top section */}
      <div className="footer__top">
        <div className="footer__bg">
          <Container>
            <div className="flex flex-col items-start gap-5 pt-3">
              <p className="text-sm italic">
                <b>Sharbazar</b> мобил приложениесин <b>Google Play</b> ден
                жүклеп алыўыңыз мүмкин.
              </p>

              <div className="flex flex-col gap-2">
                <Link href={'/'}>
                <div className="footer__bg-image-container">
                  <Image
                  src={"/google-play-store.svg"}
                  fill
                  className="footer__bg-image"
                  alt="shb24 goole play"
                />
                </div>
              </Link>

              <Link href={'/'}>
                <div className="footer__bg-image-container">
                  <Image
                  src={"/apple-play-store.svg"}
                  fill
                  className="footer__bg-image"
                  alt="shb24 app store"
                />
                </div>
              </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>


     {/* center section */}
      <Container>
        <div className="footer__center">
        <p>
          SharBazar – Қарақалпакстандағы биринши онлайн магазин. Азық аўқат өнимлерин, хожалық буйымларын ҳәм баска тутыныў буйымларына онлайн тәрзде буйыртпа бериң. Буйыртпаларды бизиӊ сайтымыз арқалы ямаса саўда бөлими телефнон номери +99891 305 10 00 арқалы аўзеки тәрзде әмелге асырың.
        </p>
        <p>
          SharBazar онлайн магазининен пайдаланғаныңыз ушын сизге миннетдаршылық билдиремиз.
        </p>
      </div>
      </Container>

         {/* bottom section */}
      <div className="footer__bottom-container">
        <Container>
          <div className="footer__bottom-white">
          {
            map(linkList, link => (
              <Link key={link.title} href={'/'}>{link.title}</Link>
            ))
          }
        </div>
        </Container>
      </div>

      <div className="bg-green-700">
        <Container>
         <div className="flex gap-1 lg:gap-0 text-sm text-white flex-col md:flex-row justify-between py-2">
           <p>2018 © <Link href={'/'}>SharBazar.uz</Link> Бәрше хуқуқлар қорғалған</p>
          <p>Тутыныўшыларды қоллап куўатлау хызмети номери: +99891 393 81 56</p>
         </div>
        </Container>
      </div>

    </div>
  );
};

export default Footer;
