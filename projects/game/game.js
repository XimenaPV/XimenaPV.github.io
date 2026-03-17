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
    print("\nHead to the changing rooms: \n\tLocker Room");

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
    print("\n\tbathroom\n\tpick up apron");

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
    print("\nHead to the lab stations: \n\tLab Stations");

    function processInput(input) {
        if (input === "lab stations") {
            labStationS();
	print("\nPress <b>Enter</b> to listen to the instructions for Stage 1.");

waitForInput(function() {
                stage1(); 
});
       } else {
            print("\nYou need an apron to continue the game. Go get it!");
            waitForInput(processInput);
        }
    }
    waitForInput(processInput);
}

function labStationS() {
    clear();
    print("\nYou have your apron. Now you are ready to get started! Wait here until Chef gives instructions");
	print("\nType: wait for chef"); 
   function processInput(input) {
         if (input === "wait for chef") {
             print("\nChef is getting ready to explain Stage 1.");
             print("\nPress <b>Enter</b> to listen to the instructions.");
             waitForInput(function() {
                 stage1(); 
             });
         } else {
             print("\nWait for Chef before you start!");
             waitForInput(processInput);
         }
     }
     waitForInput(processInput);
 }

function start() {
    clear();
    printAscii(`
      _........_
   .d888888888888b.
  d888+"""""+888888.
   8b' o  o  \`88888b
 _.8P (_)    .888888
d88P .____, .d88888P
888b.       :88888P'
\`"""""\`-----\`""""'
    `);

    print("Welcome to my game! You will be in charge of baking and decorating a yellow cake! You'll work in 4 stages."); print("\nPress Enter to start...");

    function processInput(input) {
        labStations();
    }
    
    waitForInput(processInput);
}

