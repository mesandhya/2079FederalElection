import * as fs from "fs";

const inputGeoJSON =
  "/home/sandhyaneupane/Desktop/image_template/federal_candidacy_new_template/NepalGeoJSONFiles/Constituency.geojson";
const dataJSONSource = fs.readFileSync(inputGeoJSON, {
  encoding: "utf8",
  flag: "r",
});

const dataJSON = JSON.parse(dataJSONSource);


import geojson2svg from "geojson2svg";

const attributes = [
  "properties.PRO_COM_T",
  "properties.COMUNE",
  "properties.COD_REG",
  "properties.COD_PROV",
];

const converter = geojson2svg({
  attributes: attributes,
});

const svgStr = converter.convert(dataJSON);

const svg = parseSVG(str);

function parseSVG(str) {
  const paths = `<g class="comuni" id="comuni">\r\n${str.join("\r\n")}</g>`;

  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
  <svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
>
<style>
g.comuni {
    fill: lightyellow;
    stroke-width: 0.5;
    stroke-linecap: square;
    stroke-linejoin: bevel;
    stroke-miterlimit: 3;
    stroke-opacity: 1;
    stroke: slategray;
    fill-opacity: 1;
}
</style>
<g inkscape:groupmode="layer" id="layer1" inkscape:label="Base"/>
<g inkscape:groupmode="layer" id="layer2" inkscape:label="Comuni">
${paths}
</g>
</svg>
`;
}


const fileOutput = "GM-comuni_100snap";

fs.writeFileSync(`${fileOutput}.svg`, comuniPOISvg);