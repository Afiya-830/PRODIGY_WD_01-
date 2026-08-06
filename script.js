window.onscroll = function()
{
    let nav = document.getElementById("navbar");

    if(window.scrollY > 50)
    {
        nav.style.backgroundColor = "black";
    }
    else
    {
        nav.style.backgroundColor = "blue";
    }
}