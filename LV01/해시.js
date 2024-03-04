//Map을 통해 해쉬 테이블 생성
var hashMap = new Map();

//set함수를 통해 key, value 값 대입
hashMap.set("나이", 23);
hashMap.set("직업", "개발자");
hashMap.set("전화번호", "010-xxxx-xxxx");

//Map(3) { '나이' => 23, '직업' => '개발자', '전화번호' => '010-xxxx-xxxx' }
console.log(hashMap);
