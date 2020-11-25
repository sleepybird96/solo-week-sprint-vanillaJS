// your code here

//
const inputedName = document.querySelector('.name')
const tweetedContents =document.querySelector('.tweet')
const tweetBtn = document.querySelector('.tweetbtn')
const comment = document.querySelector('#comment')
const checkNewBtn = document.querySelector('.getNewTweet')
const buttonBox = document.querySelector('#buttonBox')
const notice = document.querySelector('#notice')
const showNoticeBtn = document.querySelector('#showNoticeBtn')
const closeNoticeBtn = document.querySelector('#closeNoticeBtn')
const noticeBackground = document.querySelector('#noticeBackground')

function showNotice(){
  notice.style.display = 'block';
  noticeBackground.style.display = 'block';
}

showNoticeBtn.onclick = function(){
  notice.style.display = 'block';
  noticeBackground.style.display ='block';
}
closeNoticeBtn.onclick = function(){
  notice.style.display = 'none';
  noticeBackground.style.display ='none';
}

noticeBackground.onclick = function(){
  notice.style.display = 'none';
  noticeBackground.style.display = 'none'
}

setInterval(showNotice, 1000000);

//작성자가 쓴 글과 정보를 저장하는 데이터베이스를 만듭니다.
const database = []
let goBack = document.createElement('button')
goBack.textContent = '뒤로가기';
goBack.classList.add('goBack');
buttonBox.append(goBack);
goBack.style['display'] = 'none'

//사용자 이름을 토대로 필터링 합니다.
function filtering (str) {
  let filter = document.createElement('ul')

  checkNewBtn.style['display'] = 'none'
  goBack.style['display'] = 'inline'

  for(let namedata of database){
    if(str === namedata['user']){

      let newTweet = document.createElement('li');
      let date = document.createElement('span');
      let name = document.createElement('a');
      let nickname = document.createElement('strong');
      name.append(nickname);
      let contents = document.createElement('div');

      nickname.textContent = namedata['user']
      date.textContent = namedata['date']
      contents.textContent = namedata['message']

      newTweet.append(date);
      newTweet.append(name);
      newTweet.append(contents);

      filter.prepend(newTweet)
    }
  }
  comment.textContent = ''
  comment.append(filter);
}

//기본적으로 출력할 트윗을 화면에 출력합니다
function printDefaultTweet (){
  for(let tweet of DATA){
  let newTweet = document.createElement('li');
  let date = document.createElement('span');
  let name = document.createElement('a');
  let strongName = document.createElement('strong');
  name.append(strongName);
  let contents = document.createElement('div');

  strongName.textContent = tweet.user;
  date.textContent = tweet.created_at;
  contents.textContent = tweet.message;

  name.onclick = function (){
    return filtering(strongName.textContent)
  }
    


  //데이터베이스에 저장합니다.
  let dummyData = {}
  dummyData.user = strongName.textContent;
  dummyData.date = date.textContent;
  dummyData.message = contents.textContent;

  database.push(dummyData)

  newTweet.append(date);
  newTweet.append(name);
  newTweet.append(contents);

  comment.append(newTweet);
  }
}

//기본적으로 출력할 트윗은 미리 화면에 띄워줍니다.
printDefaultTweet();

function printNewTweet (){
  console.log('이름에다 입력한건' +':  ' + inputedName.value)
  console.log('커멘트에다 입력한건' + ':  '+ tweetedContents.value)

  if(inputedName.value === ''){
    return alert('이름을 입력하셔야해요!')
  }
  if(tweetedContents.value === ''){
    return alert('아무 내용이나 입력하셔야해요!')
  }

  let newTweet = document.createElement('li');
  let date = document.createElement('span');
  let name = document.createElement('a');
  let strongName = document.createElement('strong');
  name.append(strongName);
  let contents = document.createElement('div');

  date.textContent = getCurrentTimeAndDate ();
  strongName.textContent = inputedName.value;
  contents.textContent = tweetedContents.value;

  name.onclick = function (){
    return filtering(strongName.textContent)
  }

    //데이터베이스에 저장합니다.
  let dummyData = {}
  dummyData.user = strongName.textContent;
  dummyData.date = date.textContent;
  dummyData.message = contents.textContent;
  
  database.push(dummyData)

  newTweet.append(date);
  newTweet.append(name);
  newTweet.append(contents);

  comment.prepend(newTweet)

  tweetedContents.value = ''


}

//check new tweet 버튼을 누르면 랜덤으로 트윗을 출력합니다.
function printRandomTweet () {

  let tweet = generateNewTweet()

  let newTweet = document.createElement('li');
  let date = document.createElement('span');
  let name = document.createElement('a');
  let strongName = document.createElement('strong');
  name.append(strongName);
  let contents = document.createElement('div');

  newTweet.append(date);
  newTweet.append(name);
  newTweet.append(contents);

  strongName.textContent = tweet.user;
  date.textContent = tweet.created_at;
  contents.textContent = tweet.message

  name.onclick = function (){
    return filtering(strongName.textContent)
  }

  //데이터베이스에 저장합니다.
  let dummyData = {}
  dummyData.user = strongName.textContent;
  dummyData.date = date.textContent;
  dummyData.message = contents.textContent;
      
  database.push(dummyData)

  comment.prepend(newTweet);
}

//이전트윗을 다시불러와줍니다.

function printBeforeTweet () {
  comment.textContent = ''
  goBack.style['display'] = 'none'
  checkNewBtn.style['display'] = 'inline'
  for(let tweet of database){
    let newTweet = document.createElement('li');
    let date = document.createElement('span');
    let name = document.createElement('a');
    let strongName = document.createElement('strong');
    name.append(strongName);
    let contents = document.createElement('div');
  
    strongName.textContent = tweet.user;
    date.textContent = tweet.date;
    contents.textContent = tweet.message;
  
    name.onclick = function (){
      return filtering(strongName.textContent)
    }
  
    newTweet.append(date);
    newTweet.append(name);
    newTweet.append(contents);
  
    comment.prepend(newTweet);
    }
}

//tweetBtn버튼이 클릭될때 pressTweetBtn함수가 실행된다.
tweetBtn.onclick = printNewTweet;
// 랜덤트윗을 불러옵니다
checkNewBtn.onclick = printRandomTweet;

goBack.onclick = printBeforeTweet;

// DATA는 이미 작성된 트윗을 표시합니다.
console.log(DATA)

// generateNewTweet을 호출할 때마다 새로운 트윗을 생성합니다.
console.log(generateNewTweet());


