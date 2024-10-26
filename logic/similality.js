myTags = {};
yourTags = {};
simicount = 0;
mylen = myTags.length;
yourlen = yourTags.length;

function Find_Smilarity(){
  for(const len1=0;len1>mylen;len1++){
    for(const len2=0;len2>yourlen;len2++){
      if(mylen[len1] == yourlen[len2]){
        simicount++;
      }
    }
  }
  length = mylen + yourlen - simicount;
  similality = simicount / length * 100;
}