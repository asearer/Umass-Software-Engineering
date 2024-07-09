// Get the form, meme container, and remove button elements
        const memeForm = document.getElementById("meme-form");
        const memeContainer = document.getElementById("meme-container");
        const removeButton = document.getElementById("remove-button");
        const memes = []; // Array to store memes

        // Add event listener to the form
        memeForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get input values
            const urlInput = document.getElementById("url");
            const topTextInput = document.getElementById("top-input");
            const bottomTextInput = document.getElementById("bottom-input");

            const url = urlInput.value;
            const topText = topTextInput.value;
            const bottomText = bottomTextInput.value;

            // Clear input values
            urlInput.value = "";
            topTextInput.value = "";
            bottomTextInput.value = "";

            // Create meme object
            const meme = {
                url: url,
                topText: topText,
                bottomText: bottomText
            };

            // Add meme to the array
            memes.push(meme);

            // Clear meme container
            memeContainer.innerHTML = "";

            // Render all memes
            memes.forEach((meme, index) => {
                // Create meme container
                const memeContainerDiv = document.createElement("div");
                memeContainerDiv.classList.add("meme");

                // Create meme div
                const memeDiv = document.createElement("div");

                // Create image element
                const imageElement = document.createElement("img");
                imageElement.src = meme.url;

                // Create top text element
                const topTextElement = document.createElement("p");
                topTextElement.classList.add("top-text");
                topTextElement.textContent = meme.topText;

                // Create bottom text element
                const bottomTextElement = document.createElement("p");
                bottomTextElement.classList.add("bottom-text");
                bottomTextElement.textContent = meme.bottomText;

                // Append elements to meme div
                memeDiv.appendChild(imageElement);
                memeDiv.appendChild(topTextElement);
                memeDiv.appendChild(bottomTextElement);

                // Append meme div to container
                memeContainerDiv.appendChild(memeDiv);

                // Append meme container to main meme container
                memeContainer.appendChild(memeContainerDiv);
            });
        });

        // Add event listener to the remove button
        removeButton.addEventListener("click", function () {
            if (memes.length > 0) {
                memes.pop(); // Remove last meme from the array

                // Clear meme container
                memeContainer.innerHTML = "";

                // Render remaining memes
                memes.forEach((meme, index) => {
                    // Create meme container
                    const memeContainerDiv = document.createElement("div");
                    memeContainerDiv.classList.add("meme");

                    // Create meme div
                    const memeDiv = document.createElement("div");

                    // Create image element
                    const imageElement = document.createElement("img");
                    imageElement.src = meme.url;

                    // Create top text element
                    const topTextElement = document.createElement("p");
                    topTextElement.classList.add("top-text");
                    topTextElement.textContent = meme.topText;

                    // Create bottom text element
                    const bottomTextElement = document.createElement("p");
                    bottomTextElement.classList.add("bottom-text");
                    bottomTextElement.textContent = meme.bottomText;

                    // Append elements to meme div
                    memeDiv.appendChild(imageElement);
                    memeDiv.appendChild(topTextElement);
                    memeDiv.appendChild(bottomTextElement);

                    // Append meme div to container
                    memeContainerDiv.appendChild(memeDiv);

                    // Append meme container to main meme container
                    memeContainer.appendChild(memeContainerDiv);
                });
            }
        });