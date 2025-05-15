window.onload = () => {

    const transition_element_load = document.querySelector(".transition-load");
    const transition_element_leave = document.querySelector(".transition-leave");
    const anchors = document.querySelectorAll("a");

    if (document.readyState === "loading")
    {
        document.addEventListener("DOMContentLoaded", (event) => {
            transition_element_load.classList.remove("is-active");
        });
    }
    else {
        transition_element_load.classList.remove("is-active");
    }

    for (let i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener("click", e => {
            e.preventDefault();

            transition_element_leave.classList.add("is-active");
            
            setTimeout(() => {
                window.location.href = e.target.href;
            }, 300);

            setTimeout(() => {
                transition_element_leave.classList.remove("is-active");
            }, 1000);
        });
    }
}

