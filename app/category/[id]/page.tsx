
import { Container } from '@/components'
import { CategoryItem } from '@/components/CategorySection/CategorySection'
import { CategoryItemPageProps } from '@/types'
import { categoryList } from '@/utils'
import { map } from 'lodash'
import Link from 'next/link'
import React, { FC } from 'react'
import { AiOutlineRight } from 'react-icons/ai'


const Page = ({ params }: CategoryItemPageProps) => {

    const id = params.id;
    return (
        <div className="categoryItem">
            <Container>
                {/* header section */}
                {/*@ts-ignore*/}
                <Header id={id} />

                <main className="categoryItem__main">
                    {/*  left section */}
                    <section className="categoryItem__category-section">
                        {
                            map(categoryList, (value, index) => (
                                <Link key={index} href={`/category/${index + 1}`} className='categoryItem__base-title'>{value}</Link>
                            ))
                        }
                    </section>

                    {/*  right section*/}
                    <section className="categoryItem__category-list">
                        <CategoryItem id={1} />
                        <CategoryItem id={2} />
                        <CategoryItem id={3} />
                        <CategoryItem id={4} />
                        <CategoryItem id={5} />
                        <CategoryItem id={6} />
                        <CategoryItem id={7} />
                    </section>
                </main>
            </Container>
        </div>
    )
}


interface HeaderProps {
    id: number;
}

const Header: FC<HeaderProps> = ({ id }) => {

    const categoryName = categoryList[id - 1]
    return (
        <div className="categoryItem__header">
            <Link href={'/'} className='flex items-center gap-2 categoryItem__base-title'>Тийкарғы <AiOutlineRight /></Link>
            <Link href={`/category/${id}`} className='categoryItem__base-title'>{categoryName}
            </Link>
        </div>
    )
}

export default Page
