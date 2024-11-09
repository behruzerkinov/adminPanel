import { useState, useEffect } from "react";

const apiKey =
   "https://documenter.getpostman.com/view/24974792/2s935oL3qs#a350b0bf-2888-4af0-aaa5-3111ce63dade";

const Contents = () => {
   const [content, setContent] = useState([]);

   useEffect(() => {
      const fetchContents = async () => {
         try {
            const response = await fetch(apiKey);
            const data = await response.json();
            setContent(data);
         } catch (error) {
            console.error("Error fetching contents:", error);
         }
      };

      fetchContents();
   }, []);

   return <div>

   </div>;
};

export default Contents;
