import { Term, Image } from './../data/data';
import { ElemType, TERM_CODES, IMAGE_CODES, Css, ImageCode } from './../../types/dataTypes';

const getImageClass  = (str: string): string => {
  return str.substring(1, str.length - 1).toLowerCase();
};

export const getElementIndex = (elem: ElemType): number => {
  if (elem === 'Death') {return 0; }
  if (elem === 'Electric') { return 1; }
  if (elem === 'Fire') { return 2; }
  if (elem === 'Water') { return 3; }
  if (elem === 'Leaf') { return 4; }
  if (elem === 'Rock') { return 5; }
};

export const getAbilityText = (text: string, termCss: Css, imageCss: Css): string => {
  if (!text) {
    return null;
  }
  let innerHtml = convertInnerTextJson(text);
  TERM_CODES.forEach((term: Term) => {
    while (innerHtml.includes(term.key)) {
        const html = `<br><span class="${termCss}">(${convertInnerTextJson(term.value)})</span>`;
        innerHtml = innerHtml.replace(term.key, html);
    }
  });
  IMAGE_CODES.forEach((image: Image) => {
    while (innerHtml.includes(image.key)) {
        const html = `<img src="${image.path}" class="${imageCss} ${getImageClass(image.key)}">`;
        innerHtml = innerHtml.replace(image.key, html);
    }
  });
  return innerHtml;
};

function convertInnerTextJson(innerHtml) {
  while (innerHtml.includes('{') && innerHtml.includes('}')) {
    const startIndex = innerHtml.indexOf('{');
    const endIndex = innerHtml.indexOf('}');
    const jsonInText = innerHtml.substring(startIndex, endIndex + 1);
    try {
      const obj = JSON.parse(jsonInText);
      let html;
      const isCubes = obj.hasOwnProperty('stat') || obj.hasOwnProperty('num') || obj.hasOwnProperty('isPositive');
      if (isCubes) {
        html = '<div class="cubes">';
          const cubeType: ImageCode = obj.isPositive ? '[PQ]' : '[NQ]';
          let cubeStr = '';
          for (let i = 0; i < obj.num; i++) {
            cubeStr += cubeType + ' ';
          }
          html += `${cubeStr}[ARROW] [${['ATK', 'HOLLOW'].includes(obj.stat) ? 'HOLLOW' : obj.stat}]</div>`;
      }
      innerHtml = innerHtml.replace(jsonInText, html);
    } catch (error) {
      innerHtml = innerHtml.replace(jsonInText, '');
    }
  }
  return innerHtml;
};

