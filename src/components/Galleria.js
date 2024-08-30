import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';

const Galeria = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchedImages = [
            {
                itemImageSrc: '/imagenes-de-proyecto/proyectos_realizados/banca_en_laja_gris.jpeg',
                thumbnailImageSrc: '/imagenes-de-proyecto/proyectos_realizados/banca_en_laja_gris.jpeg',
                alt: 'Imagen 1'
            },
            {
                itemImageSrc: '/imagenes-de-proyecto/proyectos_realizados/lajon_negro.jpeg',
                thumbnailImageSrc: '/imagenes-de-proyecto/proyectos_realizados/lajon_negro.jpeg',
                alt: 'Imagen 2'
            },
            {
                itemImageSrc: '/imagenes-de-proyecto/proyectos_realizados/laja_gris_palillo.jpeg',
                thumbnailImageSrc: '/imagenes-de-proyecto/proyectos_realizados/laja_gris_palillo.jpeg',
                alt: 'Imagen 3'
            },
            {
                itemImageSrc: '/imagenes-de-proyecto/proyectos_realizados/laja_negra_recortes_combinados.jpeg',
                thumbnailImageSrc: '/imagenes-de-proyecto/proyectos_realizados/laja_negra_recortes_combinados.jpeg',
                alt: 'Imagen 4'
            },
            {
                itemImageSrc: '/imagenes-de-proyecto/proyectos_realizados/pulida_canteado_con_medida.jpeg',
                thumbnailImageSrc: '/imagenes-de-proyecto/proyectos_realizados/pulida_canteado_con_medida.jpeg',
                alt: 'Imagen 5'
            },
            {
                itemImageSrc: '/imagenes-de-proyecto/proyectos_realizados/pulida_fachaleta_7cm.jpeg',
                thumbnailImageSrc: '/imagenes-de-proyecto/proyectos_realizados/pulida_fachaleta_7cm.jpeg',
                alt: 'Imagen 6'
            },
            {
                itemImageSrc: '/imagenes-de-proyecto/proyectos_realizados/semirrustica_palillo.jpeg',
                thumbnailImageSrc: '/imagenes-de-proyecto/proyectos_realizados/semirrustica_palillo.jpeg',
                alt: 'Imagen 7'
            },
            {
                itemImageSrc: '/imagenes-de-proyecto/proyectos_realizados/semirrustico_amarillo.jpeg',
                thumbnailImageSrc: '/imagenes-de-proyecto/proyectos_realizados/semirrustico_amarillo.jpeg',
                alt: 'Imagen 8'
            },
            {
                itemImageSrc: '/imagenes-de-proyecto/proyectos_realizados/sillon_de_mollejon_amarillo.jpeg',
                thumbnailImageSrc: '/imagenes-de-proyecto/proyectos_realizados/sillon_de_mollejon_amarillo.jpeg',
                alt: 'Imagen 9'
            },
            {
                itemImageSrc: '/imagenes-de-proyecto/proyectos_realizados/fachaleta_7cm.jpeg',
                thumbnailImageSrc: '/imagenes-de-proyecto/proyectos_realizados/fachaleta_7cm.jpeg',
                alt: 'Imagen 10'
            },
        ];
        setImages(fetchedImages);
    }, []);

    const responsiveOptions = [
        { breakpoint: '1024px', numVisible: images.length },
        { breakpoint: '960px', numVisible: images.length },
        { breakpoint: '768px', numVisible: images.length },
        { breakpoint: '560px', numVisible: images.length }
    ];

    const itemTemplate = (item) => (
        <div style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
            <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
    );

    const thumbnailTemplate = (item) => (
        <div style={{ width: '150px', height: '150px', overflow: 'hidden', borderRadius: '8px', margin: '5px' }}>
            <img src={item.thumbnailImageSrc} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
    );

    return (
        <div className='gallery-container'>
            <Galleria 
                value={images} 
                circular 
                style={{ maxWidth: '800px', margin: 'auto' }}
                item={itemTemplate} 
                numVisible={3}
                thumbnail={thumbnailTemplate} 
                className="custom-galleria"  
                showThumbnails={true}
                showIndicators={false}
            />
        </div>
    );
};

export default Galeria;
