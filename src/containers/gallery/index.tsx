import Gallery from "@/templates/gallery";
import { db } from '@/Firebase.ts';
import { doc, getDocs ,collection } from 'firebase/firestore';
import {mockCardList} from "@/mocks/galleryList.ts";

import {useEffect, useState} from "react";
const GalleryPage = () => {
    const fruitCollection = collection(db, 'gallery')
    const [fruits, setFruits] = useState([])
    useEffect(() => {
        async function getFruits() {
            const data = await getDocs(fruitCollection)
            setFruits(data.docs);
        }
        getFruits()
    }, [])
    return (
        // <Gallery list={mockCardList} />
        <div>
            {/*{test !== undefined &&*/}
            {/*    <div>{test.name}</div>}*/}
        </div>
    )
}

export default GalleryPage;