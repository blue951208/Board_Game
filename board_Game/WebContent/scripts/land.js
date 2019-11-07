/**
 * 
 */
	
			let ground = function(){//매게 변수로 afterId에 위치한 값에 나라를 불러온다
				//console.log(baijing);
				switch(gamer.afterPoint){ //도착한 위치에 나라 객체를 land로 복사
					case 2: 
						land = taipei;
						break;
					case 4:
						land = baijing;
						break;
					case 5:
						land = Manila;
						break;
					case 6:
						land = jeju;
						break;
					case 7:
						land = singapore;
						break;
					case 9:
						land = kairo;
						break;
					case 10:
						land = istanbul;
						break;
					case 12:
						land = atene;
						break;
					case 14:
						land = copenhagen;
						break;
					case 15:
						land = stockholm;
						break;
					case 16:
						land = concorde;
						break;
					case 17:
						land = bern;
						break;
					case 19:
						land = berlin;
						break;
					case 20:
						land = ottawa;
						break;
					case 22:
						land = buenos;
						break;
					case 24:
						land = saopaulo;
						break;
					case 25:
						land = sydney;
						break;
					case 26:
						land = busan;
						break;
					case 27:
						land = hawaii;
						break;
					case 28:
						land = lisbon;
						break;
					case 29:
						land = queenShip;
						break;
					case 30:
						land = madrid;
						break;
					case 32:
						land = tokyo;
						break;
					case 33:
						land = columbiaShip;
						break;
					case 34:
						land = paris;
						break;
					case 35:
						land = rome;
						break;
					case 37:
						land = london;
						break;
					case 38:
						land = newyork;
						break;
					case 40:
						land = seoul;
						break;
					} //switch 사용 위치한 땅 객체 설정, 
					//원하는 땅,빌딩,호텔 선택후 확인 클릭시
					console.log(land);
								

			}