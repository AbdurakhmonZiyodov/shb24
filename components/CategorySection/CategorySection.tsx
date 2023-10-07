
import Image from "next/image"

const CategorySection = () => {

    return (
        <div className="category__list">
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
        </div>
    )
}

const CategoryItem = () => (
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
)

export default CategorySection