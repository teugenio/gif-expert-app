import { useEffect, useState } from 'react';
import getGifs from '../helpers/getGifs';

const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category, 5);
        setImages(newImages);
        setIsLoading(false);
    };

    //   useEffect sirve para disparar efectos secundarios (procesos)
    //   bajo siertas condiciones cuando el segundo paramatro (dependencias )
    //   lo dejo como un arreglo vacio solo se ejecuta el hook la primera vez que ejecuto
    //   el componente. Recordar que no puede ser async por lo que se usa una funcion getImages
    useEffect(() => {
        getImages();
    }, []);

    return {
        images: images,
        isLoading: isLoading,
    };
};

export default useFetchGifs;
