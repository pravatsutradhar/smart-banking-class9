const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

const accordionItemHeader = document.querySelector(".accordion-item-header");

accordionItemHeader.classList.add("active");

const accordionBody = document.querySelector(".accordion-item-body");

accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";


accordionItemHeaders.forEach(accordionItemHeader => {
   accordionItemHeader.addEventListener("click", event => {
    
     // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
       currentlyActiveAccordionItemHeader.classList.toggle("active");
       currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
     }

     accordionItemHeader.classList.toggle("active");
     const accordionItemBody = accordionItemHeader.nextElementSibling;
     if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
     }
     else {
       accordionItemBody.style.maxHeight = 0;
     }
    
   });
});