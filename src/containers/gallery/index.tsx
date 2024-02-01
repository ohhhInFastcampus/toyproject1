import Gallery from "@/templates/gallery";
import { db } from '@/Firebase.ts';
import { doc, getDoc } from 'firebase/firestore';
import {mockCardList} from "@/mocks/galleryList.ts";
import {useEffect, useState} from "react";
const GalleryPage = () => {
    const [test, setTest] = useState()
    async function getTest() {
        // document에 대한 참조 생성
        const docRef = doc(db, "gallery");
        // 참조에 대한 Snapshot 쿼리
        const docSnap = await getDoc(docRef);
        console.log(docSnap,"docSnap")
        if (docSnap.exists()) {

            // setTest(docSnap.data())
        }
    }
    useEffect(() => {
        getTest()
    }, [])
    return (
        // <Gallery list={mockCardList} />
        <div>
            {test !== undefined &&
                <div>{test.name}</div>}
        </div>
    )
}

export default GalleryPage;