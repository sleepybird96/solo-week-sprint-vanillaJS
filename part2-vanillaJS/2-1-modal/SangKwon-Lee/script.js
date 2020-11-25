// your code here
const btn = document.querySelector('#btn')
const checkbtn = document.querySelector('#checkbtn')
const ul = document.querySelector('#contents')
const list = document.querySelector('.list')
const user = document.querySelector('.user') 
const name = document.querySelector('.ul') 
const li = document.querySelector('.list') 
const user1 = document.querySelector('.uesr1') 
const arr = [];
const backbtn = document.querySelector('#gobackbtn') 
backbtn.style['display'] ='none'

// 기존 트윗 설정 //
function printComments(){
    DATA.forEach(printComment);
}

function printComment(comment){
    const commentElement = makeContentsElement(comment);
    const readingArea = ul;
    readingArea.appendChild(commentElement);
}

function makeContentsElement(comment){

const liEl = document.createElement('li');
const usernameEl = document.createElement('p');
const commentEl = document.createElement('p');
const timeEl = document.createElement('span');


liEl.classList.add('list') 
usernameEl.classList.add('name')
commentEl.classList.add('comment')
timeEl.classList.add('time')

usernameEl.textContent = comment.user
commentEl.textContent= comment.message
timeEl.textContent = comment.created_at


usernameEl.addEventListener('click', nameFilter )

liEl.appendChild(usernameEl);
liEl.appendChild(commentEl);
liEl.appendChild(timeEl);
return liEl;
}
console.log(printComments());

///----------------새로운 트윗 작성 ------------------///
btn.onclick= newTweet

function newTweet(){
  
  let newTweet = {}; // 빈 객체로 설정

  const userName = document.querySelector('#username').value
  const userComment = document.querySelector('#comment').value
  const userDate = new Date().format();

  newTweet.user = document.querySelector('#username').value
  newTweet.message = document.querySelector('#comment').value
  newTweet.created_at = new Date().format();

    if(userName !== '' && userComment !== ''){
      DATA.unshift(newTweet);
      //DATA[0] 번째로 새로 작성한 트윗의 내용이 들어감.
      printComment(DATA[0]);
    } else {
        alert('입력해주세요!')
        document.querySelector("#userName").focus();
    }
}


///----------------랜덤 트윗 작성------------------///
checkbtn.addEventListener("click", generateNewTweet1)

function generateNewTweet1 () {
  DATA.unshift(generateNewTweet());
  printComment(DATA[0]);
  console.log(DATA)
}







//// 필터링 과정

 function nameFilter() {
  
  btn.style['display'] = 'none'
    backbtn.style['display'] = 'inline'
  const PName = event.target.innerText

  // if(event.target.innerText !== 1)

  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
}
// 얘가 필터를 2번 적용하게 가능함 //
 if(arr.length !== 0) {
  for(let i = 0; i <= arr.length; i++) {
    arr.shift()
  } 
  arr.shift()
 }
  for( let i = 0; i < DATA.length; i++ ) {
      if ( DATA[i]['user'] === PName ) {
        arr.push(DATA[i])
      }
    }
    arr.forEach(printComment)
  }

////////// go back 버튼

  backbtn.addEventListener('click', back);

  function back () {
    btn.style['display'] = 'inline'
    backbtn.style['display'] = 'none'
    printComments();
  }




// 모달과 버튼 지정 //
let modal = document.getElementById("myModal");
let btn2 = document.getElementById("modal_btn");

// 열기 버튼 //
btn2.onclick = function() {
    modal.style.display = "block";
}

// 닫기 버튼 //
let span = document.getElementsByClassName("close")[0];   
span.onclick = function() {
    modal.style.display = "none";
}