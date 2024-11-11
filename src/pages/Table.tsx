import { useEffect, useState } from "react";

export default function Table() {
   const [table, setTable] = useState(null);

   useEffect(() => {
      fetch("https://autoapi.dezinfeksiyatashkent.uz/api/", {
         method: "GET",
      })
         .then((response) => response.json())
         .then((data) => setTable(data));
      console.log(table);
   }, [table]);

   return <div></div>;
}
