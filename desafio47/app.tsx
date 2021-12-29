// @deno-types="https://deno.land/x/servest@v1.3.1/types/react/index.d.ts"
import React, {useState} from "https://dev.jspm.io/react/index.js";
// @deno-types="https://deno.land/x/servest@v1.3.1/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";
import { createApp } from "https://deno.land/x/servest@v1.3.1/mod.ts";

const app = createApp();
let visitas: number = 0;

// const enviar = () => {
  
//     console.log('hola')
// }

// const response = (
//   <html>
//     <head>
//       <meta charSet="utf-8" />
//       <title>servest</title>
//     </head>
//     <body>
//     <select id='color' onChange={()=>enviar()}>
//             <option value='blue'>Azul</option>
//             <option value='green'>Verde</option>
//         </select>   
// {/*         
//       <h1 style={{ color: "blue" }}>Hello Servest con React!</h1>
//       <h2 style={{ color: "brown" }}>Visitas: {++visitas}</h2>
//       <h3 style={{ color: "purple" }}>
//         FyH: {new Date().toLocaleString()}
//       </h3> */}
//       {/* <script>
//       {/* const colorSelect = document.getElementById(&#34color&#34);
//       colorSelect.addEventListener(&#34change&#34, enviar)
//       console.log("hola") */}
      
//       </script> */}
//     </body>
//   </html>
// );


// const headers = {
//   "content-type": "text/html; charset=UTF-8",
// };

// app.handle('/', async (req) => {
//   console.log("LLEGO REQUEST");
//   return await req.respond({
//     status: 200,
//     headers: new Headers(headers),
//     body: ReactDOMServer.renderToString(response),
//   });
// })

app.handle("/", async (req) => {
  //console.log(req.url)
  // let query = req.url.replace(/\//g, "");
  // //console.log(query)
  // const params = new URLSearchParams(query);
  // //console.log(params)
  // let frase = params.get("frase");

  // if (frase) {
  //   let fraseDeco = decodeURIComponent(frase);
    
    const message = (
      <>
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>servest</title>
        </head>
        <body>
          <select onChange={()=>coso()}>
            <option>Verde</option>
            <option>Rojo</option>
          </select>
        
        </body>
      </html>
      </>
    );
    
    const coso = () => {
      console.log('hola')
    }
    

    await req.respond({
      status: 200,
      headers: new Headers({
        "content-type": "text/html; charset=UTF-8",
      }),
      body: ReactDOMServer.renderToString(message)
    });
  // }
  // else {
  //   const message = (
  //     <html>
  //       <head>
  //         <meta charSet="utf-8" />
  //         <title>servest</title>
  //       </head>
  //       <body>
  //         Hola! mandame una frase
  //       </body>
  //     </html>
  //   );

  //   await req.respond({
  //     status: 200,
  //     headers: new Headers({
  //       "content-type": "text/html; charset=UTF-8",
  //     }),
  //     body: ReactDOMServer.renderToString(message)
  //   });
  }
);


app.get("/color", async (req) => {
  // const bodyText = await req.text();
  const bodyText = await req.color;

  const message = (
    <>
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>servest</title>
      </head>
      <body>
        <p>Hola</p>
        {bodyText}
      </body>
    </html>
    </>
  );

  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/html; charset=UTF-8",
    }),
    body: ReactDOMServer.renderToString(message)
  });
 
});

// app.handle("/bienvenido", async (req: {
//   respond: (arg0: { status: number; headers: Headers; body: any }) => any;
// },
// ) => {
//   console.log('bienvenido')
//   await req.respond({
//     status: 200,
//     headers: new Headers(headers),
//     body: ReactDOMServer.renderToString(response),
//   });
// },
// );

app.listen({ port: 8899 });