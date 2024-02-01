import {CardDetailMockType} from "@/components/gallery/types.ts";
import "./galleryDetail.scss";

const galleryDetail = ({title, img, id, content}: CardDetailMockType) => {
    return (
        <article className={"gallery--detail__container"}>
            <h1 className={"gallery--detail__container__title"}>{title}</h1>
            <div className={"gallery--detail__container__image"}>
                <img src={img} alt={id}/>
            </div>
            <div className={"gallery--detail__container__content"}>
                {content}
            </div>
        </article>
    )
}
export default galleryDetail;