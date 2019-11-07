/**
 * 
 */
	
	
	let	player1 = {
			who :1,
			afterPoint : 1,
			beforePoint : 1,
			beforeId : "#pic"+beforePoint,
			round : 0,
			condition : 0,
			money : 3000000
		}
	let	player2 = {
			who : 2,	
			afterPoint : 1,
				beforePoint : 1,
				beforeId : "#pic"+beforePoint,
				round : 0,
				condition : 0,
				money : 3000000
			}
	let	player3 = {
			who :3,
				afterPoint : 1,
				beforePoint : 1,
				beforeId : "#pic"+beforePoint,
				round : 0,
				condition : 0,
				money : 3000000
			}
	let	player4 = {
			who :4,
				afterPoint : 1,
				beforePoint : 1,
				beforeId : "#pic"+beforePoint,
				round : 0,
				condition : 0,
				money : 3000000
			}						

	//let Id;
	let dice =function(){
		//player 객체						
				if(play==1){//----------------------각 턴마다 player 객체를 지정
					gamer = player1;
					console.log("player1");
				}else if(play==2){
					gamer = player2;
					console.log("player2");
				}else if(play==3){
					gamer = player3;
					console.log("player3");
				}else if(play==4){
					gamer = player4;
					console.log("player4");
				}

				//------------------------------각 플레이어에 변수 설정
				console.log("before",gamer);
				console.log("player: ",play);
				gamer.beforePoint = gamer.afterPoint;
				firstDice = 0; 
				firstDice = Math.floor(Math.random()*6+1);//랜덤 출력 1~6
				 //--------------------------------------두번째 주사위
				secondDice = 0; 
				secondDice = Math.floor(Math.random()*6+1);//랜덤 출력 1~6
					//------------처음 받는 돈
		//-------------------------------------------------------------------주사위 돌리기 전,후		
				//주사위 출력
				$("#one").append("<input class='pic' type= 'image' src='/board_Game/images/"+firstDice+".jpg'>");
				$("#two").append("<input class='plc' type= 'image' src='/board_Game/images/"+secondDice+".jpg'>");
				
				
				let move = firstDice + secondDice;//--------------------------------이동한 칸  
				if(gamer.beforePoint==31 || gamer.beforePoint==11){//무인도랑 우주여행일때 이동 X
					move=0;
				}
				console.log("player",play,"move:",move);
				
				console.log("after Point+:",gamer.afterPoint);
				//주사위 돌린 후 위치 
				gamer.afterPoint = parseInt(gamer.beforePoint) + parseInt(move);

				console.log("after Point+++:",gamer.afterPoint); //118이 된다
				//-----------------------------------------------한바퀴 이상 돌았을때 
				if(gamer.afterPoint>40){//-----한 바퀴에 마지막이 40번째칸
					gamer.afterPoint = gamer.afterPoint % 40;//다시 1초 돌려준다
					gamer.money = gamer.money + 200000;	//---------------월급			
					console.log("money : ",gamer.money);
					gamer.round = gamer.round + 1;//각 한바퀴를 돌은 횟수
					console.log("round:",gamer.round);
					 
					$(person).empty();//비우고,
					$(person).text(gamer.money);//---------재산 출력
					console.log("player tag:",person);
					//console.log("money",gamer.money);
					
				}//-----------------------------------------------------------------------------------주사
				//주사위 둘리기 전 위치 태그
				gamer.beforeId = "#pic"+gamer.beforePoint; 
				//주사위 돌린 후 위치 태그
				afterId = "#pic"+gamer.afterPoint;
				
				//주사위 돌리기 전 이미지 삭제
				$(gamer.beforeId).find(".player"+play).remove();
				//캐릭터 출력
				$(afterId).append("<input id='pl' class='player"+play+"' type= 'image' src='/board_Game/images/player"+play+".gif'>");
				
				
				switch(gamer.afterPoint){// 위치에 따른 기능
				
				case 39:  //사회 복지 기금 15만원 지출 
						gamer.money -= 150000;
						console.log(gamer.money);
						$(person).empty();
						$(person).text(gamer.money);
						
						donate += 150000; //----기부금 추가
						$("#donate").empty();
						$("#donate").text("기부금액:"+donate);
						console.log("donate :",donate);
						//alert("기부 땡큐");
						//현재 위치를 주사위 돌리기 전으로 초기화해준다
						gamer.beforePoint = gamer.afterPoint;
						console.log("after",gamer);
						
						// if(firstDice != secondDice){
							play += 1;	//-- 매 턴마다 돌아가게 한다
							if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
								play = play % player_number;
							}
						 //}s
						
						break;
					 
				case 21: //사회 복지 단체 기부금 다 받음 
						gamer.money += donate;//-------기부금 추가
						console.log(gamer.money);
						$(person).empty();
						$(person).text(gamer.money);
				
						donate=0; //---------기부금 초기화
						$("#donate").empty();
						$("#donate").text("기부금액:"+donate);
						
						//현재 위치를 주사위 돌리기 전으로 초기화해준다
						gamer.beforePoint = gamer.afterPoint;
						console.log("after",gamer);
						
						if(firstDice != secondDice){
							play += 1;	//-- 매 턴마다 돌아가게 한다
							if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
								play = play % player_number;
							}
						 }
						break;
					
				case 11:	//무인도 도착
						console.log("무인도 도착");
						
						if(gamer.condition>2 || firstDice == secondDice){//3번 차례가 지나거나 ,주사위가 더블일때
						console.log("탈출이다!!!");
						console.log("탈출 전 지점",gamer);
						//afterPoint 지점 지정
						gamer.afterPoint = parseInt(gamer.afterPoint) + parseInt(firstDice) + parseInt(secondDice);
						console.log("탈출 후 지점",gamer);
						//현재 위치를 주사위 돌리기 전으로 초기화해준다
						gamer.beforeId = "#pic11";
						afterId = "#pic"+gamer.afterPoint;
						
						//주사위 돌리기 전 이미지 삭제
						$(gamer.beforeId).find(".player"+play).remove();
						//캐릭터 출력
						$(afterId).append("<input id='pl' class='player"+play+"' type= 'image' src='/board_Game/images/player"+play+".gif'>");
						gamer.beforePoint = gamer.afterPoint;
						
						console.log("after+-",gamer);
						
							play += 1;	//-- 매 턴마다 돌아가게 한다
							if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
								play = play % player_number;
							}
							break;
						}else{
							gamer.condition+=1;// 3될때까지
							console.log("무인도 도착",gamer.condition,"일")
							
							play += 1;	//-- 매 턴마다 돌아가게 한다
							if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
								play = play % player_number;
							}
							$("#move").show();
							break;
						}	
						break;	
				
				case 31:	//우주 정거장 도착,원하는 위치로 이동
						console.log("우주 여행");
						//값이 1이상일때는 주사위버튼 숨기기,select 보여주기
						if(gamer.condition>0){
							gamer.condition=0;
							//나라 메뉴 클릭
							$("#trip").show();
							$("#gogo").show();
							$("#move").hide();
							
						}
						//아니면 탈출
						else{
							//도착 했을때 값 추가
								gamer.condition += 1;
								gamer.beforePoint = gamer.afterPoint;//before Point 31로
								
								play += 1;	//-- 매 턴마다 돌아가게 한다
								if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
									play = play % player_number;
								}
							}
						console.log("else after",gamer);
							break;
			
				case 3:
				case 8:
				case 13:
				case 18:
				case 23:
				case 36: //-------------------------------황금 열쇠 칸
					console.log("황금 열쇠 ");
					$("#goldenBtn").show();
						$("#move").hide();
							break;
							
					default:	
						//땅 선택 select 출력 ,land.state 값 확인-->자신에 플레이 번호이거나 0이 아니면 -벌금 
						//if(land.state==0 || land.state==gamer.who){
						$("#where").show();
						/*}else{
							alert("통행료 지급 "+totalFee);
							gamer.money -= totalFee;
						}*/
						//현재 위치를 주사위 돌리기 전으로 초기화해준다
						gamer.beforePoint = gamer.afterPoint;
						console.log("after",gamer);
						
						if(firstDice != secondDice){
							play += 1;	//-- 매 턴마다 돌아가게 한다
							if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
								play = play % player_number;
							}
						 }
						break;
						
				}//----------switch End
				
			}
	
	//--------------------------------------------------------------------------------------------------------------------------------
			
		//---------------------------------------------------------------------여기까지 황금 카드
	
		