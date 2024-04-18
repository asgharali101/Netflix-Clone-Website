/*  @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],

    theme: {
     
      
      extend:{
        screens:{
          'xs': {'min':'320px','max':'750'} ,
          'sl':{'min':'300','max':'760'}, 
          
        },
        
        colors:{
            blacknew:"#0F1419",
            bg:"from-sky-500 to-indigo-500",
        },

        fonts:{
          poppins:'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif',
        },
         container: {
        center: true,
      }
    }
     
    },
 
  
  plugins: [],
}


