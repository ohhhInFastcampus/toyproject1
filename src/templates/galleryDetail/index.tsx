import {GalleryType} from "@/components/gallery/types.ts";
import "./galleryDetail.scss";
import {useNavigate} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";

const galleryDetail = ({title, img, id, content}: GalleryType) => {
    const navigate = useNavigate();
    return (
        <article className={"gallery--detail__container"}>
            <h1 className={"gallery--detail__container__title"}>{title}</h1>
            <div className={"gallery--detail__container__image"}>
                <img src={img} alt={id}/>
            </div>
            <div className={"gallery--detail__container__content"}>
                {content}
            </div>
            <Button onClick={()=>{navigate(-1)}}>목록으로</Button>
        </article>
    )
}
export default galleryDetail;