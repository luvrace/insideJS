let arr = [];

//text 객체
function Text(text){
    this.text = text;
    this.date = new Date();
    this.visible = true;
    this.edit = false;
}

//객체 생성
function createText(text){
    return new Text(text);
}

//생성된 댓글 추가
function addArrText(text){
    arr.push(createText(text));
}

//댓글 전체리스트 가져오기
function getArr(arr){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]['visible']!=false){
        console.log(`${i}번 : ${arr[i]['text']}`);
        }
    }
}

//댓글 수정
function editText(index,text){
    arr.splice(index,1,new Text(text));
}


//댓글 삭제(안보이게 처리)
function deleteText(index){
    arr[index]['visible'] = false;
}

//댓글 아예삭제
function deleteAll(index){
    arr.splice(index,1);
}

