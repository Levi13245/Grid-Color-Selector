document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById("grid").getElementsByTagName("tbody")[0];
    const colorPicker = document.getElementById("colorPicker");

    // Function to update the color picker button's background
    function updateColorPickerStyle() {
        colorPicker.style.backgroundColor = colorPicker.value;
    }

    // Update color picker style when user picks a color
    colorPicker.addEventListener("input", updateColorPickerStyle);

    // Add a new row with the current number of columns
    document.getElementById("addRow").addEventListener("click", function () {
        let row = grid.insertRow();
        let cols = grid.rows[0]?.cells.length || 5; // Default 5 columns if empty
        for (let i = 0; i < cols; i++) {
            let cell = row.insertCell();
            cell.style.backgroundColor = "white";
        }
    });

    // Add a new column to each existing row
    document.getElementById("addColumn").addEventListener("click", function () {
        for (let row of grid.rows) {
            let cell = row.insertCell();
            cell.style.backgroundColor = "white";
        }
    });

    // Remove the last row
    document.getElementById("removeRow").addEventListener("click", function () {
        if (grid.rows.length > 0) {
            grid.deleteRow(-1);
        }
    });

    // Remove the last column
    document.getElementById("removeColumn").addEventListener("click", function () {
        for (let row of grid.rows) {
            if (row.cells.length > 0) {
                row.deleteCell(-1);
            }
        }
    });

    // Click to change a cell’s color
    grid.addEventListener("click", function (event) {
        if (event.target.tagName === "TD") {
            event.target.style.backgroundColor = colorPicker.value;
        }
    });

    // Color all uncolored cells
    document.getElementById("colorUncolored").addEventListener("click", function () {
        for (let row of grid.rows) {
            for (let cell of row.cells) {
                if (cell.style.backgroundColor === "white" || !cell.style.backgroundColor) {
                    cell.style.backgroundColor = colorPicker.value;
                }
            }
        }
    });

    // Color all cells
    document.getElementById("colorAll").addEventListener("click", function () {
        for (let row of grid.rows) {
            for (let cell of row.cells) {
                cell.style.backgroundColor = colorPicker.value;
            }
        }
    });

    // Clear the grid
    document.getElementById("clearGrid").addEventListener("click", function () {
        for (let row of grid.rows) {
            for (let cell of row.cells) {
                cell.style.backgroundColor = "white";
            }
        }
    });

    // Initialize color picker style on page load
    updateColorPickerStyle();
});

