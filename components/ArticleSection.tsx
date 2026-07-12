"use client";

import { motion } from "framer-motion";


interface Props {

title:string;

text:string;

image?:string;

}


export default function ArticleSection({

title,

text,

image,

}:Props){


const shortText = text.substring(0,260)+"...";


return (

<div className="mb-24">


<section
className="
relative
max-w-6xl
mx-auto
px-6
py-12
md:py-20
flex
flex-col
md:flex-row
items-center
"
>


<motion.div

initial={{opacity:0,x:-50}}

whileInView={{opacity:1,x:0}}

transition={{duration:1}}

viewport={{once:true}}

className="
w-full
md:w-1/2
relative
z-20
p-5
md:p-8
rounded-3xl
border
border-white/30
backdrop-blur-md
"

style={{
background:
"linear-gradient(to right, rgba(255,255,255,.9), rgba(255,255,255,.55))"
}}

>


<h2
className="
text-2xl
md:text-4xl
font-bold
text-[#0F2E4D]
mb-6
"
>

{title}

</h2>


<p
className="
text-gray-800
text-base
md:text-lg
leading-7
md:leading-8
text-justify
"
>

{shortText}

</p>


</motion.div>



{image && (

<motion.div

initial={{opacity:0,x:50}}

whileInView={{opacity:1,x:0}}

transition={{duration:1}}

viewport={{once:true}}

className="
w-full
md:absolute
right-0
top-0
md:w-[70%]
h-72
md:h-full
z-10
overflow-hidden
rounded-3xl
mt-8
md:mt-0
"

>


<img

src={image}

alt={title}

className="
w-full
h-full
object-cover
"

/>


<div
className="
absolute
inset-0
bg-gradient-to-r
from-white
via-white/40
to-transparent
"
/>


</motion.div>

)}


</section>




<motion.section

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:1}}

viewport={{once:true}}

className="
max-w-6xl
mx-auto
px-6
"

>

<div

className="
bg-white/70
backdrop-blur-md
border
border-gray-200
rounded-3xl
p-5
md:p-12
"

>


<div
className="
relative
overflow-hidden
mt-10
p-5
md:p-10
rounded-3xl
border
border-gray-100
bg-white/70
backdrop-blur-md
"
>


{/* WATERMARK LOGO */}

<div
className="
absolute
inset-0
flex
items-center
justify-center
pointer-events-none
"
>

<img

src="/LOGO-WATERMARK.png"

alt=""

className="
w-[320px]
md:w-[620px]
opacity-[0.5]
select-none
"

/>

</div>



{/* TEXT */}

<div
className="
relative
z-10
whitespace-pre-line
text-gray-700
text-base
md:text-lg
leading-7
md:leading-8
text-justify
"
>

{text}

</div>


</div>


</div>


</motion.section>


</div>

);

}
