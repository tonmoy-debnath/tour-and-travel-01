import React from 'react'
import LightGallery from 'lightgallery/react';

import './Css/Gallery.css'

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function GalleryComp() {
  const onInit = () => {
    console.log('lightGallery has been initialized');
};
  return (
    <div className='max-w-7xl mx-auto mb-16 px-4 md:px-0 mt-10'>
    <div className=''>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif'>
            Our Gallery
        </h2>
        <hr className='text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10'/>
    </div>

    <div className="App">
        <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
        >
            <a href="https://images.pexels.com/photos/14332487/pexels-photo-14332487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                <img alt="img1" src="https://images.pexels.com/photos/14332487/pexels-photo-14332487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </a>
            <a href="https://images.pexels.com/photos/15033620/pexels-photo-15033620/free-photo-of-aurora-borealis-and-a-full-moon-on-sky-in-lofoten-islands-northern-norway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                <img alt="img2" src="https://images.pexels.com/photos/15033620/pexels-photo-15033620/free-photo-of-aurora-borealis-and-a-full-moon-on-sky-in-lofoten-islands-northern-norway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </a>
            <a href="https://images.pexels.com/photos/18944810/pexels-photo-18944810/free-photo-of-a-snowy-landscape-with-a-mountain-and-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                <img alt="img2" src="https://images.pexels.com/photos/18944810/pexels-photo-18944810/free-photo-of-a-snowy-landscape-with-a-mountain-and-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </a>
            <a href="https://images.pexels.com/photos/13083040/pexels-photo-13083040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                <img alt="img2" src="https://images.pexels.com/photos/13083040/pexels-photo-13083040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </a>
            <a href="https://images.pexels.com/photos/16912478/pexels-photo-16912478/free-photo-of-manor-losev-shatilovyh-stael-von-holstein-in-voronezh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                <img alt="img2" src="https://images.pexels.com/photos/16912478/pexels-photo-16912478/free-photo-of-manor-losev-shatilovyh-stael-von-holstein-in-voronezh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </a>
            <a href="https://images.pexels.com/photos/7568839/pexels-photo-7568839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                <img alt="img2" src="https://images.pexels.com/photos/7568839/pexels-photo-7568839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </a>
            <a href="https://images.pexels.com/photos/14120453/pexels-photo-14120453.jpeg">
                <img alt="img2" src="https://images.pexels.com/photos/14120453/pexels-photo-14120453.jpeg" />
            </a>
            <a href="https://images.pexels.com/photos/28003892/pexels-photo-28003892/free-photo-of-a-mountain-scene-from-flakstad-island-lofoten.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                <img alt="img2" src="https://images.pexels.com/photos/28003892/pexels-photo-28003892/free-photo-of-a-mountain-scene-from-flakstad-island-lofoten.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </a>
        </LightGallery>
    </div>
</div>
  )
}

export default GalleryComp