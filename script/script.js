//main-row1 카테고리 제목 글자 색 마우스 이벤트 변경
const category_a = document.querySelectorAll('.category a')
console.log(category_a)
for(let i of category_a){
    console.log(i)
    i.addEventListener('click',()=>{
        for(let j of category_a){
            j.style.background = 'rgba(255,255,255,0.8)'
            j.style.color = '#222'
        }
        i.style.background = '#ff5252'
        i.style.color = '#fff'
    })
    // i.addEventListener('mouseout',()=>{
    //     i.style.background = 'rgba(255,255,255,0.8)'
    //     i.style.color = '#222'
    // })
}

//main-video 안내, 사용방법 클릭 시 관련 내용 보이기
//초기 : 안내 기본 활성화 = 안내제목 밑줄, 안내 내용 보이기 /방법 순기기
//사용방법 클릭 =>방법제목밑줄/ 안내 숨기기 / 방법 보이기 
//안내 클릭 =>안내제목밑줄/ 안내 보이기 / 방법 숨기기
const video_t = document.querySelectorAll('#video .tab a')
const video_c = document.querySelectorAll('#video .tab_contents > div')
console.log(video_t, video_c)

//사용방법 내용 숨기기
video_c[1].style.display = 'none'

//안내, 사용방법 클릭한 대상에 밑줄 표시
//for(let i of video_t){}
video_t.forEach((i,index)=>{
    console.log(i, index)
    i.addEventListener('click',(event)=>{
        event.preventDefault()
        for(let j of video_t){
            j.style.border = 'none'
        }
        i.style.borderBottom = '6px solid #189bfa'
        //내용 추가 
        for(let j of video_c){j.style.display = 'none'}
        video_c[index].style.display = 'block'
    })
})



const menu_t = document.querySelectorAll('#menu .tab a')
const menu_c = document.querySelectorAll('#menu .tab_contents > div')
console.log(menu_t,menu_c)

for(let i of menu_c){i.style.display = 'none'}
menu_c[0].style.display = 'grid'

//main-row3 자주 사용하는 메뉴
//탭 제목 클릭 시 탭 활성화 디자인 적용하기(border)
//탭 제목 클릭 시 관련 탭 내용 보이기/나머지 숨기기
menu_t.forEach((target,index)=>{
    // console.log(value,index)
    target.addEventListener('click',(e)=>{
        e.preventDefault() //href 기능 막기
        for(let i of menu_t){i.style.borderBottom = '1px solid #222'}
        target.style.borderBottom = 'none'
        for(let j of menu_c){j.style.display = 'none'}
        menu_c[index].style.display = 'grid'
    })
})


