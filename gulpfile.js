const { src, dest, watch } = require("gulp");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
//src: fn para encontar el archivo a compilar
//dest: funcion para definir archivo destino a compilar
const sass = require("gulp-sass")(require("sass"));
function compileSASS() {
  return src("./src/styles/index.scss")
    .pipe(sass())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(dest("./dist/styles"));
}

function watching() {
  watch("./src/styles/*.scss", compileSASS);
  watch("./src/js/*.js", js);
}
function js() {
  return src("src/js/index.js")
    .pipe(concat("index.js"))
    .pipe(uglify())
    .pipe(dest("dist"));
}
function build() {
  return compileSASS(), js();
}
exports.compileSASS = compileSASS;
exports.js = js;
exports.watching = watching;
exports.build = build;
