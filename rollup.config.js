import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

const version = '1.0.0'
const banner = `/*! fgta5gridview ${version}
* Agung Nugroho DW <agung.dhewe@gmail.com>
* 
* https://github.com/fgta5/fgta5gridview 
*/ 
`

export default {
  input: "build.mjs", // File utama yang menjadi entry point
  output: {
    file: `dist/fgta5gridview-v${version}-min.js`, // Lokasi output file hasil bundle
    format: "esm", // Format modul ECMAScript
	banner: banner
  },
  plugins: [
    terser({
		compress: {
			drop_console: true, // Hapus console.log
		}	
	}),
	postcss({
		extract: `fgta5gridview-v${version}-min.css`, // Nama file CSS yang diekstrak
		minimize: true, // Minifikasi CSS
		plugins: [require("cssnano")], // Gunakan cssnano untuk minifikasi
	  }),
  ],
};