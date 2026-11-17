// Open / toggle description
const descriptionLink = document.getElementById("descriptionLink");
const description = document.getElementById("description");
const closeButton = document.getElementById("closeDescription");
const menu = document.getElementById("menu");

descriptionLink.addEventListener("click", (event) => {
    event.preventDefault();
    description.classList.toggle("hidden");
});

closeButton.addEventListener("click", () => {
    description.classList.add("hidden");
});


menu.addEventListener("click", (event) => {
    const link = event.target.closest("#menu-list a");
    if (link) description.classList.add("hidden");
}); 


async function loadReadme() {

    try {

        // Fetch README.md
        const response = await fetch("./README.md");

        if (!response.ok) {
            throw new Error("Could not fetch README.md");
        }

        const markdown = await response.text();

        // Convert Markdown to HTML
        const html = marked.parse(markdown);

        // Parse HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const elements = Array.from(doc.body.children);

        const content = document.querySelector("#content");
        const menuList = document.querySelector("#menu-list");

        let currentArticle = null;

        // Ignore everything before first H2
        elements.forEach(element => {

            if (element.tagName === "H2") {

                currentArticle = document.createElement("article");

                // Create ID from heading
                const id = element.textContent
                    .toLowerCase()
                    .trim()
                    .replace(/[^\w\s-]/g, "")
                    .replace(/\s+/g, "-");

                currentArticle.id = id;

                content.appendChild(currentArticle);

                // Create navigation item
                const li = document.createElement("li");
                const link = document.createElement("a");

                link.href = `#${id}`;
                link.textContent = element.textContent;

                li.appendChild(link);
                menuList.appendChild(li);
            }

            // Put heading and following content inside article
            if (currentArticle) {
                currentArticle.appendChild(element);
            }

        });

        setupMenu();

    } catch (error) {
        console.error("Error loading README:", error);
    }

}


// Hamburger menu functionality
function setupMenu() {

    const button = document.querySelector("#menu-button");
    const menu = document.querySelector("#menu");

    button.addEventListener("click", () => {

        const expanded = button.getAttribute("aria-expanded") === "true";

        button.setAttribute("aria-expanded", !expanded);
        menu.hidden = expanded;

        button.classList.toggle("active", !expanded);

    });

    // Close menu after clicking a link
    document.querySelectorAll("#menu a").forEach(link => {

        link.addEventListener("click", () => {

            menu.hidden = true;
            button.setAttribute("aria-expanded", "false");
            button.classList.remove("active");

        });

    });

}


loadReadme();
