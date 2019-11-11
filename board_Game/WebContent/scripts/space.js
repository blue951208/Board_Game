/**
 * 
 */



	let space = function(gamer){//--------------------select 클릭
		console.log(gamer);
			//선택한 값을 받아온다
			gamer.afterPoint = $("#trip option:selected").val();//select에서 선택한 option에 값을 afterPoint에 저장
			console.log("이동할 장소",gamer.afterPoint);//확인
			//위치 조건
			if(gamer.afterPoint<31 || gamer.afterPoint>0){
				gamer.round += 1;
				gamer.money = gamer.money + 200000;	//---------------월급			
				console.log("우주money : ",gamer.money,"round Space:",gamer.round);
				
				$(person).empty();//비우고,
				$(person).text(gamer.money);//---------재산 출력
			}
			gamer.beforeId = "#pic31";
			gamer.afterId = "#pic"+gamer.afterPoint;
			console.log("이동할 위치 태그",gamer.afterId,"이동전 위치>:",gamer.beforeId);
		
			
			//주사위 돌리기 전 이미지 삭제
			$(gamer.beforeId).find(".player"+play).remove();
			//캐릭터 출력
			$(gamer.afterId).append("<input id='pl' class='player"+play+"' type= 'image' src='/board_Game/images/player"+play+".gif'>");
			
			//현재 위치를 주사위 돌리기 전으로 초기화해준다
			gamer.beforePoint = gamer.afterPoint;
			gamer.beforeId = "#pic"+gamer.beforePoint;
			console.log("after",gamer);
			 
				play += 1;	//-- 매 턴마다 돌아가게 한다
				if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
					play = play % player_number;
				}
				
		//버튼이랑 select hide
			$("#trip").hide();
			$("#gogo").hide();
			$("#move").show();
		
		};