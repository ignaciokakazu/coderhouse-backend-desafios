// import { serve } from "https://deno.land/std@0.119.0/http/server.ts";


// serve(() => new Response("Hello World\n"));

// console.log("http://localhost:8000/");
//import {servest} from 'https://deno.land/x/servest@v1.3.4/mod.ts';
import { DenonConfig } from 'https://deno.land/x/denon@2.4.7/mod.ts';

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: 'deno run --allow-net app.tsx',
      desc: 'run my app.ts file',
    },
  },
};

export default config;