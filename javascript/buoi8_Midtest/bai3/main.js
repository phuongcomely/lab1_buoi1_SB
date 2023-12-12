document.addEventListener("DOMContentLoaded", function () {
    const navButtons = document.getElementById("navButtons");
    const resourceList = document.getElementById("resourceList");

    const listApi = {
        posts: "https://jsonplaceholder.typicode.com/posts",
        albums: "https://jsonplaceholder.typicode.com/albums",
        photos: "https://jsonplaceholder.typicode.com/photos",
    };

    let currentResource = "posts";
    selectApi();
    apiPost(currentResource);

    function selectApi() {
        Object.keys(listApi).forEach(resource => {
            const button = document.createElement("button");
            button.textContent = resource;
            button.addEventListener("click", async () => {
                currentResource = resource;
                await apiPost(resource);
                highlightActiveButton();
            });
            navButtons.appendChild(button);
        });
    }

    async function apiPost(resource) {
        try {
            const response = await fetch(listApi[resource]);
            const data = await response.json();
            displayResources(data);
        } catch (error) {
            console.error("Error fetching resources:", error);
        }
    }

    function displayResources(resources) {
        resourceList.innerHTML = "";
        resources.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item.title;
            resourceList.appendChild(listItem);
        });
    }

    function highlightActiveButton() {
        Array.from(navButtons.children).forEach(btn => btn.classList.remove("active"));
        document.querySelector(`#navButtons button:contains('${currentResource}')`).classList.add("active");
    }
});

// Polyfill for :contains selector
jQuery.expr[':'].contains = function(a, i, m) {
    return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
};