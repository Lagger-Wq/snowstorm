// //暗黑破坏神：不朽
window.onload = function () {

    var obj = document.getElementsByClassName("open");


    var n = 0;

    for (var i = 0; i < obj.length; i++) {
        obj[i].index = i;
        obj[i].parentNode.parentNode.style.height = "60px";

        obj[i].onclick = function () {

            n++;

            if (n == 1) {
                obj[this.index].parentNode.parentNode.style.height = "205px";
                console.log(n);
            } else if (n == 2) {
                obj[this.index].parentNode.parentNode.style.height = "60px";
                n = n - 2;
            }
        }
        console.log("ok");
    }



    var scrollToP = document.getElementById("reg");

    scrollToP.style.opacity = "0";

    window.onscroll = function () {
        var top = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollTop = document.getElementById("nav");

        var re = document.documentElement.scrollTop || document.body.scrollTop;

        console.log(top);
        if (top > 80) {
            scrollTop.style.backgroundColor = "rgba(0, 0, 0, .6)";
            scrollToP.style.opacity = "1";
        } else if (top < 80 || top == 0) {
            scrollTop.style.backgroundColor = "rgba(0, 0, 0, 0)";
            scrollToP.style.opacity = "0";
        }
    }
}