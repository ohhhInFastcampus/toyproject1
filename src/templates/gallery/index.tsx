import "./gallery.scss";
import Card from "@/components/gallery/Card.tsx";
import {mockCardList} from "@/mocks/galleryList.ts";

const Gallery = ({}) => {
    //TODO 해당 부분 컨테이너로 부를 시 목 리스트를 상위에서 불러 하위로 전달하기
    return (
        <section className={"gallery"}>
            <h1 className={"gallery__title"}>갤러리</h1>
            <article className={"gallery__card--grid"}>
                {
                    mockCardList.map((item) => {
                        return (
                            <Card key={item.id} {...item}/>
                        )
                    })
                }
            </article>
        </section>
    )
}

export default Gallery;