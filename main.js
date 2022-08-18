// $('.color-option li').eq(0).css("backgroundColor","pink")
// $('.color-option li').eq(1).css("backgroundColor","blue")
// $('.color-option li').eq(2).css("backgroundColor","red")
// $('.color-option li').eq(3).css("backgroundColor","yellow")

// ان هنا لقيت في تكرار في الكود وان الارقام هي بس الي مختلفه ف كان ممكن نحل ده ب فور لوووب و كل مره نزود رقم
// المكشله كانت في اسماء الالوان ف ممكن نحليها ب اننا نعمل ااراااي و نحظ الاسماء جوا و نفووور لوووب عليها 


let bgColor = ["pink", "blue", "red", "yellow"]

for (i = 0; i < bgColor.length; i++) {
    $('.color-option li').eq(i).css("backgroundColor", bgColor[i])


}

// عايزه اما ادوس ع اللون الالوات بتاعت الخط تتغير 
// عملا كلاس اسمه كلر شانشج
// وجيت هنا عرفت متغير وخزنت فيه الوان 
// 

$('.color-option li').click(function () {
    let change = $(this).css("backgroundColor")
    $(".change-color").css("color", change)
})



// $('.color-box i').click(function(){
//    let x= $(".color-option").outerWidth()
//   $('.color-box').animate({'left':-x},2000)
// })

//  عايزه اعرف حجم المربع الي فيه الالوان عشان ادخله جوا
// ف استخدمت الاوتر وديذزز
// وخزنته ف قيمه متغيره 
// ثم هعمل انيميت بالسالب للمربع بتاع الالوان
// ف لقيت انه بيدخل بس اما ادوس ع الايقون مش بيحرج تاني ف حليت دى ب اف كونديشن 
// ف الشمال ب صفر يبقي هو المربع ظاهر ف اما ادوس خلي قيمته لالسالب و دخله 
// و لو قيمته بالسلب خليه بصفر

$('.color-box i').click(function () {
    let x = $(".color-option").outerWidth()
    if ($('.color-box').css('left') == '0px') {
        $('.color-box').animate({ 'left': -x }, 2000)

    }
    else {

        $('.color-box').animate({ 'left': 0 }, 2000)

    }
})
//  ------------------------------------------------------------------------------------------------------\
// السكرول 
// الناف بار عايزاه يتغير
// ف همسكه الاول
// في حاجه عندي اسمها اوفسيت دي بتحسب العرض و الطول بديلها الاى دي بتاع اي كان السيكشن وهي بترجع الابعاد
// لو عايزه الطول بس بقول دوت التووب
// /في حاجه في الكويري اسمها سكرول توب ده طوول منا بسكرول بيشوف البعد الي انا فيييه 

let off = $('#home').offset().top
//   console.log(off)/

$(window).scroll(function () {
    if ($(window).scrollTop() > off) {

        // $('.nav').css('backdroundColor','black')
        $('.nav').css({ 'backgroundColor': 'black', 'transition': '3s' });


    }
    else {
        $('.nav').css({ 'backgroundColor': 'transparent', 'transition': '3s' });

    }
    // console.log($(window).scrollTop())

})

// ----------***************--------------------**************-----------------------***************-------------

// عايزه اما ادوس ع اللينكات الي ف اول الصفحه تنقلني للسيكشن بتاعها 
// .attr('href') كدا انا ماسكه الاتربيوت الي اسمه اتش ريف الي جوا الانكور 
// $(this) عايده ع الكلاس الي انا عنده الي هو ناف ايتم اما ادوس اي حاجه واخده ناف ايتم امسك الاتربيوت السمه اتش ريف


$('.nav-item').click(function () {

    console.log(this);
    let chref = $(this).attr('href');
    console.log(chref);
    let offhref = $(chref).offset().top
    console.log(offhref)
    $('body,html').animate({ scrollTop: offhref }, 000)
})

// ---------************-------------------***************-------------------
// loading scren
$(document).ready(function(){
$('#loading').fadeOut(2000,function (){
    $('body').css('overflow','visible')
})

})


// --------------------*************************------------------------*************-------------------

// scrollTop  بتجيب بعد السكرول عن التوب قد اي
let up = $('#What').offset().top
console.log(up)

$(window).scroll(function () {
 
    if ($(window).scrollTop() >up -50) {
$('#iconup').fadeIn(1000)
       

    }
    else {
        $('#iconup').fadeOut(2000)


    }

})

$('#iconup').click(function(){

    $(window).scrollTop(0)
})