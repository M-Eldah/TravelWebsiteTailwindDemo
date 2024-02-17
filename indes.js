function selectDestination(id, path, credit) {
    console.log(id);
    const element = document.getElementsByClassName('selectedDestination');
    console.log(element);
    if (element.length > 0)
        element[0].classList.remove("selectedDestination")
    document.getElementById(id).classList.add('selectedDestination');
    document.getElementById("curtain").classList.add("bg-black");
    setTimeout(() => {
        document.getElementById("credit").innerText = credit;
        document.getElementById("backgroundimg").src = path;
        document.getElementById("curtain").classList.remove("bg-black");
    }, 1400)
}