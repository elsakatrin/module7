Hæ! 

This is my project for Module 7 in Vefskólinn. 

I worked with: Next.js, Prismic (Using slicemachine and prismic dashboard), Imgix for Photos, SCSS for styling, React scroll for smooth scroll, Aoa for scroll animations. The website is deployed with Vercel.

Content is mostly imported from the Prismic Dashboard (Client repository)
Content is put together inside slicemachine where I put what slices should belong inside what custom types. 
In the prismic dashboard (where the client works) the client puts their content in and chooses what slices they want to have. 


My focus for this project was Optimization for images with Imgix/Prismic. 
I looked a lot into quality of images and performance. I learned a lot about my topics; image optimization, page speed and how that effects performance, the user and SEO. And also why these things are important.
I decided that this would be a good opportunity to solve my own website problem and at the same time combine my interests, where I made a website for my own photography. I wanted to keep the quality high while keeping the performance high and fast. 


I disabled the compression of the images from the API I got from prismic. 
I used the <Imgix> component for images and used imgixparam prop to add parameters from Imgix to have a better control over the image. 
The <Imgix> component automatically generates a very handy srcset for you. The srcset provides different widths of the image to the browser. The browser will then select the best suited image based on a few things like screen size and resolution, and the sizes attribute from the developer. 
To use srcset effectively, you’d need to add a sizes attribute. Where you pair media queries with lengths of the image. 
The advantages of this is to serve better images to the user and at the same time improving the website load time. It also makes the images responsive!
  I think this project was really fun to do!
