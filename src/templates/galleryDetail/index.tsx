// import {CardDetailMockType} from "@/components/gallery/types.ts";
import {useParams} from "react-router-dom";

// const galleryDetail =({title,img,id,content}:CardDetailMockType) => {
const galleryDetail =() => {
    const {id} = useParams();
    console.log(id,"params");
    //TODO path의 id로 데이터 전송 후 받아올 예정
    return (
        <article className={""}>
            test
            {/*<h1>{title}</h1>*/}
            {/*<img src={img} alt={id}/>*/}
            {/*<div>*/}
            {/*    {content}*/}
            {/*</div>*/}

        </article>
    )
}
export default galleryDetail;