/* Uses Google Translate API */

/* Code to import other JS files from https://www.geeksforgeeks.org/how-to-include-a-javascript-file-in-another-javascript-file/ */
function include(file) { 
  
    var script  = document.createElement('script'); 
    script.src  = file; 
    script.type = 'text/javascript'; 
    script.defer = true; 
    
    document.getElementsByTagName('head').item(0).appendChild(script); 
    
  } 

include('//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
      }