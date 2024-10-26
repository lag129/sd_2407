//テストデータ
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
}