async function loadReadme() {

    try {

        // Fetch README.md
        const response = await fetch("./README.md");

        if (!response.ok) {
            throw new Error("Could not fetch README.md");
        }

        // Read Markdown
        const markdown = await response.text();

        // Convert Markdown to HTML
        const html = marked.parse(markdown);

        // Parse HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const elements = Array.from(doc.body.children);

        let currentArticle = null;

        const output = document.createElement("div");

        elements.forEach(element => {

            // Start new article at every H2
            if (element.tagName === "H2") {
                currentArticle = document.createElement("article");
                output.appendChild(currentArticle);
            }

            // Ignore everything before first H2
            if (currentArticle) {
                currentArticle.appendChild(element);
            }

        });

        // Display articles
        document.querySelector("#content").innerHTML = output.innerHTML;

    } catch (error) {
        console.error("Error:", error);
    }

}

loadReadme();
