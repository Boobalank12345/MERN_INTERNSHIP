<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Shopping List App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h1 {
            color: #2c3e50;
        }
        .category {
            margin-top: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
            background-color: #f9f9f9;
        }
        ul {
            list-style-type: none;
            padding-left: 0;
        }
        li {
            display: flex;
            justify-content: space-between;
            margin: 5px 0;
        }
        .actions {
            display: flex;
            gap: 5px;
        }
        input[type="text"] {
            padding: 8px;
            width: 200px;
            margin-right: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        select {
            padding: 8px;
            margin-right: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            padding: 8px 12px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #2980b9;
        }
        .update-btn {
            background-color: #f39c12;
        }
        .update-btn:hover {
            background-color: #e67e22;
        }
        .delete-btn {
            background-color: #e74c3c;
        }
        .delete-btn:hover {
            background-color: #c0392b;
        }
    </style>
</head>
<body>
    <h1>Shopping List App</h1>

    <div>
        <input type="text" id="itemInput" placeholder="Enter item">
        <select id="categorySelect">
            <option value="Groceries">Groceries</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
        </select>
        <button onclick="addItem()">Add Item</button>
    </div>

    <div id="categoriesContainer"></div>

    <script>
        const categoriesContainer = document.getElementById('categoriesContainer');
        const categories = {};

        function addItem() {
            const itemInput = document.getElementById('itemInput');
            const categorySelect = document.getElementById('categorySelect');
            const itemName = itemInput.value.trim();
            const categoryName = categorySelect.value;

            if (itemName === '') {
                alert('Please enter an item name!');
                return;
            }

            if (!categories[categoryName]) {
                categories[categoryName] = [];
                renderCategory(categoryName);
            }

            categories[categoryName].push(itemName);
            itemInput.value = '';
            renderItems(categoryName);
        }

        function renderCategory(categoryName) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'category';
            categoryDiv.id = `category-${categoryName}`;
            categoryDiv.innerHTML = `
                <h3>${categoryName}</h3>
                <ul id="list-${categoryName}"></ul>
            `;
            categoriesContainer.appendChild(categoryDiv);
        }

        function renderItems(categoryName) {
            const list = document.getElementById(`list-${categoryName}`);
            list.innerHTML = '';

            categories[categoryName].forEach((item, index) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>${item}</span>
                    <div class="actions">
                        <button class="update-btn" onclick="updateItem('${categoryName}', ${index})">Update</button>
                        <button class="delete-btn" onclick="deleteItem('${categoryName}', ${index})">Delete</button>
                    </div>
                `;
                list.appendChild(li);
            });
        }

        function updateItem(categoryName, index) {
            const newItem = prompt('Update item:', categories[categoryName][index]);
            if (newItem !== null && newItem.trim() !== '') {
                categories[categoryName][index] = newItem.trim();
                renderItems(categoryName);
            }
        }

        function deleteItem(categoryName, index) {
            categories[categoryName].splice(index, 1);
            if (categories[categoryName].length === 0) {
                delete categories[categoryName];
                document.getElementById(`category-${categoryName}`).remove();
            } else {
                renderItems(categoryName);
            }
        }
    </script>
</body>
</html>
