"use client";
import React from "react";
import { Container } from "..";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { BiMenu } from "react-icons/bi";
import { IoMdCloseCircle } from 'react-icons/io'
import useVisibility from "@/hooks/useVisibility";

const categoryList = [
  "Суў ҳәм ишимликлер",
  "Майек ҳәм сүт өнимлери",
  "Гөш ҳәм колбаса өнимлери",
  "Чай ҳәм кофе",
  "Бакалея",
  "Нан ҳәм нан өнимлери",
  "Торт ҳәм мазалы затлар",
  "Консерваланған өнимлер",
  "Жуўыўшы затлар",
  "Гигиена",
  "Хожалық буйымлары",
  "Гигиена",
  "Хожалық буйымлары",
  "Балалар ушын",
  "Овощлар ҳәм мийуелер",
  "Музлатылған өнимлер",
];

const Header = () => {
  const searchBarVisiblity = useVisibility();
  return (
    <>
      <Container>
        <div className="header__top">
          <p>
            Телефон арқалы буйыртпа бериӯ:{" "}
            <Link
              href={"tel:+998913051000"}
              className="hover:decoration-1 hover:underline hover:text-blue-600"
            >
              +99891 305 10 00
            </Link>
          </p>
          <div className="flex items-right justify-end">
            <p>Қарақалпақша</p>
          </div>
        </div>
      </Container>
      <header className="header">
        <Container>
          {
            !searchBarVisiblity.visible ? (
              <div className={`header__container transition-all`}>
                <div className="flex items-center lg:flex-1">
                  <div className="header__logo">
                    <Image
                      width={35}
                      height={35}
                      alt="shb24 logo"
                      className="object-contain"
                      src={
                        "https://shb24.uz/uploads/logotype/1/original/1541852283.png"
                      }
                    />

                    <Link href={"/"} className="header__logo-text">
                      SharBazar
                    </Link>
                  </div>

                  <div className="header__select">
                    <Menu>
                      <Menu.Button className={"header__menu-title"}>
                        <div className="max-lg:hidden flex flex-row items-center">
                          <span>Бәрше товарлар</span>{" "}
                          <FaChevronDown className="text-lg text-slate-500 ml-1" />
                        </div>
                        <div className="lg:hidden">
                          <div className="px-3 py-2">
                            <BiMenu className="text-[30px]" />
                          </div>
                        </div>
                      </Menu.Button>
                      <Menu.Items className={"header__menu-list"}>
                        {categoryList.map((value, index) => (
                          <Menu.Item key={value}>
                            {({ active }) => (
                              <Link
                                className={`header__menu-item ${active && "bg-blue-500"
                                  }`}
                                href={`/category/${index + 1}`}
                              >
                                {value}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Menu>
                  </div>

                  <div className="header__search">
                    <input
                      type="text"
                      className="header__search-input"
                      placeholder="Товарларды излеў"
                    />
                    <BsSearch className="text-lg text-slate-500 hover:-translate-y-0.5 transition cursor-pointer" />
                  </div>
                </div>

                <div className="header__basket">
                  <button type="button" onClick={searchBarVisiblity.toggle}>
                    <FaSearch className="text-[22px] text-slate-700 hover:-translate-y-0.5 transition cursor-pointer mr-2 lg:hidden" />
                  </button>
                  <button type="button" className="header__basket-btn">
                    <SlBasket className="mr-1" /> <span className="max-md:hidden">Корзина</span>{" "}
                    <span className="header__basket-count">2</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex transition-all flex-1 items-center gap-2 bg-white rounded px-2 py-1 xl:ml-4 lg:mx-4 relative mr-7">
                <input
                  type="text"
                  className="header__search-input"
                  placeholder="Товарларды излеў"
                />
                <BsSearch className="text-lg text-slate-500 hover:-translate-y-0.5 transition cursor-pointer" />

                <button className="absolute -right-8" onClick={searchBarVisiblity.hide}>
                  <IoMdCloseCircle className="text-[24px] text-slate-700" />
                </button>
              </div>

            )
          }


        </Container>
      </header>
    </>
  );
};

export default Header;
