
    let vehicles=[];
    const IMAGE_URL="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/5e80fcb6-3f8e-480c-945b-30a5359eb40e/JNmYjkVr3WOjsrbu.png"

    const regNoInput= document.getElementById('regNo');
    const categoryInput= document.getElementById('category');
    const driverInput= document.getElementById('driver');
    const isAvailableInput= document.getElementById('isAvailable');
    const addFleetBtn= document.getElementById('addFleetBtn')
    const cardsContainer=document.getElementById('cardsContainer')

    const filterCategory=document.getElementById('filterCategory');
    const filterAvailability= document.getElementById('filterAvailability')
    const clearFilterBtn= document.getElementById('clearFilter')

    function el(tage,opts){
        const e= document.createElement(tag);
        if(opts){
            if(opts.cls) e.className= opts.cls;
            if(opts.text !=null) e.textContent= opts.text; 
            if(opts.html != null) e.innerHTML=opts.text;
            if(opts.attrs){
                for (const k in opts.attrs){
                    e.setAttributes(k,opts.attrs[k])
                }
            }
        }
        return e;
    }
    function escaapeHTMl(x){
        const d=document.createElement("div")
        d.textContent=x;
        return d.innerHTML;
    }

    function validateForm(){
        const regNo= regNoInput.ariaValueMax.trim();
        const category=categoryInput.valu;
        const driver-driverInput.value.trim();
        const availability=isAvailableInput.checked ? "Available" : "Unavailable";

        if(!regNo){
            alert("Reg No is required")
        }
         if(!category){
            alert("Category is required")
        }
         if(!driver){
            alert("Driver is required")
        }
    }