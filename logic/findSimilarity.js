"use strict";

// テストデータ
// const tags1 = ['aaa','bbb','CCC'];
// const tags2 = ['aaa','bbb','CCC'];

/**
 * 2つのタグの配列を比較して、類似度を計算する
 * 
 * @param {Array<string>} mytags 
 * @param {Array<string>} yourtags 
 * @returns int 類似度
 */
export const findSmilarity = (mytags, yourtags) => {
  // 2つの配列の共通要素を出力   
  const result = mytags.filter(element => yourtags.includes(element));
  // 共通の要素の数を計算
  const commonCount = result.length;

  // 配列の最大長さを計算
  const maxLength = Math.max(mytags.length, yourtags.length);

  // console.log((commonCount / maxLength) * 100);
  // 類似度をパーセンテージで計算   
  return (commonCount / maxLength) * 100;
}

// console.log(findSmilarity(tags1,tags2));