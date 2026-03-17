let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let currentDay = 0;  
let score = 0;              

//If you need, add any "helper" functions here
function printAscii(art) {
    const output = document.getElementById('output');
    const pre = document.createElement('pre');
    pre.className = 'ascii-art';
    pre.textContent = art;
    output.appendChild(pre);
    output.scrollTop = output.scrollHeight;
}
function labStations() {
    clear();
    print("\nYou walked into the Culinary Arts classroom! Chef greets you and tells you to go change into your uniform.");
    printAscii(`:-)`);
    print("\nHead to the changing rooms: \n\tType <b>Locker Room</b>");

    function processInput(input) {
        if (input === "locker room") {
            lockerRoom();
        } else {
            waitForInput(processInput);
        }
    }
    waitForInput(processInput);
}
function lockerRoom() {
    clear();
    print("\nYou are in the locker room! You see some of your classmates and greet them. Then, you change into your uniform. Do not forget your chef hat!");
    print("\nNow that you are changed, choose whether you want to go to <b>wash your hands in the bathroom</b> or if you want to go <b>pick up an apron from the lab station</b>.");
    print("\n\t<b>Bathroom</b>\n\t<b>Pick up apron</b>");

    function processInput(input) {
        if (input === "bathroom") {
            bathroomO();
        } else if (input === "pick up apron") {
            labStationS();
        } else {
            waitForInput(processInput);
        }
    }
    waitForInput(processInput);
}
function bathroomO() {
    clear();
    print("\nYou are in the bathroom. You can wash your hands and then go grab your apron at the lab stations to get started with the preparation.");
    print("\nHead to the lab stations: \n\t<b>Lab Stations</b>");

    function processInput(input) {
        if (input === "lab stations") {
            labStationS();
        } else {
            print("\nYou need an apron to continue the game. Go get it!");
            waitForInput(processInput);
        }
    }
    waitForInput(processInput);
}

function labStationS() {
    clear();
    print("\nYou have your apron. Now you are ready to get started! Wait here until Chef gives instructions. Type <b>Wait for Chef</b>.");

 function processInput(input) {
        if (input === "wait for chef") {
print("\nChef is getting ready to explain Stage 1.");
             print("\nType <b>Enter</b> to listen to the instructions.");
             waitForInput(function() {
                 stage1(); 
             });
         }  else {
             print("\nWait for Chef before you start!");
             waitForInput(processInput);
         }
     }
     waitForInput(processInput);
 }

let inventory = [];
function stage1() {
    clear();
    print("<h2>Stage 1<h2>");
    print("\nChef: Everyone, gather your room-temp ingredients at the lab station.");
    print("\n Type <b>Lab Station</b>");
    function processInput(input) {
        if (input === "lab station") {
printAscii (`

            .-----.--,
           (______(_. \ _
            /     /   || |
           :     /    ||_|
           | .---------/|\-.      _.-----,
           | :'-------'-'-':       |   = |-.
 ___.--------:___          : _  _  |   = |-'
'--.)________).--'______.-' (_)(_) :_____:  ldb
------------------------------------------------
`);   

         print("\nYou gathered the flour, sugar, eggs, and vanilla. Everything is ready! Once you have your batter prepared, head to the oven area to bake the cake!.");
            inventory.push("batter");
            print("\n\tType<b> Oven area</b>");
            waitForInput(function(cmd) {
                if (cmd === "oven area") {
                    ovenArea();
                } else {
                    waitForInput(arguments.callee);
                }
            });
        } else {
            waitForInput(processInput);
        }
    }
    waitForInput(processInput);
}

function ovenArea() {
    clear();
    print("<b>Oven Area</b>");
    print("\nThe cake is in the oven! Do not worry, it will only take 25 minutes to bake.");
    print("\nWhile it bakes, you have a choice of either:");
    print("\n\tGo to the <b>dish room</b> to wash dishes.");
    print("\n\tGo to the <b>walking in fridge</b> to choose a filling.");
print("\n Type the one you choose.");
    function processInput(input) {
        if (input === "dish room") {
            dishRoom();
        } else if (input === "walking in fridge") {
            walkingInFridge();
        } else {
            waitForInput(processInput);
        }
    }
    waitForInput(processInput);
}

function dishRoom() {
    clear();
    print("<b>Dish Room</b>");
    print("\nYou scrub the bowls and whisks. Your station is clean and you are working faster than anyone else!");
    print("\nWhile you were washing the dishes, the cake finished baking and Chef nicely took it out so now it is cooling.");
    inventory.push("cake_cooled");
    print("\nNow, head to the walk-in fridge to pick your filling flavor.");
  print("\n\t Type<b> Walking in fridge</b>");  
  waitForInput(function(input) {
        if (input === "walking in fridge") {
            walkingInFridge();
        } else {
            waitForInput(arguments.callee);
        }
    });
}

function walkingInFridge() {
    clear();
	print("\n <h2>Stage 2</h2>");
    print("You are in the walk-in fridge!");
    print("\nGo ahead and choose your filling flavor: \n- Chocolate Ganache \n- Berry Compote \n- Cream Caramel");

    function processInput(input) {
        let flavors = ["chocolate ganache", "berry compote", "cream caramel"];
        if (flavors.includes(input)) {
            inventory.push(input);
            print("\nYou selected " + input + "!");
            
            if (inventory.includes("cake_cooled")) {
                print("\nSince you did the dishes first, the cake is cool and ready to fill!");
                print("\n Type <b>Lab Station</b>.");
                waitForInput(function(cmd) {
                    if (cmd === "lab station") stage3();
                    else waitForInput(arguments.callee);
                });
            } else {
                print("\nChef: Nope, the cake is too warm to fill and you will mess it up if you slice it open.");
                print("\nYou can go and wash your disheso to the <b>dish room</b> and wait for the cake to cool down.");
                waitForInput(function(cmd) {
                    if (cmd === "dish room") dishRoom();
                    else waitForInput(arguments.callee);
                });
            }
        } else {
            waitForInput(processInput);
        }
    }
    waitForInput(processInput);
}

function stage3() {
    clear();
	print("\n<h2>Stage 3</h2>");
    let flavor = inventory.find(i => ["Chocolate Ganache", "Berry Compote", "Cream Caramel"].includes(i));
    print("Stage 3");
printAscii(`

⠀⠀⠀⠀⣀⣀⣀⣀⠤⡤⠀⠀⠀⠀⠀⠀
⠀⢼⢉⣁⣀⣀⠤⢤⣤⠟⢲⡀⠀⠀⠀⠀
⠀⢸⢸⡀⠀⣿⣀⣀⡟⣤⠤⡏⡇⠀⠀⠀
⠀⠈⡇⡝⠛⢷⡗⠉⢿⡏⠉⢱⢧⠀⠀⠀
⠀⠀⢇⠧⣤⣜⣳⣶⣮⣽⠿⢥⢸⠀⠀⠀
⠀⠀⢸⢸⠉⠘⣿⠀⢘⠿⣀⣠⠏⡇⣀⣀
⠀⠀⢸⠬⠿⠛⠒⣟⠛⠉⠉⠉⠉⡹⢡⠋
⠀⢀⢮⢤⣢⠖⠋⠀⠙⠮⣢⠄⢈⢵⠅⠀
⠀⣮⡔⢻⠀⠀⠀⠀⠀⠀⠈⠑⠋⡞⡇⠀
⠈⠀⠈⠹⡀⠀⠀⠀⠀⠀⠀⠀⠀⡇⢧⠀
⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⢸⢸⠀
⠀⠀⠀⠀⡇⠀⠀⠀⣤⡤⠤⠤⠤⢊⣸⠀
⠀⠀⠀⠀⠑⠔⠒⠒⠚⠉⠉⠉⠉⠁⠀⠀
`);
    print("\nYou fill the cake with " + flavor + ". Now you need the buttercream for coating the cake and decorations. Luckily for everyone, Chef has prepared it already.");
    print("\n\t<b>Get buttercream</b>");

    function processInput(input) {
        if (input === "get buttercream") {
            print("\nYou have the buttercream! Now for the final stage:");
            print("\nWould you like to do <b>piping</b> and decorate your cake, or just <b>show chef</b> the coated cake? Type the oen you choose.");
            waitForInput(stage4);
        } else {
            waitForInput(processInput);
        }
    }
    waitForInput(processInput);
}

function stage4(input) {
    clear();
    print("<h2>Stage 4</h2>");
    if (input === "piping") {
        print("\nYou spend extra time on a beautiful piping work. It looks amazing!");
    } else {
        print("\nYou decide the cake looks great as it is. Simple and clean with a delicious filling, which is the most important part.");
    }
  
    print("\nChef: For goodness cake, what a masterpiece!");
    print("\nYou plate a slice and take a bite. It's delicious! Great job.");

	printAscii (`⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⡞⣧⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣀⣀⣀⣳⣋⣀⣀⡀⠀⠀⠀
⠀⠀⠀⢸⡿⢯⣍⡉⣉⣩⠿⢻⠀⠀⠀
⠀⠀⣤⡼⠧⠤⠬⠭⠭⠤⠤⠼⠤⡄⠀
⠀⠀⣿⣠⣤⣰⣆⣠⣄⣴⣀⣶⣠⡇⠀
⠀⣀⣿⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣇⡀
⠸⡯⠭⠭⠭⠭⣭⠭⢭⡭⠭⠭⠭⠭⡽
⠀⠀⠀⠀⢠⣾⣯⣤⣤⣽⣦⡄⠀⠀⠀
`);
    print("\n The end!");
    gameActive = false;
}

function start() {
    clear();
    printAscii(`
      ⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣤⣤⣾⣿⣿⣿⣿⣷⣶⣶⣦⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡿⠿⠿⠿⠿⠿⠿⢿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⣴⣶⣶⣶⣶⣦⣤⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⢿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⣶⣶⣤⣤⣤⣤⣶⣶⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿⡉⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⡇⢻⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣥⣽⡇⢸⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠈⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ `);

    print("Welcome to my game! You will be in charge of baking and decorating a yellow cake! You'll work in 4 stages."); print("\nType <b>Enter</b> to start.");

    function processInput(input) {
        labStations();
    }
    
    waitForInput(processInput);
}

