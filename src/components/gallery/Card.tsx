import {CardMockType} from "@/components/gallery/types.ts";
import {Link} from "react-router-dom";

const Card = ({img, title, id} : CardMockType) => {
    return (
        <Link to={`${id}`} className={"nblock nw-full nbg-white nrounded-xl noverflow-hidden"}>
                <img className={'nw-full nblock'} src={img} alt={title}/>
                <div className={"np-2.5 nbox-border nh-[70px] nfont-bold"}>
                    {title}
                </div>
        </Link>
    )
}

export default Card;