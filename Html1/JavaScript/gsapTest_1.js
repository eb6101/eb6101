const tl = gsap.timeline({ repeat:2 , yoyo:true });

tl.from( ".ball" , {
    duration: 2,
    // y : () => Math.random() * -300 + 200 ,
    delay: .5,
    y: "random(-200 , 200)",
    opacity: 0,
    stagger: 0.25,
});

//获取
// var myObject = {rotation: 0};
// gsap.to(myObject , {
//     duration: 20,
//     rotation: 360,
//     // onUpdate: function() {
//     //     console.log(myObject.rotation);
//     // }
// })

