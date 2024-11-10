//Javascript->tootsoolol hiih
//variable/huvisagch->ugugdul hadgalna
//if else->nuhtsul shalgah/tentsu bnu,ih bnu,baga bnu
//for->neg uildeliig olon davtah uyd
//function->olon kodnii tsugluulga/dahij ashiglah bolomjtoi
//massive/array->[],index/olon utga zereg hadgalah
//object->{},key:value
//api->tusgai beldsen datag holboh
//.innerText->tag dotorh ugiig oorcloh
//document->html deerh buh kod
//html,css->text zurag gargaj irne
//addEventListener->websited hiigdeh uildel
const questionEl=document.querySelector('.question');
const result=document.querySelector('.result');
const choiceEl=document.querySelector('.choice');
const nextBtn=document.querySelector('.next');
//
let quizData=[
	{
		"question":"Who is maknae of Enhypen?",
		"choice":["Heeseung","Jungwon","Niki","Jake"],
		"answer":"Niki",
	},
	{
		"question":"Who is visual of Enhypen?",
		"choice":["Jake","Jay","Sunghoon","Sunoo"],
		"answer":"Sunghoon",
	},
	{
		"question":"Who is oldest of Enhypen?",
		"choice":["Heeseung","Sunghoon","Sunoo","Jay"],
		"answer":"Heeseung",
	},
	{
		"question":"When is debut for Enhypen?",
		"choice":["2022","2019","2021","2020"],
		"answer":"2020",
	},
];
let now=0;
let count=0;
console.log(quizData[0].question);
function display(){
	questionEl.innerText=quizData[now].question;
	quizData[now].choice.forEach(data=>{
		console.log(data);
		let btn=document.createElement('button');
		btn.innerText=data;
		console.log(btn);
		choiceEl.append(btn);
		btn.addEventListener('click',()=>checkAnswer(data));
	});
}
function checkAnswer(data){
	console.log(data);
	if(data==quizData[now].answer){
		result.innerText="Correct!";
		count++;
	}else{
		result.innerText="Wrong!Answer is "+quizData[now].answer;
	}																											
}
nextBtn.addEventListener('click',()=>{
	questionEl.innerText="";
	result.innerText="";
	choiceEl.innerHTML="";
	now++;
	if(now==quizData.length){
		result.innerText="Done! You score is "+count+"/"+quizData.length;
		nextBtn.style.display="none";
	}else{
		display();
	}
});
display();