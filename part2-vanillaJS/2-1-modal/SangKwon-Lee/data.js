var DATA = [
  { user: 'GOD지상', message: '내가 누구? 코딩의 신.', created_at: '2020-11-19 12:30:20' },
  { user: '보경꾸', message: '클라이밍이 하고 싶다 이말이야', created_at: '2020-11-20 18:30:20' },
  { user: '효주호주', message: '짜증나게 좀 하지 마요', created_at: '2020-11-21 07:30:20' },
  { user: '택택', message: 'ㄱ?', created_at: '2020-11-22 12:30:20' },
  { user: '코공이', message: '코공이로 놀러오세요', created_at: '2020-11-23 18:30:20' }
];

var randomUser = ['GOD지상', '보경꾸', '효주호주', '택택', '코공이', '와니완'];
var randomMessage = [
  '공자가 말하길, “군자는 그의 말이 행동을 넘어서는 것을 부끄러워한다.”',
  '공자가 말하길, “지위가 없음을 걱정하지 말고 그 자리에 설 수 있는 능력을 갖추기를 걱정해야 하며, 자기를 알아주지 않는 것을 걱정하지 말고 남이 알아줄 만하게 되도록 노력해야 한다.',
  '자하가 말하였다. “군자에게는 세 가지 변화가 있다. 그를 멀리서 바라보면 위엄이 있고, 가까이서 대해 보면 온화하며, 그의 말을 들어보면 옳고 그름이 분명하다.”',
  '공자가 말하길, 어찌할까 어찌할까 하며 고민하고 노력하지 않는 사람이라면, 나도 정말 어찌할 수가 없다.',
  '공자가 말하길, 배움이란 도달할 수 없을 것 같이 하고 배운 것은 잃어버릴까 두려운 듯이 해야 한다.',
  '공자가 말하길, 자기가 하기 싫은 것을 남에게 시키지 말라.',
  '자공이 묻기를, "자장과 자하 중에 누가 더 낫습니까?" 공자가 답하길, "자장은 재주가 너무 많고 자하는 조금 부족해 못 미치는 것과 같다." 자장이 묻기를, "그러면 자장이 더 낫습니까?" 공자가 답하길, "지나치는 것은 또한 모자라는 것과 같다."',
  '번지가 인에 대해 물었다. 공자가 말하길, "사람을 사랑하는 것이다." 번지가 지혜에 대해 물었다. 공자가 답하길 "사람을 아는 것이다."',
  '공자가 말하길, "자로야, 안다는 것이 무엇인지 가르쳐주겠다. 아는 것은 안다고 하고, 모르는 것은 모른다고 하는 것. 그게 아는 것이다."',
  '공자가 말하길, "정직한 사람, 약속을 잘 지키는 사람, 박학다식한 사람, 이런 친구는 도움이 되고, 잔꾀에 밝은 사람, 겉과 속이 다른 사람, 입만 살아 있는 사람, 이런 친구는 사귀면 손해다.'
]

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateNewTweet() {
  var tweet = {};
  tweet.user = randomUser[getRandomInt(0, randomUser.length)];
  tweet.message = randomMessage[getRandomInt(0, randomMessage.length)];
  tweet.created_at = new Date().format();
  return tweet;
}

Number.prototype.padLeft = function() {
  if(this < 10) {
    return '0' + String(this);
  }
  else {
    return String(this);
  }
}

Date.prototype.format = function() {
  var yyyy = this.getFullYear();
  var month = (this.getMonth() + 1).padLeft();
  var dd = this.getDate().padLeft();
  var HH = this.getHours().padLeft();
  var mm = this.getMinutes().padLeft();
  var ss = this.getSeconds().padLeft();

  var format = [yyyy, month, dd].join('-') + ' ' + [HH, mm, ss].join(':');
  return format;
}