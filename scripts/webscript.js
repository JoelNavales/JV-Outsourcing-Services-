function sleepnav() {
    const dropdown = document.getElementsByClassName("dropdown-content");
    dropdown[0].style.animationPlayState = "running";
}

if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}

document.addEventListener("DOMContentLoaded", function(event){
    var navmobilejs = document.getElementsByClassName("nav-burger");
    var navmobilejscontent = document.getElementsByClassName("nav-mobile-nav");
    
    navmobilejs[0].addEventListener("click", function() {
        if (navmobilejscontent[0].style.maxHeight) {
            navmobilejscontent[0].style.maxHeight = null;
            navmobilejscontent[0].style.padding = "0px";
        } else {
            navmobilejscontent[0].style.maxHeight = navmobilejscontent[0].scrollHeight + "px";
            navmobilejscontent[0].style.padding = "5px 10px 5px 10px";
        }
    });
});

if (page === "ABOUT") {
    document.addEventListener("DOMContentLoaded", function(event){
        var coll = document.getElementsByClassName("company-vmcc");
        var content = document.getElementsByClassName("content");
        
        coll[0].addEventListener("click", function() {
            if (content[0].style.maxHeight) {
                content[0].style.maxHeight = null;
                coll[0].classList.remove("active");
            } else {
                if (content[1].style.maxHeight || content[2].style.maxHeight || content[3].style.maxHeight) {
                    content[1].style.maxHeight = null;
                    coll[1].classList.remove("active");
                    content[2].style.maxHeight = null;
                    coll[2].classList.remove("active");
                    content[3].style.maxHeight = null;
                    coll[3].classList.remove("active");
                }
        
                content[0].style.maxHeight = content[0].scrollHeight + "px";
                coll[0].classList.add("active");
            }
        });
            
        coll[1].addEventListener("click", function() {
            if (content[1].style.maxHeight) {
                content[1].style.maxHeight = null;
                coll[1].classList.remove("active");
            } else {
                if (content[0].style.maxHeight || content[2].style.maxHeight || content[3].style.maxHeight) {
                    content[0].style.maxHeight = null;
                    coll[0].classList.remove("active");
                    content[2].style.maxHeight = null;
                    coll[2].classList.remove("active");
                    content[3].style.maxHeight = null;
                    coll[3].classList.remove("active");
                }
        
                content[1].style.maxHeight = content[1].scrollHeight + "px";
                coll[1].classList.add("active");
            }
        }); 
            
        coll[2].addEventListener("click", function() {
            if (content[2].style.maxHeight) {
                content[2].style.maxHeight = null;
                coll[2].classList.remove("active");
            } else {
                if (content[1].style.maxHeight || content[0].style.maxHeight || content[3].style.maxHeight) {
                    content[1].style.maxHeight = null;
                    coll[1].classList.remove("active");
                    content[0].style.maxHeight = null;
                    coll[0].classList.remove("active");
                    content[3].style.maxHeight = null;
                    coll[3].classList.remove("active");
                }
        
                content[2].style.maxHeight = content[2].scrollHeight + "px";
                coll[2].classList.add("active");
            }
        });
        
        coll[3].addEventListener("click", function() {
            if (content[3].style.maxHeight) {
                content[3].style.maxHeight = null;
                coll[3].classList.remove("active");
            } else {
                if (content[1].style.maxHeight || content[2].style.maxHeight || content[0].style.maxHeight) {
                    content[1].style.maxHeight = null;
                    coll[1].classList.remove("active");
                    content[2].style.maxHeight = null;
                    coll[2].classList.remove("active");
                    content[0].style.maxHeight = null;
                    coll[0].classList.remove("active");
                }
        
                content[3].style.maxHeight = content[3].scrollHeight + "px";
                coll[3].classList.add("active");
            }
        });
    });    
}

document.addEventListener("DOMContentLoaded", function(event){
    if (page === "BKEEPING" || page === "HRC" || page === "OS") {
    window.onload = function(){
            if (window.innerWidth <= 430) {
                const bruh = document.getElementById("brdelete");
                bruh.remove();
            }
        
            if (window.innerWidth <= 430) {
                const bruh = document.getElementById("brdelete");
                bruh.remove();
            }
        }
    }
});





