

alert("This website is made only for desktop version mobile version will be updated soon!! ");

let menuIcon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('sections');
let navLinks = document.querySelector('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active');
            })

        }

    })

}


const ele=document.querySelectorAll(".navbar")
 let observer= new IntersectionObserver(
   (entries)=>{
     entries.forEach(
       (entry)=>{
         console.log(entry)
         if(entry.isIntersecting){
           entry.target.classList.add("show")
         }
         else{
           entry.target.classList.remove("show")
         }
       }
       )
   }
   )
   ele.forEach(
     (el)=>{
       observer.observe(el);
     }
     )
     


     const ble=document.querySelectorAll(".header")
 let gand= new IntersectionObserver(  
   (entries)=>{
     entries.forEach(
       (entry)=>{
         console.log(entry)
         if(entry.isIntersecting){
           entry.target.classList.add("show")
         }
         else{
           entry.target.classList.remove("show")
         }
       }
       )
   }
   )
   ble.forEach(
     (el)=>{
       gand.observe(el);
     }
     )



    
     const gle=document.querySelectorAll(".home-content")
 let mand= new IntersectionObserver(
   (entries)=>{
     entries.forEach(
       (entry)=>{
         console.log(entry)
         if(entry.isIntersecting){
           entry.target.classList.add("show")
         }
         else{
           entry.target.classList.remove("show")
         }
       }
       )
   }
   )
   gle.forEach(
     (el)=>{
       mand.observe(el);
     }
     )



     const ale=document.querySelectorAll(".gandu")
     let sand= new IntersectionObserver(
       (entries)=>{
         entries.forEach(
           (entry)=>{
             console.log(entry)
             if(entry.isIntersecting){
               entry.target.classList.add("show")
             }
             else{
               entry.target.classList.remove("show")
             }
           }
           )
       }
       )
       ale.forEach(
         (el)=>{
           sand.observe(el);
         }
         )
    
         const tle=document.querySelectorAll(".gandu3")
         let tand= new IntersectionObserver(
           (entries)=>{
             entries.forEach(
               (entry)=>{
                 console.log(entry)
                 if(entry.isIntersecting){
                   entry.target.classList.add("show")
                 }
                 else{
                   entry.target.classList.remove("show")
                 }
               }
               )
           }
           )
           tle.forEach(
             (el)=>{
               tand.observe(el);
             }
             )
        
    
             const cle=document.querySelectorAll(".gandu2")
     let and= new IntersectionObserver(
       (entries)=>{
         entries.forEach(
           (entry)=>{
             console.log(entry)
             if(entry.isIntersecting){
               entry.target.classList.add("show")
             }
             else{
               entry.target.classList.remove("show")
             }
           }
           )
       }
       )
       cle.forEach(
         (el)=>{
           and.observe(el);
         }
         )
    
    
         const dle=document.querySelectorAll(".gandu4")
     let band= new IntersectionObserver(
       (entries)=>{
         entries.forEach(
           (entry)=>{
             console.log(entry)
             if(entry.isIntersecting){
               entry.target.classList.add("show")
             }
             else{
               entry.target.classList.remove("show")
             }
           }
           )
       }
       )
       dle.forEach(
         (el)=>{
           band.observe(el);
         }
         )
    
    
         const ple=document.querySelectorAll(".services-container")
         let pand= new IntersectionObserver(
           (entries)=>{
             entries.forEach(
               (entry)=>{
                 console.log(entry)
                 if(entry.isIntersecting){
                   entry.target.classList.add("show")
                 }
                 else{
                   entry.target.classList.remove("show")
                 }
               }
               )
           }
           )
           ple.forEach(
             (el)=>{
               pand.observe(el);
             }
             )
        
        
        
             const qle=document.querySelectorAll(".mc")
             let qand= new IntersectionObserver(
               (entries)=>{
                 entries.forEach(
                   (entry)=>{
                     console.log(entry)
                     if(entry.isIntersecting){
                       entry.target.classList.add("show")
                     }
                     else{
                       entry.target.classList.remove("show")
                     }
                   }
                   )
               }
               )
               qle.forEach(
                 (el)=>{
                   qand.observe(el);
                 }
                 )
            
            
            
                 const xle=document.querySelectorAll(".bc")
                 let xand= new IntersectionObserver(
                   (entries)=>{
                     entries.forEach(
                       (entry)=>{
                         console.log(entry)
                         if(entry.isIntersecting){
                           entry.target.classList.add("show")
                         }
                         else{
                           entry.target.classList.remove("show")
                         }
                       }
                       )
                   }
                   )
                   xle.forEach(
                     (el)=>{
                       xand.observe(el);
                     }
                     )
                
                
                
                     const rle=document.querySelectorAll(".ac")
                     let oand= new IntersectionObserver(
                       (entries)=>{
                         entries.forEach(
                           (entry)=>{
                             console.log(entry)
                             if(entry.isIntersecting){
                               entry.target.classList.add("show")
                             }
                             else{
                               entry.target.classList.remove("show")
                             }
                           }
                           )
                       }
                       )
                       rle.forEach(
                         (el)=>{
                           oand.observe(el);
                         }
                         )
                    window.addEventListener('load', () => {
  document.getElementById('loader').style.display = 'none';
});
