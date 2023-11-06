const draggableItems = document.querySelectorAll('.draggable');
        const dropTargets = document.querySelectorAll('.droptarget');
        const resultSpan = document.getElementById('resultSpan');

        let correctItems = ["Barcelona", "1899", "Camp Nou"];
        let userItems = [];

        draggableItems.forEach(item => {
            item.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text', e.target.id);
            });
        });

        dropTargets.forEach(target => {
            target.addEventListener('dragover', (e) => {
                e.preventDefault();
            });

            target.addEventListener('drop', (e) => {
                e.preventDefault();
                const data = e.dataTransfer.getData('text');
                const draggableItem = document.getElementById(data);

                if (target.childNodes.length === 0) {
                    target.appendChild(draggableItem);
                    userItems.push(draggableItem.textContent);
                }
            });
        });

        function checkResult() {
            if (JSON.stringify(userItems) === JSON.stringify(correctItems)) {
                resultSpan.textContent = "Correct! You placed the items in the right order.";
            } else {
                resultSpan.textContent = "Incorrect. Try again.";
            }
        }