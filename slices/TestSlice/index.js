import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicLink } from '@prismicio/react';
import { linkResolver } from '@/prismicio';
import styles from './../../styles/Nav/nav.module.css'
import Imgix from 'react-imgix';


//Navigation for the landing page
/**
 * @typedef {import("@prismicio/client").Content.NavSliceSlice} NavSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavSliceSlice>} NavSliceProps
 * @param { NavSliceProps }
 */


const TestSlice = ({ slice }) => (

  <section className={styles.contentwrapper}>
    <span className="title">
    </span>

    <div>

    <PrismicRichText field={slice.primary.texttext} />
    <div className={styles.startsection}>
    <h1 className={styles.h1}> {"<PrismicNextImage> vs <Imgix>"} </h1>


    <p className={styles.whatare}>
      What is it for?
      </p>
      <p className={styles.prismicnextimageab}>
      {"<PrismicNextImage>"} is a custom component that renders an optimized image from a Prismic Image field. 
    It uses an Imgix URL-based loader by default and automatically forwards the image's URL and dimentions to next/image and accepts all of next/image props, except for src. <br></br>
    Prismic serves all images through the Content Delivery Network  {"(CDN)"}  Imgix. Imgix allows image transformations using URL Parameters. Those URL parameters are provided using the Imgixparams prop. 
    </p> 
    <p className={styles.imgixab}> 
    {"<Imgix>"} is a component for React from react-imgix library. It generates an SrcSet from the image which grants the browser the flexibility to choose the best suited image for the current window size, so it makes the images responsive!
    So the SrcSet provides different versions of the image to the browser which the browser will select based on a few things; screen size and resolution, device pixle ratio {"(DPI)"}, sometimes bandwidth and the sizes prop from the developer.
    Since Imgix does this automatcally, we have to spend a little less time worrying about making images responsive. Clever and comfortable! And of course there is the Imgixparams prop that we use to get a better control of the images.  
    </p>
        <p className={styles.paragraph}>When using Prismic the image goes through imgix, they're automatically compressed and optimised. There's a possibility to bypass the compression from Prismic/Imgix by deleting it from the API. I've disabled it from these images, so it will be added in manually on some photos for demonstration.</p>
        <p className={styles.paragraph}>All the images have the same sizes attribute, the sizes are used for making them responsive. We're pairing media queries with lengths and telling out browser where the breakpoints are for our website.</p>
        <pre>sizes="[media query] [width above media query], [width below media query]  </pre>
        <pre>sizes="(min-width: 570px) 60vw, 80vw"</pre>

        <p className={styles.paragraph}>To see the Imgix parameters in action, you can open each image in a new tab and look at the URL, there you can see what parameters have been applied along with the size the browser has chosen for the image. </p>

    </div>
    <div>

      {/* 1. Prismic next just compress  */}

    <h2 className={styles.h2}>  {"<PrismicNextImage>"} </h2>
 <div className={styles.paragraphwrapper}>
      <p className={styles.parameters}>Imgix Parameters:</p>
      <pre className={styles.pre}>auto:"compress",  cs:'strip',</pre>
      <p className={styles.paragraph}>
        This image has compression and the color space has been removed. This is added to mimic how the photo looks like when it's compressed without the API being altered.
        </p>
</div>
      <PrismicNextImage 
      field={slice.primary.testimage2} 
      alt="" 
      width={850} 
      height={567}
      //At viewport of 570 and above I want the image to display 60% of the viewport width but below that I want it to be 80%  
      sizes="(min-width: 570px) 60vw, 80vw"
      imgixParams={{ 
        auto:"compress",
        cs:'strip',
      }}
      /> 
   <div className={styles.paragraphwrapper}>
    <p className={styles.parameters}>Imgix Parameters:</p>
      <pre className={styles.pre}>
        auto:"compress",
        fit:"crop",
        ar: "1:1",
        </pre>
    <p className={styles.paragraph}> 
    Here I attempted add parameters to control the image. PrismicNextImage wants that we use the width and height prop, here it's set to 600x401.
    I put the fit parameter to crop and aspect ratio  {"(ar)"} to 1x1. We can see that it is not working, it keeps its original ratio but the image stretches, we don't want that. 
    The fit:"crop" parameter resizes the image to fit width and height or the aspect ratio parameter {"(ar:)"} and crops any excess image data. The resault is supposed to match the width and height or aspect ratio without distorting the image.
    The width and height prop from NextPrismicImage can not be overwritten and doesn't allow the imgix paramerter to work as it should, but if we remove width and height prop from the image goes out of control and becomes huge! 
    </p>
  </div>

      {/* 1. Prismic next compress + attemt to resize */}
      <PrismicNextImage 
        field={slice.primary.testimage2} 
        alt="" 
        width={600} 
        height={401}
        sizes="(min-width: 570px) 60vw, 80vw"
        imgixParams={{ 
          auto:"compress",
          fit:"crop",
          ar: "1:1",
        }}
        /> 
    {/* 3. Prismic next compress + attemt to resize */}
      <div className={styles.paragraphwrapper}>
        <p className={styles.parameters}>Imgix Parameters:</p>
            <pre className={styles.pre}>
              auto:"compress",
              fit:"crop",
              ar: "1:1",
              </pre>
          <p className={styles.paragraph}> 
            Here we're using a different fit parameter. Here I changed the width and height prop on the photo to 600x600 and kept on using fit:"crop" parameter. With out that parameter the image would become distorted. 
          </p>
          </div>
      <PrismicNextImage 
        field={slice.primary.testimage5} 
        alt="" 
        width={600} 
        height={600}
        sizes="(min-width: 570px) 60vw, 80vw"
        imgixParams={{ 
          auto:"compress",
          fit:"crop",
          ar: "1:1",
      }}/> 

      {/* 3. Prismic next with paremeters  */}
      <div className={styles.paragraphwrapper}>
      <p className={styles.parameters}>Imgix Parameters:</p>
      <pre>
        auto: 'format', 
        q: 80,
        usm: 12, 
        usmrad:'3',
        cs: 'srgb' ,
      </pre>
      <p className={styles.paragraph}> 
        On this image the compression has been removed and auto:"format" has been added instead. The format logic will attempt to serve images in AVIF format when it's supported, if it's not it fallsback to WebP, if that's not supported either the fallback is JPG. 
        AVIF files are up to 50% lighter than JPG files and up to 30% lighter than WebP files. That means our website will also be lighter! 
        The quality {"(q:)"} has been changed to 80, when a image is set to compress the default quality is set to 45, but with the compress removed the default becomes 75.
        The image has been sharpened using unsharp mask {"(usm:)"} which sharpens the image details, and unsharp mask ratio {"(usmrad:)"} which determines how mnay pixles should be included to enhance the contrast when using unsharp mask. 
        At last a colorspace {"(cs:)"} has been added. When images are compressed they lose their colorspace and tend to look gray. Even though this photo isn't compressed anymore I wanted to be sure that the image would be served in the right colorspace. 
      </p>
      </div>

      <PrismicNextImage 
        field={slice.primary.testimage3} 
        alt="" 
        width={850} 
        height={567}
        sizes="(min-width: 570px) 60vw, 80vw"
        imgixParams={{ 
          q: 80,
          usm: 12, 
          usmrad:'3',
          auto: 'format', 
          cs: 'srgb' ,
        }}/> 
{/* NextPrismicImage conclution */}
    <div className={styles.paragraphwrapper}>
      <p className={styles.paragraph}> 
      Conclution: The photos look good! Obviously the imgixparams sizing parameters that we tried to use above didn't work. 
      You might have noticed that the images aren't resonsive, I of course could have added CSS media queries or even layout="responsive" to the images. 
      My problem was that the sizes attribute and srcset don't apply as effortlessy to those as to the Imgix component.
      That problem kind of defeats the purpose of having those clever srcset that Prismic provides from Imgix.</p>
  </div>

{/* IMGIX SECTION */}

        {/* 1. Imgix only compress */}
<h2 className={styles.h2imgix}>{"<Imgix>"} </h2>
<div className={styles.paragraphwrapper}>
      <p className={styles.parameters}>Imgix Parameters:</p>
        <pre>
          auto:"compress",
          cb:"strip",
        </pre>
        <p className={styles.paragraph}>
          This image has compression and the color space has been removed. This is added to mimic how the photo looks like when it's compressed without the API being altered.
        </p>
    </div>
        <Imgix src={slice.primary.testimage.url} 
        alt={slice.primary.testimage.alt} 
        sizes="(min-width: 570px) 60vw, 80vw"
        imgixParams={{ 
          auto:"compress",
          cb:"strip",
        }}
        /> 
  {/* 2. Imgix with parameters */}
      <div className={styles.paragraphwrapper}>
        <p className={styles.parameters}>Imgix Parameters:</p>
        <pre>
          auto: 'format',
          q: 80,
          usm: 12, 
          usmrad:'3', 
          cs: 'srgb' ,
        </pre>
        <p className={styles.paragraph}> 
          On this image the compression has been removed and auto:"format" has been added instead. The format logic will attempt to serve images in AVIF format when it's supported, if it's not it fallsback to WebP, if that's not supported either the fallback is JPG. 
          AVIF files are up to 50% lighter than JPG files and up to 30% lighter than WebP files. That means our website will also be lighter! 
          The quality {"(q:)"} has been changed to 80, when a image is set to compress the default quality is set to 45, but with the compress removed the default becomes 75.
          The image has been sharpened using unsharp mask {"(usm:)"} which sharpens the image details, and unsharp mask ratio {"(usmrad:)"} which determines how mnay pixles should be included to enhance the contrast when using unsharp mask. 
          At last a colorspace {"(cs:)"} has been added. When images are compressed they lose their colorspace and tend to look gray. Even though this photo isn't compressed anymore I wanted to be sure that the image would be served in the right colorspace. 
        </p>
      </div>
       <Imgix 
          src={slice.primary.testimage4.url} 
          alt={slice.primary.testimage4.alt}   
          sizes="(min-width: 570px) 60vw, 80vw"
            imgixParams={{ 
                q: 80,
                usm: 12, 
                usmrad:'3',
                auto: 'format', 
                cs: 'srgb',
              }}/> 

        {/* 3. Imgix with parameters and crop */}
        <div className={styles.paragraphwrapper}>
        <p className={styles.parameters}>Imgix Parameters:</p>
        <pre>
          auto: 'format', 
          q: 80,
          usm: 12, 
          usmrad:'3',
          cs: 'srgb',
          fit: 'crop',
          ar:'16:9',
        </pre>
        <p className={styles.paragraph}> 
          The same parameters on this one and the one before, but 16:9 aspect ratio was added along with fit:'crop', aspect ratio doesn't work without crop. 
        </p>
        </div>
        <Imgix 
          src={slice.primary.testimage5.url} 
          alt={slice.primary.testimage5.alt} 
          sizes="(min-width: 570px) 60vw, 80vw "
            imgixParams={{ 
                auto: 'format', 
                q: 80,
                usm: 12, 
                usmrad:'3',
                cs: 'srgb',
                fit: 'crop',
                ar:'16:9',
              }}/>
      {/* 4. Imgix with DPR */}
        <div className={styles.paragraphwrapper}>
        <p className={styles.parameters}>Imgix Parameters:</p>
        <pre>
          dpr:'2',
          auto: 'format', 
          q: 80,
          usm: 12, 
          usmrad:'3',
          cs: 'srgb',
        </pre>
        <p className={styles.paragraph}> 
          Can you see the quality difference on this one? Device pixle ratio or the DPR as added to this image. It controls the output density of your image. 
          You can put DPR in the 'sizes' prop and then the browser can serve images at the correct density for each device. 
          This makes images faster and saves bandwidth for users with lower-DPR devices, while delivering the expected crispness of high-DPR imagery to those devices.
          But because this parameter is on this photo, it would always display as DRP:"2". That wouldn't be good for all devices. I recommend opening this image in a new tab, changing the dpr="" in the url and see the difference when you change it!  
          Higher DPR makes the picture bigger of course so the sizes attribute had to be changed. 
        </p>
        <pre>sizes="(min-width: 570px) 35vw, 40vw"</pre>
         </div>
        <Imgix 
          src={slice.primary.testimage6.url} 
          alt={slice.primary.testimage6.alt} 
          sizes="(min-width: 570px) 35vw, 40vw "
            imgixParams={{ 
                dpr:'2',
                auto: 'format', 
                q: 80,
                usm: 12, 
                usmrad:'3',
                cs: 'srgb',
              }}/>  
    {/* 5.Imgix with enhance */}
      <div className={styles.paragraphwrapper}>
        <p className={styles.parameters}>Imgix Parameters:</p>
        <pre>
          auto: 'format, enhance', 
          q: 80,
          usm: 12, 
          usmrad:'3',
          cs: 'srgb',
          fit: 'crop',
          vib: '10',
        </pre>
        <p className={styles.paragraph}> 
              For the last one I added auto:'enhance'. The image is adjusted using the distribution of highlights, midtones, and shadows across all three channels—red, green, and blue {"RGB"}
              It gives the image a bit more vibrant appearance. I also added a bit of vibrance just to make the colors pop more. 
        </p>
         </div>
        <Imgix 
          src={slice.primary.testimage7.url} 
          alt={slice.primary.testimage7.alt} 
          sizes="(min-width: 570px) 60vw, 80vw"
            imgixParams={{ 
                auto: 'format, enhance', 
                q: 80,
                usm: 12, 
                usmrad:'3',
                cs: 'srgb',
                fit: 'crop',
                vib: '10',
              }}/>   


        <div className={styles.paragraphwrapper}>
      <p className={styles.paragraph}> 
      Conclution: Imgix has a lot of fun parameters, a lot more than I have put in here. When I started to figure out how it worked I began to like working with it. 
      I think that the srcset in the imgix component are very comfortable to use and a clever technology. It's possible to use with other image components and make the scrsets manually but making the imgix component do it for you is so nice. 
      I also think that using this way with Prismic is very convenient because the client doesn't have to think about what size picture they upload, the code and the src sets does it for them. 
      </p>
  </div>
</div>

    </div>

<div className={styles.links}>
<p>Want to know more? Check these websites out!</p>

  <ul>
<a href="https://docs.imgix.com/apis/rendering">Imgix rendering API</a>
</ul>
<ul>
<a href="https://docs.imgix.com/tutorials/responsive-images-srcset-imgix">Imgix Responsive Images with srcset</a>
</ul>
<ul>
  <a href="https://docs.imgix.com/tutorials/react-responsive-image-gallery">Imgix Build a Responsive Image Gallery in React</a>
</ul>
<ul>
  <a href="https://docs.imgix.com/tutorials/designing-for-retina">Designing for Retina, Deploying with imgix</a>
</ul>

<ul>
  <a href="https://docs.imgix.com/libraries/react-imgix#srcsetoptions--object">React-Imgix library</a>
</ul>
</div>
{/* <a href="url">Link text or object</a>
<a href="url">Link text or object</a>
<a href="url">Link text or object</a> */}

  </section>
)

export default TestSlice