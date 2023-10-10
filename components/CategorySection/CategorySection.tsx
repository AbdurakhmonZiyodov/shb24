
import { CategoryItemProps } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const CategorySection = () => {

    return (
        <div className="category__list">
            <CategoryItem id={1} />
            <CategoryItem id={2} />
            <CategoryItem id={3} />
            <CategoryItem id={4} />
            <CategoryItem id={5} />
            <CategoryItem id={6} />
            <CategoryItem id={7} />
            <CategoryItem id={8} />
            <CategoryItem id={9} />
            <CategoryItem id={10} />
            <CategoryItem id={11} />
            <CategoryItem id={12} />
            <CategoryItem id={13} />
            <CategoryItem id={14} />
        </div>
    )
}

export const CategoryItem: FC<CategoryItemProps> = ({ id }) => (
    <Link href={`/category/${id}`}>
        <div className="category__item">
            <Image
                src={'/1552751682.png'}
                width={100}
                height={100}
                className="object-cover"
                alt="category img"
            />
            <h5>Овощлар ҳәм мийуелер</h5>
        </div>
    </Link>
)

export default CategorySection