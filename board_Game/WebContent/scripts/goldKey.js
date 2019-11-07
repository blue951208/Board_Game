/**
 * 
 */



		let goldKey = function(){//황금 열쇠 기능 함수
					console.log(gamer);
					 random = 3;//Math.floor(Math.random()*29+0);
		             console.log("황금열쇠"+random);
		             alert(goldenKey[random]+"\r\n"+goldenKeymsg[random]+"\r\n"+goldenKeyeffect[random]) //O
		             //ISSUE: 이동하는 카드를 뽑으면 이동은 되지만, 다음 주사위를 굴릴때 전에 있던 위치에서 출발
		             switch(random){
		             	case 0:	//병원비 지불
		             		gamer.money = gamer.money - 50000;
		             		console.log(gamer.money);
		             		
		             		person = "#player"+play+"_money";
		             		console.log(person);
		            		$(person).empty();//비우고,
		    				$(person).text(gamer.money);//---------재산 출력

		    				if(firstDice != secondDice){
								play += 1;	//-- 매 턴마다 돌아가게 한다
									if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
										play = play % player_number;
									}
								}
		             		break;
		             	case 1:	//복권당첨
		             		gamer.money = gamer.money + 200000;
		             		console.log(gamer);
		             		
		             		console.log("몇번째 ",play);
		             		person = "#player"+play+"_money";
		             		$(person).empty();//비우고,
		            		$(person).text(gamer.money);//---------재산 출력

		    				if(firstDice != secondDice){
								play += 1;	//-- 매 턴마다 돌아가게 한다
									if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
										play = play % player_number;
									}
								}
		             		break;
		          /*   	case 2:	//무인도 탈출
		             		$(playItem).append("<button type='button' id='escape'>무인도탈출권</button>");
		             		
		             		if(firstDice != secondDice){
								play += 1;	//-- 매 턴마다 돌아가게 한다
									if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
										play = play % player_number;
									}
								}
		             		break;
		             		*/
		             	case 3: //무인도 ,3,8제외 모두 라운드 수와 월급 추가
			    	        
			    	          //주사위 돌리기 전 이미지 삭제
			    				$(afterId).find(".player"+play).remove();
			    				
			    				 gamer.afterPoint = 11;
				    	         afterId = "#pic"+gamer.afterPoint;
			    				//캐릭터 출력
			    				$(afterId).append("<input id='pl' class='player"+play+"' type= 'image' src='/board_Game/images/player"+play+".gif'>");
			    				
			    				//현재 위치를 주사위 돌리기 전으로 초기화해준다
			    				gamer.beforePoint = gamer.afterPoint;
			    				gamer.beforeId = "#pic"+gamer.beforePoint;
			    				console.log("after gold+",gamer);
			    				
			    				
									play += 1;	//-- 매 턴마다 돌아가게 한다
										if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
											play = play % player_number;
										}
								
		             		break;
		             		
		             	case 4: //파티초대권
			             		console.log("파티 초대권");

			             		if(firstDice != secondDice){
									play += 1;	//-- 매 턴마다 돌아가게 한다
										if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
											play = play % player_number;
										}
									}
		             		break;
		             		
		             	case 5: //관광여행(제주)
			             		if(gamer.afterPoint==3){
			             			console.log(gamer.afterPoint,"지점에 황금 카드 입니다")
			             			//3일때는 이동만 아니면 round수와 월급을 추가해준다.
			             			gamer.round += 1;
			             			gamer.money += 200000;
			             			
			             			person = "#player"+play+"_money";
			             			$(person).empty();//비우고,
				            		$(person).text(gamer.money);//---------재산 출력
			             		}
			             		gamer.afterPoint = 6;
			             		afterId = "#pic"+gamer.afterPoint;
		    	           		
			             		//주사위 돌리기 전 이미지 삭제
			    				$(gamer.beforeId).find(".player"+play).remove();
			    				//캐릭터 출력
			    				$(afterId).append("<input id='pl' class='player"+play+"' type= 'image' src='/board_Game/images/player"+play+".gif'>");
			    				
			    				//현재 위치를 주사위 돌리기 전으로 초기화해준다
			    				gamer.beforePoint = gamer.afterPoint;
			    				gamer.beforeId = "#pic"+gamer.beforePoint;
			    				console.log("after jeju_Trip+",gamer);

			    				if(firstDice != secondDice){
									play += 1;	//-- 매 턴마다 돌아가게 한다
										if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
											play = play % player_number;
										}
									}
		             		break;
		             		
		             	case 6: //과속운전벌금
			             		gamer.money -= 50000;
			             		console.log(gamer.money);

			             		person = "#player"+play+"_money";
		             			$(person).empty();//비우고,
			            		$(person).text(gamer.money);//---------재산 출력

			    				if(firstDice != secondDice){
									play += 1;	//-- 매 턴마다 돌아가게 한다
										if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
											play = play % player_number;
										}
									}
		    				break;
		    				//commit1
		             	case 7: //해외유학
			             		gamer.money -= 100000;
				             	console.log(gamer.money);
				             	
				             	person = "#player"+play+"_money";
		             			$(person).empty();//비우고,
			            		$(person).text(gamer.money);//---------재산 출력

			    				if(firstDice != secondDice){
									play += 1;	//-- 매 턴마다 돌아가게 한다
										if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
											play = play % player_number;
										}
									}
		             		break;
		             		
		             	case 8: //노후연금
			             		gamer.money += 50000;
			             		console.log(gamer.money);
			             		
			             		person = "#player"+play+"_money";
		             			$(person).empty();//비우고,
			            		$(person).text(gamer.money);//---------재산 출력
			            		
			    				if(firstDice != secondDice){
									play += 1;	//-- 매 턴마다 돌아가게 한다
										if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
											play = play % player_number;
										}
									}
		             		break;
		             		
		             	case 9: //이사(3칸 뒤로)
			             		gamer.beforeId = afterId ;
			             		console.log(gamer.beforeId);
			             		//주사위 돌리기 전 이미지 삭제
			    				$(gamer.beforeId).find(".player"+play).remove();
			    				
			    				//이동 지점 뒤로 3칸
			             		gamer.afterPoint -= 3;
			             		afterId = "#pic" + gamer.afterPoint;
			    				//캐릭터 출력
			    				$(afterId).append("<input id='pl' class='player"+play+"' type= 'image' src='/board_Game/images/player"+play+".gif'>");
			    				
			    				gamer.beforePoint = gamer.afterPoint;
			    				gamer.beforeId = "#pic"+gamer.beforePoint;
			    				console.log("이사 후",gamer)
			    				turn();
		             		break;
		             		
		             	case 10: // 고속도로
			             		afterPoint1 = 1;
			             		afterId = "#pic"+ gamer.afterPoint;
			             		//주사위 돌리기 전 이미지 삭제
			    				$(gamer.beforeId).find(".player"+play).remove();
			    				//캐릭터 출력
			    				$(afterId).append("<input id='pl' class='player"+play+"' type= 'image' src='/board_Game/images/player"+play+".gif'>");
			    				
			    				gamer.money = gamer.money + 200000;
			             		gamer.round += 1;
			             		console.log(gamer.money);
			             		
			             		person = "#player"+play+"_money";
		             			$(person).empty();//비우고,
			            		$(person).text(gamer.money);//---------재산 출력
			            		
			    				
			    				gamer.beforePoint = gamer.afterPoint;
			    				gamer.beforeId = "#pic"+gamer.beforePoint;
			    				console.log("황금 고속도로:",gamer);
			    				
		             		break;
		             		
		             	case 11: //우승
			             		gamer.money += 100000;
			             		console.log(gamer.money);
			             		
			             		person = "#player"+play+"_money";
		             			$(person).empty();//비우고,
			            		$(person).text(gamer.money);//---------재산 출력
			            		             		
			    			break;
			    		/*	
		             	case 12: //우대권
		             	*/	
		             	case 13: //항공여행(콩코드 -> 타이페이)
		             		//만약에 콩코드 여객기를 누군가 가지고 있으면 결제, 타이페이도 마찬가지로 결제
		             			gamer.afterPoint = 2;
		             			afterId = "#pic" + gamer.afterPoint;
		             			//주사위 돌리기 전 이미지 삭제
			    				$(gamer.beforeId).find(".player"+play).remove();
			    				//캐릭터 출력
			    				$(afterId).append("<input id='pl' class='player"+play+"' type= 'image' src='/board_Game/images/player"+play+".gif'>");
			    				
			    				gamer.beforePoint = gamer.afterPoint;
			    				gamer.beforeId = "#pic"+gamer.beforePoint;
			    				console.log("항공 여행 to 타이페이:",gamer);
			    				
		             		break;
		             /*		
		             	case 14: //건물수리비
		             		
		             		//플레이어가 가지고 있는 건물을 호텔, 빌딩 , 별장의 갯수만큼 아래 가격과 합산해서 결제
		             		//호텔--10만원  빌딩--6만원 별장--3만원
		             		
		             			console.log("건물 수리비");
		             		break;
		             		
		             	case 15: //방범비
		             			console.log("방범비");
		             		
		             		//호텔--5만원  빌딩--3만원 별장--1만원
		             		
		             		break;
		             		*/		
		             	case 16: //유람선여행(퀸엘리자베스-> 베이징)
		             			console.log("유람선 여행");
		             			gamer.afterPoint = 4;
		             			afterId = "#pic"+gamer.afterPoint;
		             			
		             			$(gamer.beforeId).find(".player"+play).remove();
			    				//캐릭터 출력
			    				$(afterId).append("<input id='pl' class='player"+play+"' type= 'image' src='/board_Game/images/player"+play+".gif'>");
			    				
			    				gamer.beforePoint = gamer.afterPoint;
			    				gamer.beforeId = "#pic"+gamer.beforePoint;
			    				console.log("유람선 여행 to 베이징:",gamer);
		             		break;
		             		//퀸엘리자베스호 결제, 베이징 결제
		             		
		             	case 17: //관광여행(부산)
			             		gamer.afterPoint = 26;
			    	            afterId = "#pic"+gamer.afterPoint;
			    	            
			    	            $(gamer.beforeId).find(".player"+play).remove();
			    				//캐릭터 출력
			    				$(afterId).append("<input id='pl' class='player"+play+"' type= 'image' src='/board_Game/images/player"+play+".gif'>");
			    				
			    				gamer.beforePoint = gamer.afterPoint;
			    				gamer.beforeId = "#pic"+gamer.beforePoint;
			    				console.log("관광여행 to 부산:",gamer);
		             		break;
		             		/*
		             		부산 결제
		             		*/
		             	case 18: // 생일 축하
		             		gamer.money = gamer.money + 10000; //(플레이어의 수-1) *10000
		             		console.log(playermoney);
		             		
		             		person = "#player"+play+"_money";
	             			$(person).empty();//비우고,
		            		$(person).text(gamer.money);//---------재산 출력
		            		
		             		break;
		             	case 19: //장학금 혜택
		             		playermoney = playermoney + 100000;
		             		console.log(playermoney);
		             		$("#money").val(playermoney);
		             		break;
		             	case 20: //종합소득세
		             		/*
		             		호텔-- 15만원  빌딩-- 10만원  별장--3만원
		             		플레이어가 가지고 있는 호텔 빌딩 별장수 만큼 결제
		             		*/
		             		break;
		             	case 21: //노벨평화상
		             		playermoney = playermoney + 300000;
		             		console.log(playermoney);
		             		$("#money").val(playermoney);
		             		break;
		             	case 22: //관광여행(서울)
		             		afterPoint1 = 40;
		    	            $("#point").val(afterPoint1);
		             		html = $("#player1");
		   	            beforeId1 = "#c"+beforePoint1;
		   	            afterId1 = "#c40";
		   	            $(afterId1).append(html);
		   	            $(beforeId1).find("#c"+beforePoint1).remove();
		   	            beforePoint1 = afterPoint1;
		   	            console.log(afterId1);
		             		break;
		             		/*
		             		서울에서 결제
		             		*/
		             	case 23: //반액대매출
		             		/*
		             		가지고 있는 곳 중에 건물가격 포함해서 가장 비싼 곳을 반값에 판매
		             		*/
		             		break;
		             	case 24: //우주여행 초청장
		             		afterPoint1 = 31;
		    	            $("#point").val(afterPoint1);
		             		html = $("#player1");
		   	            beforeId1 = "#c"+beforePoint1;
		   	            afterId1 = "#c31";
		   	            $(afterId1).append(html);
		   	            $(beforeId1).find("#c"+beforePoint1).remove();
		   	            beforePoint1 = afterPoint1;
		   	            console.log(afterId1);
		             		break;
		             	case 25: //우대권
		             		$("#playerItem").append("<button type='button' id='udae'>우대권</button>");
		             	case 26: //세계일주 초대권
		             		playermoney = playermoney + 200000;
		             		console.log(playermoney);
		             		$("#money").val(playermoney);
		             		break;
		             	case 27: //이사(뒤로 두칸)
		             		afterPoint1 = beforePoint1-2;
		    	            $("#point").val(afterPoint1);
		             		html = $("#player1");
		   	            beforeId1 = "#c"+beforePoint1;
		   	            afterId1 = "#c"+(beforePoint1-2);
		   	            $(afterId1).append(html);
		   	            $(beforeId1).find("#c"+beforePoint1).remove();
		   	            beforePoint1 = afterPoint1;
		   	            console.log(afterId1);
		             		break;
		             	case 28: //사회복지기금배당
		             		afterPoint1 = 39;
		    	            $("#point").val(afterPoint1);
		             		html = $("#player1");
		   	            beforeId1 = "#c"+beforePoint1;
		   	            afterId1 = "#c39";
		   	            $(afterId).append(html);
		   	            $(beforeId1).find("#c"+beforePoint1).remove();
		   	            beforePoint1 = afterPoint1;
		   	            console.log(afterId1);
		             		playermoney = playermoney - 150000;
		             		console.log(playermoney);
		             		$("#money").val(playermoney);
		             		break;
		             		/*
		             		15만원을 사회복지기금에 배당
		             		*/
		             	case 29: //반액대매출
		             		/*
		             		가지고 있는 곳 중에 건물가격 포함해서 가장 비싼 곳을 반값에 판매
		             		*/
		             		break;			
		             }
		             $("#goldenBtn").hide();
		             $("#move").show();
								}