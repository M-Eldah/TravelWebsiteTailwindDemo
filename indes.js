chaning = false;
function selectDestination(id, path, credit) {
    if (chaning === false) {
        chaning = true;
        const element = document.getElementsByClassName('selectedDestination');
        if (element.length > 0)
            element[0].classList.remove("selectedDestination")
        document.getElementById(id).classList.add('selectedDestination');
        document.getElementById("curtain").classList.add("bg-black");
        setTimeout(() => {
            document.getElementById("credit").innerText = credit;
            document.getElementById("backgroundimg").src = path;
            document.getElementById("curtain").classList.remove("bg-black");
            chaning = false;
        }, 1400)
    }

}