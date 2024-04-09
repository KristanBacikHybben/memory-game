const choice = document.querySelectorAll(".button");
const board = document.getElementById("board");

let highlightedButton = [];
let correctChoices = [];

function select () {
    choice.forEach(button => {
        button.addEventListener("click", (event) => {
            const highlightedChoice = event.target;
            
            if (highlightedButton.length < 2) {
                highlightedChoice.style.border = "4px solid black";
                highlightedChoice.style.color = "black";
                highlightedChoice.disabled = true;
                highlightedButton.push(highlightedChoice);
                if (highlightedButton.length === 2) {
                    selected();
                }
            } else {
                highlightedButton.forEach(button => {
                    highlightedChoice.disabled = false;
                    button.style.backgroundColor = "";
                    button.style.border = "";
                    button.style.color = "white";
                });
                
                
                highlightedButton = [];
                button.disabled = true;
            }
            

    });
})
};
    
function selected() {
    const [button1, button2] = highlightedButton;
    

    if (button1.textContent === button2.textContent) {
        highlightedButton.forEach(button => {
            button.style.backgroundColor = "green";
            if(button.style.backgroundColor = "green") {
                button.disabled = true;
                button.style.backgroundColor = "green";
                button.style.color = "black";
                correctChoices.push(button)
            }
        });
        
    } else {
        highlightedButton.forEach(button => {
            button.style.backgroundColor = "red";
            if (button.style.backgroundColor = "red") {
                button.disabled = false;
            }
        })
    };
    
    setTimeout(() => {
        highlightedButton.forEach(button => {
            if (button.style.backgroundColor === "red") {
                button.style.backgroundColor = "";
                button.style.border = "";
                button.style.color = "white";
            }
        });

        highlightedButton = [];
        if (correctChoices.length === choice.length) {
            choice.forEach(button => {
                button.disabled = true;
            });
        }
    }, 150);
}
const reset = document.getElementById("shuffle");
        
select();

function shuffle() {
    for (let i = board.children.length - 1; i >= 0; i--) {
        board.appendChild(board.children[Math.random() * i | 0]);  
    }
    choice.forEach(button => {
        button.disabled = false;
    })
    

}

reset.addEventListener("click", () => {
    choice.forEach(button => {
        button.style.backgroundColor = "";
        button.style.border = "";
        button.style.color = "white";
        button.disabled = false;
    });
        highlightedButton = [];
    });


shuffle();