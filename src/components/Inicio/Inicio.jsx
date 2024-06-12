import React from "react"
import "./Inicio.css"
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react"
import Imagen from "../Imagen/Imagen"
import { searchDataSelect, searchStatusSelect, searchErrorSelect } from "../../features/search/searchSlice"
import { searchThunk} from "../../features/search/searchThunk";

const Inicio = () => {
    const [images, setImages] = useState([])
    const dispatch = useDispatch();
    const searchData = useSelector(searchDataSelect);
    const searchStatus = useSelector(searchStatusSelect);
    const searchError = useSelector(searchErrorSelect)
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      dispatch(searchThunk());
    }, [])

    const showImgs = () => {
        return images.map((image, index) => {
          return <Imagen key={index} src={image.src}  id={image.id} alt={image.alt} height={image.height} width={image.width} likes={image.likes} created={image.created}/>
        })
      }

      useEffect(() => {
        if (searchStatus === "idle") {
          dispatch(searchThunk());
        } else if (searchStatus === "pending") {
          setLoading(true);
        } else if (searchStatus === "fulfilled") {
          setLoading(false);
          let data = [];
          searchData.forEach((image) => {
            data.push({src: image.urls.regular, id: image.id, alt: image.alt_description,  height: image.height, width: image.width, likes: image.likes, created: image.created_at});
          })
          setImages(data);
        } else if (searchStatus === "rejected") {
          setLoading(false);
          console.log(searchError)
        }
      }, [dispatch, searchData, searchStatus, searchError]);

    return(
        <article className="coleccionFotos">
            {loading ? 
            <p>Wait a moment, please</p> 
            : 
            showImgs()
            }
        </article>          
    )
}

export default Inicio