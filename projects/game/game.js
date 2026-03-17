let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let currentDay = 0;  
let score = 0;              
let inventory = []; 
let bathroom = false;
let dishRoom = false; 
let walkInFridge = false;
let ovenArea = false;
let labStation = true;

//If you need, add any "helper" functions here


function labStations() {
    clear();
    print("\You walked into the Culinary Arts classroom! Chef greets you and tells you to go change into your uniform.");
    print("\nHead to the changing rooms: \n\tLocker Room");
	}
function processInput(input){
	if (input.toLowerCase() === "locker room")
            lockerRoom();
	} else{
	print(("\nChef points at the door: 'Locker room is that way!'");
	waitForInput(processInput);}
	{
	waitForInput(processInput);}
}

function lockerRoom() {
    clear();
    print("\nYou are in the locker room! You see some of your classmates and greet them. Then, you change into your uniform. Do not forget your chef hat!");
    print("\nNow that you are changed, choose whether you want to go to wash your hands in the bathroom or if you want to go pick up an apron from the lab station.");
    print("\nWalk to the bathroom. Take your apron before walking in." +
        "\n\tBathroom");
 }   
function start(){
    print("Welcome to my game! You will be in charge of baking and decorating a yellow cake! You'll have 4 days to work on your creation.  Press any key to start");

    function processInput(input){
            labStations();
    }
    waitForInput(processInput);
}

function dayName(dayNumber) {
	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
	return days =[dayNumber] || 'Finish Day!';
}

function updateScore(points) {
	score += points;
	print("/n[ + " + points + "Here is your current score: " + score + "]");
	
