const choice = document.querySelectorAll(".button");
const board = document.getElementById("board");

let highlightedButton = [];
let correct = false;
const correctChoices = 0;

function select () {
    choice.forEach(button => {
        button.addEventListener("click", (event) => {
            const highlightedChoice = event.target;
            
            if (highlightedButton.length < 2) {
                highlightedChoice.style.border = "4px solid black";
                highlightedChoice.style.color = "black";
                highlightedButton.push(highlightedChoice);
                if (highlightedButton.length === 2) {
                    selected();
                }
            } else {
                highlightedButton.forEach(button => {
                    button.style.backgroundColor = "";
                    button.style.border = "";
                    button.style.color = "white";
                });
                
                
                highlightedButton = [];
            }
            
            button.disabled = true;
    });
})
};
    
function selected() {
    const [button1, button2] = highlightedButton;
    

    if (button1.textContent === button2.textContent) {
        correct = true;
        highlightedButton.forEach(button => {
            button.style.backgroundColor = "green";
        });
        if (correct) {
            highlightedButton = [];

        }
    } else {
        highlightedButton.forEach(button => {
            button.style.backgroundColor = "red";
        })
    };
    
    setTimeout(() => {
            highlightedButton.forEach(button => {
                button.style.backgroundColor = "";
                button.style.border = "";
                button.style.color = "white";
            });
            
            highlightedButton = [];
            correct = false; 
        }, 1000);

        highlightedButton.forEach(button => {
            if(button.style.backgroundColor === "green") {
                correctChoices++;
                 if (correctChoices === choice.length) {
                    alert("YOU HAVE WON!!!");
                }
            }}
            )
               
            

        let clicked = null;

        function clicks(button) {
            choice.forEach(button => {
            if (button.style.backgroundColor === "green") {
                button.disabled = true;
                return;
            } else if (button.style.backgroundColor === "red") {
                button.disabled = false;
            } else {
                clicked = null;
            }
            })
            }
        
        choice.forEach(button => {
            button.addEventListener("click", clicks(button))
        })
        
    }


const reset = document.getElementById("shuffle");
        
select();

function shuffle() {
    for (let i = board.children.length - 1; i >= 0; i--) {
        board.appendChild(board.children[Math.random() * i | 0]);  
    } 

}    
reset.addEventListener("click", () => {
    choice.forEach(button => {
        button.style.backgroundColor = "";
        button.style.border = "";
        button.style.color = "white";
        button.disabled = false;
    });
        highlightedButton = [];
        correct = false;
    });


reset.addEventListener("click", () => {
    shuffle();
});

shuffle();
