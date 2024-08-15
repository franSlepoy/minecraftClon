import { imagenVerde, chapa, cielo, negro, ojas, sombra } from "./images";
import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

const groundTexture = new TextureLoader().load(imagenVerde);
const chapaTexture = new TextureLoader().load(chapa);
const cieloTexture = new TextureLoader().load(cielo);
const ojasTexture = new TextureLoader().load(ojas);
const sombraTexture = new TextureLoader().load(sombra);
const negroTexture = new TextureLoader().load(negro);

groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;
groundTexture.magFilter = NearestFilter;

chapaTexture.wrapS = RepeatWrapping;
chapaTexture.wrapT = RepeatWrapping;
chapaTexture.magFilter = NearestFilter;

cieloTexture.wrapS = RepeatWrapping;
cieloTexture.wrapT = RepeatWrapping;
cieloTexture.magFilter = NearestFilter;

ojasTexture.wrapS = RepeatWrapping;
ojasTexture.wrapT = RepeatWrapping;
ojasTexture.magFilter = NearestFilter;

sombraTexture.wrapS = RepeatWrapping;
sombraTexture.wrapT = RepeatWrapping;
sombraTexture.magFilter = NearestFilter;

negroTexture.wrapS = RepeatWrapping;
negroTexture.wrapT = RepeatWrapping;
negroTexture.magFilter = NearestFilter;

export {
  groundTexture,
  chapaTexture,
  cieloTexture,
  ojasTexture,
  sombraTexture,
  negroTexture,
};
