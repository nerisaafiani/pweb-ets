const apiUrl =
    "http://159.223.51.203/api/bio";

async function getData{
    fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let element = "";

            element = showElement(data);

            container.innerHTML = element;
    });
};

function showElement(data) {
    return ${data.name}, ${data.id};
}