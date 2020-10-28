import { Term, Image } from './../data/data';
import { ElemType, TERM_CODES, IMAGE_CODES, Css, ImageCode } from './../../types/dataTypes';

export const getAdvantages = (elem: ElemType): number[] => {
  // fire, water, rock, leaf, elec, death
  // -1 means the monster takes MORE damage
  // 1 means resistance
    if (elem === 'Death') {return [0, -1, 1, 1, -1, 0]; }
    if (elem === 'Electric') { return [-1, 1, -1, 0, 0, 1]; }
    if (elem === 'Fire') { return [0, -1, -1, 1, 1, 0]; }
    if (elem === 'Water') { return [1, 0, 0, -1, -1, 1]; }
    if (elem === 'Leaf') { return [-1, 1, 1, 0, 0, -1]; }
    if (elem === 'Rock') { return [1, 0, 0, -1, 1, -1]; }
};

export const getElementIndex = (elem: ElemType): number => {
  if (elem === 'Death') {return 0; }
  if (elem === 'Electric') { return 1; }
  if (elem === 'Fire') { return 2; }
  if (elem === 'Water') { return 3; }
  if (elem === 'Leaf') { return 4; }
  if (elem === 'Rock') { return 5; }
}

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
        const html = `<img src="${image.path}" class="${imageCss}">`;
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
      const isStatSpread = obj.hasOwnProperty('positive') || obj.hasOwnProperty('neutral') || obj.hasOwnProperty('negative');
      if (isStatSpread) {
        html = '<span class="stat-spread">';
        if (obj.hasOwnProperty('positive')) {
          html += `<span class="positive">${obj.positive}</span>`;
        }
        if (obj.hasOwnProperty('neutral')) {
          html += `<span class="neutral">${obj.neutral}</span>`;
        }
        if (obj.hasOwnProperty('negative')) {
          html += `<span class="negative">${obj.negative}</span>`;
        }
        html += '</span>';
      }
      const isCubes = obj.hasOwnProperty('stat') || obj.hasOwnProperty('num') || obj.hasOwnProperty('isPositive');
      if (isCubes) {
        html = '<div class="cubes">';
          const cubeType: ImageCode = obj.isPositive ? '[PQ]' : '[NQ]';
          let cubeStr = '';
          for (let i = 0; i < obj.num; i++) {
            cubeStr += cubeType + ' ';
          }
          html += `${cubeStr}– [${obj.stat}]</div>`;
      }
      innerHtml = innerHtml.replace(jsonInText, html);
    } catch (error) {
      innerHtml = innerHtml.replace(jsonInText, '');
    }
  }
  return innerHtml;
}