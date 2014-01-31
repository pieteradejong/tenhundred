var words = {
  // top 100 Basic English Words

  'a'      : 100,
  'about'  : 100,
  'all'    : 100,
  'an'     : 100,
  'and'    : 100,
  'are'    : 100,
  'as'     : 100,
  'at'     : 100,
  
  'be'     : 100,
  'big'    : 100,
  'but'    : 100,
  'by'     : 100,
  
  'can'    : 100,
  
  'do'     : 100,
  'down'   : 100,

  'father' : 100,
  'first'  : 100,
  'for'    : 100,
  'from'   : 100,

  'good': 100,

  'hate': 100,
  'have': 100,
  'he': 100,
  'her': 100,
  'him': 100,
  'his': 100,

  'I': 100,
  'if': 100,
  'in': 100,
  'into': 100,
  'is': 100,
  'it': 100,

  'just': 100,

  'like': 100,
  'listen': 100,
  'little': 100,
  'love': 100,

  'make': 100,
  'man': 100,
  'many': 100,
  'more': 100,
  'most': 100,
  'mother': 100,
  'my': 100,

  'near': 100,
  'no': 100,
  'not': 100,
  'now': 100,

  'of': 100,
  'on': 100,
  'one': 100,
  'only': 100,
  'or': 100,
  'other': 100,
  'out': 100,
  'over': 100,

  'people': 100,

  'read': 100,

  'said': 100,
  'say': 100,
  'see': 100,
  'she': 100,
  'should': 100,
  'slow': 100,
  'small': 100,
  'so': 100,
  'some': 100,
  'stop': 100,

  'than': 100,
  'that': 100,
  'the': 100,
  'then': 100,
  'there': 100,
  'they': 100,
  'this': 100,
  'through': 100,
  'to': 100,
  '100': 100,
  'two': 100,

  'up': 100,
  'use': 100,

  'very': 100,

  'was': 100,
  'water': 100,
  'way': 100,
  'we': 100,
  'were': 100,
  'what': 100,
  'when': 100,
  'where': 100,
  'which': 100,
  'who': 100,
  'will': 100,
  'with': 100,
  'woman': 100,
  'would': 100,
  'write': 100,

  'yes': 100,
  'you': 100,

  // next 100 Basic English Words

  'above'   : 200,
  'after'   : 200,
  'again'   : 200,
  'air'   : 200,
  'also'   : 200,
  'always'   : 200,
  'another'   : 200,
  'any'   : 200,
  'around'   : 200,
  'away'   : 200,

  'back'   : 200,
  'bad'   : 200,
  'because'   : 200,
  'behind'   : 200,
  'below'   : 200,
  'between'   : 200,
  'big'   : 200,
  'both'   : 200,
  'bus'   : 200,
  'bye'   : 200,

  'came'   : 200,
  'car'   : 200,
  'children'   : 200,
  'come'   : 200,
  'cross'   : 200,

  'day'   : 200,
  'different'   : 200,
  'during'   : 200,

  'eat'   : 200,
  'end'   : 200,
  'even'   : 200,
  'every'   : 200,

  'few'   : 200,
  'find'   : 200,
  'food'   : 200,
  'form'   : 200,

  'get'   : 200,
  'give'   : 200,
  'go'   : 200,
  'great'   : 200,

  'help'   : 200,
  'here'   : 200,
  'home'   : 200,
  'house'   : 200,

  'important'   : 200,

  'keep'   : 200,

  'large'   : 200,
  'last'   : 200,
  'later'   : 200,
  'left'   : 200,
  'less'   : 200,
  'line'   : 200,
  'look'   : 200,

  'me'   : 200,
  'men'   : 200,
  'might'   : 200,
  'much'   : 200,
  'must'   : 200,

  'name'   : 200,
  'never'   : 200,
  'new'   : 200,
  'next'   : 200,
  'number'   : 200,

  'off'   : 200,
  'ok'   : 200,
  'old'   : 200,
  'our'   : 200,
  'own'   : 200,

  'part'   : 200,
  'place'   : 200,
  'put'   : 200,

  'right'   : 200,

  'same'   : 200,
  'set'   : 200,
  'show'   : 200,
  'sleep'   : 200,
  'something'   : 200,
  'sound'   : 200,
  'still'   : 200,
  'such'   : 200,

  'take'   : 200,
  'tell'   : 200,
  'think'   : 200,
  'thought'   : 200,
  'three'   : 200,
  'through'   : 200,
  'together'   : 200,
  'too'   : 200,

  'under'   : 200,
  'until'   : 200,
  'us'   : 200,

  'want'   : 200,
  'well'   : 200,
  'went'   : 200,
  'while'   : 200,
  'why'   : 200,
  'without'   : 200,
  'work'   : 200,
  'world'   : 200
}

module.exports = words;
words.stop = {
  // source: http://norm.al/2009/04/14/list-of-english-stop-words/
  // "This is the stop words list used by MySQL FullText feature"
  // a,able,about,across,after,all,almost,also,am,among,an,and,any,are,as,at,be,because,been,but,by,can,cannot,could,dear,did,do,does,either,else,ever,every,for,from,get,got,had,has,have,he,her,hers,him,his,how,however,i,if,in,into,is,it,its,just,least,let,like,likely,may,me,might,most,must,my,neither,no,nor,not,of,off,often,on,only,or,other,our,own,rather,said,say,says,she,should,since,so,some,than,that,the,their,them,then,there,these,they,this,tis,to,too,twas,us,wants,was,we,were,what,when,where,which,while,who,whom,why,will,with,would,yet,you,your
}