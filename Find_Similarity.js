<<<<<<< HEAD
///テストデータ
mytags = ['aaa','bbb','CCC'];
yourtags = ['aaa','DDD','BBB','CCC'];
Find_Smilarity(mytags,yourtags)
{
  //2つの配列の共通要素を出力   
  const result = mytags.filter(element => yourtags.includes(element));
  // 共通の要素の数を計算
  const commonCount = result.length;
    
  // 配列の最大長さを計算
  const maxLength = Math.max(mytags.length, yourtags.length);
   
  // 類似度をパーセンテージで計算   
  return (commonCount / maxLength) * 100;
=======
//import { Group_outputInfo } from './Group_outputInfo.js';
//mytags = Group_outputInfo();

Find_Smilarity(mytags,yourtags)
{
  const similarity = 0.0;
  //2つの配列の共通要素を出力   ex(この場合):[index:2 mytags:x, yourtags:y]
  const result = compareArrays(mytags, yourtags);
  //分子 = yourtagsとの共通個数+mytagsとの共通個数/mytagsの長さ+yourtags長さ
  //最後に2で割っていい感じになってほしい
  similarity = (result[1]+result[2]/mytags.length+yourtags.length)/2.0 ;
  return similarity*100;
>>>>>>> eb391e6a90b54a9392a8bc5e17d39e147a1e7156
}